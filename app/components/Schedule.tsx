import { ScheduleEntry } from '@/types/types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { X } from 'lucide-react';



export type ScheduleProps = {
    schedule: ScheduleEntry[];
    onDelete: (index: number) => void;
    onReorder: (newSchedule: ScheduleEntry[]) => void;
}
const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false }).format(date);
};

const Schedule: React.FC<ScheduleProps> = ( { schedule, onDelete }) => {

    
    return (
        <div className="w-1/2 ml-2 border rounded p-4">
            <h2 className="text-xl font-bold mb-2">Schedule</h2>
            <TransitionGroup component="ul" className="space-y-2">
                {schedule.map((item, index) => (
                    <CSSTransition
                        key={index}  // Ensure unique key for each entry
                        timeout={500}   // Animation duration
                        classNames="fade"  // CSS classes for transitions
                    >
                        <li className="border-b pb-2 last:border-b-0">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <span>{formatDateTime(item.from.datetime)}</span>
                                        <span>{formatDateTime(item.to.datetime)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>{item.from.location}</span>
                                        <span>{item.to.location}</span>
                                    </div>
                                </div>
                                <X
                                    size={20}
                                    className="text-red-500 ml-2 flex-shrink-0 cursor-pointer"
                                    onClick={() => onDelete(index)}
                                />
                            </div>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Schedule;