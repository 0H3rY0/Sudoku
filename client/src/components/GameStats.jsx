import Timer from "../components/Timer";
import { useBoard } from "../context/BoardContext";

const GameStats = () => {
  const { mistakes } = useBoard();

  return (
    <div className="flex justify-between mb-3 mt-[-12px]">
      <p className="text-gray-400 font-extrabold text-md flex">
        Mistakes: {mistakes}/3
      </p>
      <div className="text-gray-400 font-extrabold text-md flex gap-1">
        Time: <Timer />
      </div>
    </div>
  );
};

export default GameStats;
