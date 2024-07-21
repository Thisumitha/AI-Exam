import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(12 * 60 + 15); // 12 minutes and 15 seconds in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const percentage = (timeLeft / (12 * 60 + 15)) * 100; // Total time is 12:15 minutes

    return (
        <aside className="w-full bg-white p-4 border rounded-lg shadow-sm sticky top-4">
            <div className="text-center mb-4">
                <div className="text-3xl font-bold mb-2">Remaining Time</div>
                <div className="w-52 mx-auto mb-2">
                    <CircularProgressbar
                        value={percentage}
                        text={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                        styles={buildStyles({
                            textColor: '#000000',
                            pathColor: '#76E5BD',
                            trailColor: '#d6d6d6',
                        })}
                    />
                </div>
            </div>
            <div className="mb-4">
                <div className="text-4xl font-semibold">Question Panel</div>
                <div className="grid grid-cols-5 gap-2 mt-2 mb-10">
                    {[...Array(20)].map((_, i) => (
                        <button key={i} className={`p-2 border rounded ${i === 0 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <div className="text-lg font-semibold text-3xl font-bold mb-8">Problem Setter</div>
                <div className="flex items-center justify-center mt-2">
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">Z</div>
                    <span className="ml-2 font-semibold">Zero Sand</span>
                </div>
            </div>
        </aside>
    );
}
