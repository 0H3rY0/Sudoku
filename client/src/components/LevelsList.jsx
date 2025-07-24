import GameLevel from "./ui/GameLevel";

const LevelsList = ({ handleLevelSelect }) => {
  const levelsMapList = [
    ["Easy", 60],
    ["Medium", 54],
    ["Hard", 45],
    ["Killer", 36],
  ];

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
