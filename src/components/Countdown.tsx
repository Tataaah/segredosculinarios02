import React, { useState, useEffect } from 'react';

interface CountdownProps {
  initialMinutes: number;
  initialSeconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ initialMinutes, initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#4C1C24]/80 backdrop-blur-md shadow-md p-2 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2">
        <p className="font-bold text-center">A OFERTA ACABA EM:</p>
        <div className="flex items-center gap-1 font-mono text-xl font-bold">
          <span className="bg-[#C1443D] px-2 py-1 rounded-md">{minutes.toString().padStart(2, '0')}</span>
          <span>:</span>
          <span className="bg-[#C1443D] px-2 py-1 rounded-md">{seconds.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;