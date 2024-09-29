"use client";

import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface CustomClockProps {
    suppressHydrationWarning?: boolean;
}

const CustomClock: React.FC<CustomClockProps> = ({ suppressHydrationWarning }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        /* Clock at the top */ 
        < div className = "text-center mb-4" >
            <h1 className="text-3xl font-bold flex items-center justify-center" suppressHydrationWarning>
                <Clock className="mr-2" />
                {time.toLocaleTimeString()}
            </h1>
        </div >
    );
};

export default CustomClock;