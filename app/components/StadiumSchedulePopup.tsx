import React, { useEffect, useState } from 'react';
import gameSchedule from '@/constants/games.json';
import { Stadium } from '@/types/types';
interface CustomStadiumSchedulePopupProps {
    currTime: Date;
    stadium: Stadium;
}
const StadiumSchedulePopup: React.FC<CustomStadiumSchedulePopupProps> = (props) => {
    const [filteredGames, setFilteredGames]=useState<{date: Date, opponent: string}[]>([]);
    useEffect(() => {

// Iterate through the dates array
        gameSchedule.dates.forEach(date => {
        // Filter games where the home team is "Chicago White Sox"
        const games = date.games.filter(game => game.teams.home.team.name === props.stadium.team);

        // Extract dates and times
        games.forEach(game => {
            console.log(game);
            setFilteredGames(filteredGames => [...filteredGames, {
                date: new Date(game.gameDate),
                opponent: game.teams.away.team.name,
            }]);
        });
        });
    }, []);
    return (
        <div className="p-4 bg-white rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">{props.stadium.name}</h1>
            <h1 className="text-2xl font-bold mb-4">Upcoming Schedule</h1>
            <div className="h-64 overflow-y-auto">

            <ul className="list-disc pl-5">
                {filteredGames.map((game, index) => (
                    <li key={index} className="mb-2" data-tip={game.opponent}>
                        <span className="font-semibold text-2xl">{game.date.toDateString()} vs. {game.opponent} at {game.date.toLocaleTimeString()}</span> 
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default StadiumSchedulePopup;