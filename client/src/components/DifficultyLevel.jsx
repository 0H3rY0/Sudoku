import { useState } from "react";

const DifficultyLevel = () => {
  const levels = ["easy", "medium", "hard"];
  const [selectedMode, setSelectedMode] = useState("easy");

  return (
    <div className="text-gray-400 font-extrabold text-md flex gap-5">
      <h1 className="p-2 pl-0">Difficulty level: </h1>
      <ul className="flex gap-5">
        {levels.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedMode(item)}
            className={`hover:bg-purple-100 rounded-md p-2 cursor-pointer ${
              selectedMode === item ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DifficultyLevel;
