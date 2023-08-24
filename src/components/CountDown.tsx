import React, { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

interface CountdownProps {
  time: number; // Initial time in seconds
  onEnd?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ time, onEnd }) => {
  const [remainingTime, setRemainingTime] = useState<number>(time);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useInterval(
    () => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null
  );

  useEffect(() => {
    setRemainingTime(time);
  }, [time]);

  useEffect(() => {
    if (remainingTime === 0) {
      onEnd && onEnd();
    }
  }, [onEnd, remainingTime]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime(remainingTime)}</p>
    </div>
  );
};

export default Countdown;
