import GameBoard from "./components/GameBoard";
import PickNumber from "./components/PickNumber";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <div className="flex flex-col">
        <div>Trudnosc</div>
        <div className="flex gap-5">
          <div>
            <GameBoard />
          </div>
          <div>
            <PickNumber />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default App;
