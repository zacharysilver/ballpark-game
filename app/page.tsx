import MLBBallparkMap from './components/MLBBallparkMap';
import CustomClock from './components/Clock';

import React from 'react';
import { Clock, Plus, X } from 'lucide-react';

// Placeholder component for MLBBallparkMap


const App = () => {
    

    const flights = [
        { airline: 'Spirit Airlines', route: 'LAX to ORD', price: '$256' },
        { airline: 'United Airlines', route: 'LAX to JFK', price: '$305' },
        { airline: 'Southwest', route: 'LAX to SFO', price: '$120' },
    ];

    const schedule = [
        { date: '10-05', time: '3:40', location: 'DAL' },
        { date: '10-05', time: '8:70', location: 'IAH' },
        { date: '10-05', time: '12:20', location: 'IAH' },
        { date: '10-05', time: '19:25', location: 'DEN' },
    ];

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
                <div className="w-1/2 ml-2 border rounded p-4">
                    <h2 className="text-xl font-bold mb-2">Schedule</h2>
                    <ul>
                        {schedule.map((item, index) => (
                            <li key={index} className="mb-2 flex items-center justify-between">
                                <div>{item.date} {item.time} {item.location}</div>
                                <X size={20} className="text-red-500" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;