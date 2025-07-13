import { MdOutlineRefresh } from "react-icons/md";
import { PiEraser } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { useBoard } from "../context/BoardContext";

const GameOptions = () => {
  const { clearPickedMove, undoMove } = useBoard();

  const { mistakes } = useBoard();

  return (
    <>
      <div className="flex justify-between mb-2 ">
        <div>
          <p className="text-gray-400 font-extrabold text-md flex ">
            Mistakes: {mistakes}/3
          </p>
        </div>
        <div className="text-gray-400 font-extrabold text-md flex">
          Time: 00:01
        </div>
      </div>
      <div></div>
      <div className="flex gap-5 w-full text-center mb-2 justify-center items-center text-blue-500 font-extrabold">
        <div
          className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300"
          onClick={() => undoMove()}
        >
          <MdOutlineRefresh size={32} />
        </div>
        <div
          className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300"
          onClick={() => clearPickedMove()}
        >
          <PiEraser size={32} />
        </div>
        <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300">
          <BsPencil size={32} />
        </div>
        <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full hover:bg-purple-300">
          <FaRegLightbulb size={32} />
        </div>
      </div>
    </>
  );
};

export default GameOptions;
