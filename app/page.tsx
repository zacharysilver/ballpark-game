"use client";

import MLBBallparkMap from './components/MLBBallparkMap';
import CustomClock from './components/Clock';
import Schedule from './components/Schedule';
import { defaultFlights, defaultSchedule } from '@/constants/dev-data';

import React, { useState } from 'react';

import { ScheduleEntry } from '@/types/types';
import Flights from './components/Flights';

// Placeholder component for MLBBallparkMap


const App = () => {
    

    const [flights, setFlights] = useState(defaultFlights);

    const [schedule, setSchedule] = useState(defaultSchedule);
    
    const deleteScheduleEntry = (index: number) => {
        setSchedule(schedule.filter((_, i) => i !== index));
    };
    
    const addScheduleEntry = (entry: ScheduleEntry) => {
        // keep it sorted based on entry.from.datetime
        let index = schedule.findIndex(e => new Date(e.from.datetime).getTime() > new Date(entry.from.datetime).getTime());

        // If no larger entry is found, the index will be -1, so we append the entry at the end
        if (index === -1) {
            setSchedule([...schedule, entry]);
        } else {
            // Insert the entry at the found index
            setSchedule([...schedule.slice(0, index), entry, ...schedule.slice(index)]);
        }
    };
    
    const handleReorder = (newSchedule: ScheduleEntry[]) => {
        setSchedule(newSchedule);
    };
    
    return (
        <div className="flex flex-col h-screen p-4">
            <CustomClock/>

            {/* MLBBallparkMap in the middle */}
            <div className="flex-grow mb-4">
                <MLBBallparkMap />
            </div>

            {/* Lists at the bottom */}
            <div className="flex justify-between">
                {/* List of Flights */}
                <Flights flights={flights} onChoose={addScheduleEntry}/>

                {/* Schedule */}
                <Schedule schedule={schedule} onDelete={deleteScheduleEntry} onReorder={handleReorder}/>
            </div>
        </div>
    );
};

export default App;