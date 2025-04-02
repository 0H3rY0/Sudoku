import GameBoard from "./components/GameBoard";
import PickNumber from "./components/PickNumber";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <GameBoard />
      <PickNumber />
    </MainTemplate>
  );
}

export default App;
