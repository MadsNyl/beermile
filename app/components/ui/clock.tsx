import { useEffect, useState } from "react";
import { SlidingNumber } from "../motion/sliding-number";

interface CountdownClockProps {
    targetDate: Date;
    onComplete?: () => void;
}

export default function CountdownClock({
    targetDate,
    onComplete,
}: CountdownClockProps) {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const remainingTime = calculateTimeLeft(targetDate);
            setTimeLeft(remainingTime);

            if (remainingTime.total <= 0) {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, onComplete]);

    function calculateTimeLeft(target: Date) {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        return {
            total: difference,
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    // If the target date is over 72 hours away, show number of days left
    if (timeLeft.total > 72 * 60 * 60 * 1000) {
        const days = Math.floor(timeLeft.total / (1000 * 60 * 60 * 24));
        return (
            <div className="flex flex-col items-center text-6xl font-bold text-transparent bg-clip-text py-2 bg-gradient-to-br from-indigo-500 via-sky-600 to-pink-500">
                <p>
                    {days} <br /> <span className="text-3xl">dager igjen</span>
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-3xl font-bold">
                <SlidingNumber value={Math.max(timeLeft.hours, 0)} padStart={true} />
                <span>:</span>
                <SlidingNumber value={Math.max(timeLeft.minutes, 0)} padStart={true} />
                <span>:</span>
                <SlidingNumber value={Math.max(timeLeft.seconds, 0)} padStart={true} />
            </div>
        </div>
    );
}
