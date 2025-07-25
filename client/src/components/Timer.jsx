import { useEffect } from "react";
import { useBoard } from "../context/BoardContext";

const Timer = () => {
  const { secondsElapsed, setSecondsElapsed } = useBoard();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsElapsed / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsElapsed % 60).toString().padStart(2, "0");

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
};

export default Timer;
