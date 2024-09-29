import { ScheduleEntry } from '@/types/types';
import { X } from 'lucide-react';



export type ScheduleProps = {
    schedule: ScheduleEntry[];
    onDelete: (index: number) => void;
    onReorder: (newSchedule: ScheduleEntry[]) => void;
}

const Schedule: React.FC<ScheduleProps> = ( { schedule, onDelete }) => {
    return (
        <div className="w-1/2 ml-2 border rounded p-4">
            <h2 className="text-xl font-bold mb-2">Schedule</h2>
            <ul className="space-y-2">
                {schedule.map((item, index) => (
                    <li key={index} className="border-b pb-2 last:border-b-0">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <span>{item.from.date} {item.from.time}</span>
                                    <span>{item.to.date} {item.to.time}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>{item.from.location}</span>
                                    <span>{item.to.location}</span>
                                </div>
                            </div>
                            <X size={20} className="text-red-500 ml-2 flex-shrink-0 cursor-pointer" 
                                onClick={() => onDelete(index)}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;