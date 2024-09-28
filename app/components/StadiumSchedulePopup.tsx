import React from 'react';
const schedule = [
    { date: "April 1", opponent: "Yankees", time: "1:05 PM" },
    { date: "April 2", opponent: "Yankees", time: "1:05 PM" },
]
const StadiumSchedulePopup = ({ }) => {
    return (
        <div className="popup">
            <div className="quotebox">
                <h2>Upcoming Schedule</h2>
                <div className="schedule">
                    <ul>
                        {schedule.map((game, index) => (
                            <li key={index} data-tip={game.opponent}>{game.date}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StadiumSchedulePopup;