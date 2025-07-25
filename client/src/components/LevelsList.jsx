import GameLevel from "./ui/GameLevel";
import { levelsMapList } from "../data/levelsMapList";

const LevelsList = ({ handleLevelSelect }) => {
  return (
    <ul className="bg-slate-200 rounded-lg font-semibold text-slate-600">
      {levelsMapList.map(([levelName, cellsToRemove]) => (
        <GameLevel
          key={levelName}
          handleLevelSelect={handleLevelSelect}
          cellsToRemove={cellsToRemove}
          levelName={levelName}
        />
      ))}
    </ul>
  );
};

export default LevelsList;
