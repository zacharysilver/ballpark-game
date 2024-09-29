import { FlightEntry } from "@/types/types";
import { Plus } from 'lucide-react';

import flightsOrig from "@/constants/combined_flights_data.json";
import { useState } from "react";
import Input from "./ui/input";
import Button from "./ui/button";

import { disambiguator } from "@/constants/dictionaries";
import { airport2city, validCities } from "@/constants/airport-mapping";

export type FlightsProps = {
    flights: FlightEntry[];
    onChoose: (flight: FlightEntry) => void;
    setFlights: (flights: FlightEntry[]) => void;
    currentDate: Date;
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

function isAirport(loc: string) {
    return loc in airport2city;
}
function areEquivalent(aloc: string, bloc: string) {
    const aairport = isAirport(aloc);
    
    if (aairport) {
        return aloc.toLowerCase() === bloc.toLowerCase();
    }
    
    console.log(aloc, bloc)
    
    // if not an airport, then convert both into city names
    const citypart = aloc.split(',')[0].toLowerCase();
    if (validCities.includes(citypart)) {
        const bcity = airport2city[bloc as 'JFK'].split(',')[0];
        console.log(citypart, bcity);
        return citypart.toLowerCase() === bcity.toLowerCase();
    }
}

const Flights: React.FC<FlightsProps> = ( {flights, onChoose, setFlights, currentDate}) => {
    const [getFrom, setFrom] = useState('');
    const [dest, setDest] = useState('');
    

    const handleFilter = () => {
        console.log(validCities);
        const filteredFlights = (flightsOrig as any).data.filter((flight: any) =>
            // flight.SA.toLowerCase() === getFrom.toLowerCase() &&
            // flight.DA.toLowerCase() === dest.toLowerCase()
            areEquivalent(getFrom, flight.SA) &&
            areEquivalent(dest, flight.DA)
            
        );
        
        // construct valid stuff
        const correct = filteredFlights.map((flight: any) => {
            // const ST = flight.ST ?? '2024-10-05';
            const A = flight.A;
            const airline = A in disambiguator['carriers'] ? (disambiguator as any)['carriers'][A] : A;
            const og_DT = new Date(flight.DT) as Date;
            const og_AT = new Date(flight.AT) as Date;
            
            // Calculate the offset in whole days
            const offsetInDays = Math.floor((og_DT.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

            // Subtract the offset from both og_DT and og_AT
            const adjusted_DT = new Date(og_DT.getTime() - offsetInDays * 24 * 60 * 60 * 1000);
            const adjusted_AT = new Date(og_AT.getTime() - offsetInDays * 24 * 60 * 60 * 1000);

            return {
                airline: airline,
                from: {
                    location: flight.SA,
                    datetime: adjusted_DT // new Date(flight.DT)
                },
                to: {
                    location: flight.DA,
                    datetime: adjusted_AT // new Date(flight.AT)
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
                            <Plus size={20} className="mr-2 cursor-pointer" onClick={() => onChoose(flight)} />
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
                            

                            
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Flights;