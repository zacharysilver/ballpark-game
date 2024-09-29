"use client";

import MLBBallparkMap from './components/MLBBallparkMap';
import CustomClock from './components/Clock';
import Schedule from './components/Schedule';
import { defaultSchedule } from '@/constants/dev-data';

import React, { useState } from 'react';
import { Clock, Plus} from 'lucide-react';
import { ScheduleEntry } from '@/types/types';

// Placeholder component for MLBBallparkMap


const App = () => {
    

    const flights = [
        { airline: 'Spirit Airlines', route: 'LAX to ORD', price: '$256' },
        { airline: 'United Airlines', route: 'LAX to JFK', price: '$305' },
        { airline: 'Southwest', route: 'LAX to SFO', price: '$120' },
    ];

    const [schedule, setSchedule] = useState(defaultSchedule);
    
    const deleteScheduleEntry = (index: number) => {
        setSchedule(schedule.filter((_, i) => i !== index));
    };
    
    const addScheduleEntry = (entry: ScheduleEntry) => {
        setSchedule([...schedule, entry]);
    };

    return (
        <div className="flex flex-col h-screen p-4">
            <CustomClock/>

            {/* MLBBallparkMap in the middle */}
            <div className="flex-grow mb-4 transform transition-transform duration-300 scale-75">
                <MLBBallparkMap />
            </div>

            {/* Lists at the bottom */}
            <div className="flex justify-between">
                {/* List of Flights */}
                <div className="w-1/2 mr-2 border rounded p-4">
                    <h2 className="text-xl font-bold mb-2">List of Flights</h2>
                    <ul>
                        {flights.map((flight, index) => (
                            <li key={index} className="mb-2 flex items-center">
                                <Plus size={20} className="mr-2" />
                                <div>
                                    <div className="font-semibold">{flight.airline}</div>
                                    <div>{flight.route} {flight.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Schedule */}
                <Schedule schedule={schedule} onDelete={deleteScheduleEntry} />
            </div>
        </div>
    );
};

export default App;