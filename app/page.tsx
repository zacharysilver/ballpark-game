"use client";

import MLBBallparkMap from './components/MLBBallparkMap';
import CustomClock from './components/Clock';
import Schedule from './components/Schedule';
import { defaultFlights, defaultSchedule } from '@/constants/dev-data';

import React, { useState } from 'react';

import { FlightEntry, ScheduleEntry } from '@/types/types';
import Flights from './components/Flights';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';


// Placeholder component for MLBBallparkMap


const App = () => {
    

    const [flights, setFlights] = useState(defaultFlights);
    
    const [time, setTime] = useState(new Date(2024, 3, 1, 9, 0, 0)); // Default to April 1, 9:00 AM

    
    // give ids to defaultSchedule if not exists
    defaultSchedule.forEach((entry: any) => {
        if (!entry.id) {
            entry.id = uuidv4();
        }
    });
    const [schedule, setSchedule] = useState(defaultSchedule as ScheduleEntry[]);
    
    const deleteScheduleEntry = (index: number) => {
        setSchedule(schedule.filter((_, i) => i !== index));
    };
    
    const addFlightEntry = (entry: FlightEntry) => {
        // keep it sorted based on entry.from.datetime
        // let index = schedule.findIndex(e => new Date(e.from.datetime).getTime() > new Date(entry.from.datetime).getTime());
        const newEntry = { ...entry, id: uuidv4() };

        let index = -1;
        
        const entryTime = entry.from.datetime.getTime();
        for (let i = 0; i < schedule.length; i++) {
            // do not allow duplicates
            const currentEntry = schedule[i];
            const currentTime = currentEntry.from.datetime.getTime();
            
            // Check for total equality, barring the id
            if (
                currentEntry.from.datetime === newEntry.from.datetime &&
                currentEntry.from.location === newEntry.from.location &&
                currentEntry.to.datetime === newEntry.to.datetime &&
                currentEntry.to.location === newEntry.to.location &&
                currentEntry.price === newEntry.price &&
                currentEntry.airline === newEntry.airline
            ) {
                return; // Duplicate found, do not add the entry
            }

            // Find the correct insertion point
            if (entryTime < currentTime) {
                index = i;
                break;
            }
        }

        // If no larger entry is found, the index will be -1, so we append the entry at the end
        const newSchedule = [...schedule];
        if (index === -1) {
            newSchedule.push(newEntry);
        } else {
            newSchedule.splice(index, 0, newEntry);
        }
        
        setSchedule(newSchedule);
    };
    
    const handleReorder = (newSchedule: ScheduleEntry[]) => {
        setSchedule(newSchedule);
    };
    
    return (
        <div className="flex flex-col h-screen p-4">
            <CustomClock time={time} setTime={setTime} />

            {/* MLBBallparkMap in the middle */}
            <div className="">
                <MLBBallparkMap flights={schedule} />
            </div>

            {/* Lists at the bottom */}
            <div className="flex justify-between">
                {/* List of Flights */}
                <Flights flights={flights} onChoose={addFlightEntry} setFlights={setFlights} currentDate={time}/>

                {/* Schedule */}
                <Schedule schedule={schedule} onDelete={deleteScheduleEntry} onReorder={handleReorder} currentDate={time}/>
            </div>
            
            <Footer />
        </div>
    );
};

export default App;