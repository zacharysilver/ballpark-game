"use client";

import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

const CustomClock: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);

    
    useEffect(() => {
        // Mark that the component has mounted
        setIsMounted(true);

        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    
    // Render nothing on the server (before mount)
    if (!isMounted || !time) {
        return null; // Or a fallback (e.g. "Loading...") to avoid hydration mismatch
    }
    
    return (
        /* Clock at the top */ 
        < div className = "text-center mb-4" >
            <h1 className="text-3xl font-bold flex items-center justify-center">
                <Clock className="mr-2" />
                {time.toLocaleTimeString()}
            </h1>
        </div >
    );
};

export default CustomClock;