import { MdOutlineRefresh } from "react-icons/md";
import { PiEraser } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { useBoard } from "../context/BoardContext";

const GameOptions = () => {
  const { clearPickedMove } = useBoard();

  return (
    <div className="flex gap-5 w-full text-center mb-2 justify-center text-blue-500 font-extrabold">
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300">
        <MdOutlineRefresh
          size={32}
          onClick={() => console.log("hello world")}
        />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300">
        <PiEraser size={32} onClick={() => clearPickedMove()} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300">
        <BsPencil size={32} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300">
        <FaRegLightbulb size={32} />
      </div>
    </div>
  );
};

export default GameOptions;
