import { FlightEntry } from "@/types/types";
import { Plus } from 'lucide-react';


export type FlightsProps = {
    flights: FlightEntry[];
    onChoose: (flight: FlightEntry) => void;
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


const Flights: React.FC<FlightsProps> = ( {flights, onChoose}) => {
    
    
    return (
        <div className="w-1/2 mr-2 border rounded p-4">
            <h2 className="text-xl font-bold mb-2">List of Flights</h2>
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
                                    <div>{formatDateTime(flight.to.datetime)}</div>
                                    <div>{formatDateTime(flight.from.datetime)}</div>
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