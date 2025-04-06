import DifficultyLevel from "./components/DifficultyLevel";
import GameBoard from "./components/GameBoard";
import GameOptions from "./components/GameOptions";
import PickNumber from "./components/PickNumber";
import { BoardProvider } from "./providers/BoardProvider";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <BoardProvider>
        <div className="flex flex-col gap-3">
          <div>
            <DifficultyLevel />
          </div>
          <div className="flex gap-5">
            <div>
              <GameBoard />
            </div>
            <div>
              <GameOptions />
              <PickNumber />
            </div>
          </div>
        </div>
      </BoardProvider>
    </MainTemplate>
  );
}

export default App;
