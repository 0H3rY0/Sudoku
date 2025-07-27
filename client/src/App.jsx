import { useState } from "react";
import DifficultyLevel from "./components/DifficultyLevel";
import GameBoard from "./components/GameBoard";
import GameOptions from "./components/GameOptions";
import PickNumber from "./components/PickNumber";
import { BoardProvider } from "./providers/BoardProvider";
import MainTemplate from "./templates/MainTemplate";
import GameOver from "./components/GameOver";

function App() {
  const [mistakes, setMistakes] = useState(0);

  return (
    <MainTemplate>
      <BoardProvider mistakes={mistakes} setMistakes={setMistakes}>
        {mistakes > 3 ? (
          <GameOver />
        ) : (
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
        )}
      </BoardProvider>
    </MainTemplate>
  );
}

export default App;
