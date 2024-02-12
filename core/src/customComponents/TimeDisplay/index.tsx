import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-white">
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <span className="text-xl text-[#C2C2C2]">
        {currentTime.toLocaleDateString()}
      </span>
    </div>
  );
};

export default TimeDisplay;
