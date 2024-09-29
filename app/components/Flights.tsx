import { FlightEntry } from "@/types/types";
import { Plus } from 'lucide-react';

import flightsOrig from "@/constants/combined_flights_data.json";
import { useState } from "react";
import Input from "./ui/input";
import Button from "./ui/button";

import { disambiguator } from "@/constants/dictionaries";

export type FlightsProps = {
    flights: FlightEntry[];
    onChoose: (flight: FlightEntry) => void;
    setFlights: (flights: FlightEntry[]) => void;
}

const fmt = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});
const formatDateTime = (date: Date) => {
    return fmt.format(date);
};


const Flights: React.FC<FlightsProps> = ( {flights, onChoose, setFlights}) => {
    const [getFrom, setFrom] = useState('');
    const [dest, setDest] = useState('');

    const handleFilter = () => {
        const filteredFlights = (flightsOrig as any).data.filter((flight: any) =>
            flight.SA.toLowerCase() === getFrom.toLowerCase() &&
            flight.DA.toLowerCase() === dest.toLowerCase()
        );
        // construct valid stuff
        const correct = filteredFlights.map((flight: any) => {
            // const ST = flight.ST ?? '2024-10-05';
            const A = flight.A;
            const airline = A in disambiguator['carriers'] ? (disambiguator as any)['carriers'][A] : A;
            return {
                airline: airline,
                from: {
                    location: flight.SA,
                    datetime: new Date(flight.DT)
                },
                to: {
                    location: flight.DA,
                    datetime: new Date(flight.AT)
                },
                price: flight.P
            };
        });
        console.log(correct);
        setFlights(correct);
    };
    
    return (
        <div className="w-1/2 mr-2 border rounded p-4">
            <h2 className="text-xl font-bold mb-2">List of Flights</h2>
            <div className="mb-4 flex space-x-2">
                <Input
                    placeholder="From"
                    value={getFrom}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <Input
                    placeholder="Destination"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                />
                <Button onClick={handleFilter}>Go</Button>
            </div>
            <div className="h-96 overflow-y-auto">
                <ul>
                    {flights.map((flight, index) => (
                        <li key={index} className="border-b pb-2 last:border-b-0 mb-2 flex items-center">
                            <div className='flex-grow flex flex-row justify-between'>
                                <div>
                                    <div className="font-semibold">{flight.airline}</div>
                                    <div>{flight.from.location} to {flight.to.location} ${flight.price}</div>
                                </div>
                                <div>
                                    <div>{formatDateTime(flight.from.datetime)}</div>
                                    <div>{formatDateTime(flight.to.datetime)}</div>
                                </div>
                            </div>
                            <Plus size={20} className="ml-2 cursor-pointer" onClick={() => onChoose(flight)} />

                            
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Flights;