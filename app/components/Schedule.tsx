import { ScheduleEntry } from '@/types/types';
import { X } from 'lucide-react';



export type ScheduleProps = {
    schedule: ScheduleEntry[];
    onDelete: (index: number) => void;
    onReorder: (newSchedule: ScheduleEntry[]) => void;
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

const Schedule: React.FC<ScheduleProps> = ( { schedule, onDelete, currentDate }) => {

    
    return (
        <div className="w-1/2 ml-2 border rounded p-4">
            <h2 className="text-xl font-bold mb-2">Schedule</h2>
            <ul className="h-96 overflow-y-auto space-y-2">
                {schedule.map((item, index) => (
                    <li key={item.id} className="border-b pb-2 last:border-b-0 mb-2 flex items-center">
                        {/* <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <span>{formatDateTime(item.from.datetime)}</span>
                                    <span className="font-semibold">{item.airline}</span>
                                    <span>{formatDateTime(item.to.datetime)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>{item.from.location}</span>
                                    <span>${item.price}</span>
                                    <span>{item.to.location}</span>
                                </div>
                            </div>
                            <X size={20} className="text-red-500 ml-2 flex-shrink-0 cursor-pointer"
                                onClick={() => onDelete(index)} />
                        </div> */}
                        <div className='flex-grow flex flex-row justify-between'>
                            <div>
                                <div className="font-semibold">{item.airline}</div>
                                <div>{item.from.location} to {item.to.location} ${item.price}</div>
                            </div>
                            <div>
                                <div>{formatDateTime(item.from.datetime)}</div>
                                <div>{formatDateTime(item.to.datetime)}</div>
                            </div>
                        </div>
                        <X size={20} className="text-red-500 ml-2 flex-shrink-0 cursor-pointer"
                            onClick={() => onDelete(index)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;