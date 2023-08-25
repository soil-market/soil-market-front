import React, { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

interface CountdownProps {
  time: number; // Initial time in seconds
  onEnd?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ time, onEnd }) => {
  const [remainingTime, setRemainingTime] = useState<number>(time);

  const id = useInterval(() => {
    if (remainingTime > 0) {
      setRemainingTime((prevTime) => prevTime - 1);
      console.log(remainingTime);
    }
  }, 1000);

  useEffect(() => {
    setRemainingTime(time);
  }, [time]);

  useEffect(() => {
    if (remainingTime === 0) {
      clearInterval(id as number);
      onEnd && onEnd();
    }
  }, [id, onEnd, remainingTime]);

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
