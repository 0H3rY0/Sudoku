import { MdOutlineRefresh } from "react-icons/md";
import { PiEraser } from "react-icons/pi";
import { useBoard } from "../context/BoardContext";
import GameStats from "./GameStats";
import OptionButton from "./ui/OptionButton";
import NotesToggleButton from "./ui/NotesToggleButton";
import HintButton from "./ui/HintButton";

const GameOptions = () => {
  const { clearPickedMove, undoMove } = useBoard();

  return (
    <>
      <GameStats />
      <div className="flex gap-5 w-full text-center mb-2 justify-center items-center text-blue-500 font-extrabold">
        <OptionButton
          icon={<MdOutlineRefresh size={32} />}
          onClick={undoMove}
        />
        <OptionButton icon={<PiEraser size={32} />} onClick={clearPickedMove} />
        <NotesToggleButton />
        <HintButton />
      </div>
    </>
  );
};

export default GameOptions;
