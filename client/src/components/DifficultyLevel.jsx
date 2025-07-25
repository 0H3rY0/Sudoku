import { levelsMapList } from "../data/levelsMapList";
import { useBoard } from "../context/BoardContext";

const DifficultyLevel = () => {
  const { initialRemovedCellsNumber } = useBoard();

  return (
    <div className="text-gray-400 font-extrabold text-md flex gap-5">
      <h1 className="p-2 pl-0">Difficulty level:</h1>
      <ul className="flex gap-5">
        {levelsMapList.map(([levelName, removeCount]) => (
          <li
            key={levelName}
            className={`rounded-md p-2 ${
              initialRemovedCellsNumber.removeCells === removeCount
                ? "text-blue-400"
                : ""
            }`}
          >
            {levelName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DifficultyLevel;
