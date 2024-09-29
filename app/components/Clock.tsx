"use client";

import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface CustomClockProps {
    suppressHydrationWarning?: boolean;
    initialTime?: Date;
    speed?: number; // Speed multiplier for the clock
}

const speedOptions = [1, 5, 20, 50, 100, 250]

const CustomClock: React.FC<CustomClockProps> = ({ suppressHydrationWarning, initialTime, speed = 1 }) => {
    const [time, setTime] = useState(initialTime || new Date(2024, 3, 1, 9, 0, 0)); // Default to April 1, 9:00 AM
const [currentSpeed, setCurrentSpeed] = useState(speed);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        const timer = setInterval(() => {
            if(!isPaused){
                setTime(prevTime => new Date(prevTime.getTime() + 1000 * currentSpeed));
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [currentSpeed, isPaused]);

    const handleSpeedUp = () => setCurrentSpeed(prevSpeed => speedOptions[speedOptions.indexOf(prevSpeed) + 1]);
    const handleSlowDown = () => setCurrentSpeed(prevSpeed => speedOptions.indexOf(prevSpeed)>0 ? speedOptions[speedOptions.indexOf(prevSpeed) - 1]: 1);
    const handlePause = () => setIsPaused(prevState => !prevState);

    
    return (
        <div className="text-center mb-4">
            <h1 className="text-8xl font-bold flex items-center justify-center 20px"  suppressHydrationWarning={suppressHydrationWarning}>
                {time.toDateString()}</h1>
            <h1 className="text-6xl font-bold flex items-center justify-center 20px" suppressHydrationWarning={suppressHydrationWarning}>
                <Clock className="mr-2" />
                {time.toLocaleTimeString()} &ensp; Speed: {currentSpeed}x
            </h1>
            <div className="flex justify-center mt-4">
                <button onClick={handleSpeedUp} className="mx-5 px-10 py-5 bg-blue-500 text-white rounded text-4xl">Speed Up</button>
                <button onClick={handleSlowDown} className="mx-5 px-10 py-5 bg-blue-500 text-white rounded text-4xl">Slow Down</button>
                <button onClick={handlePause} className="mx-5 px-10 py-5 bg-blue-500 text-white rounded text-4xl">{isPaused ? "Resume" : "Pause"}</button>
            </div>
        </div>
    );
};

export default CustomClock;