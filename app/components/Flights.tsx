import { FlightType } from "@/types/types";
import { Plus } from 'lucide-react';


export type FlightsProps = {
    flights: FlightType[];
    onChoose: (flight: FlightType) => void;
}

const Flights: React.FC<FlightsProps> = ( {flights, onChoose}) => {
    
    
    return (
        <div className="w-1/2 mr-2 border rounded p-4">
            <h2 className="text-xl font-bold mb-2">List of Flights</h2>
            <ul>
                {flights.map((flight, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        <Plus size={20} className="mr-2 cursor-pointer" onClick={() => onChoose(flight)}/>
                        <div>
                            <div className="font-semibold">{flight.airline}</div>
                            <div>{flight.from.location} to {flight.to.location} ${flight.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Flights;