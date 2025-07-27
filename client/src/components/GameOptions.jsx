import { MdOutlineRefresh } from "react-icons/md";
import { PiEraser } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { useBoard } from "../context/BoardContext";
import Timer from "../components/Timer";

const GameOptions = () => {
  const {
    clearPickedMove,
    undoMove,
    mistakes,
    notesMode,
    setNotesMode,
    hints,
    setHints,
    insertHintValue,
  } = useBoard();

  return (
    <>
      <div className="flex justify-between mb-2 ">
        <div>
          <p className="text-gray-400 font-extrabold text-md flex ">
            Mistakes: {mistakes}/3
          </p>
        </div>
        <div className="text-gray-400 font-extrabold text-md flex gap-1">
          Time: <Timer />
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
        <div
          className={`relative w-14 h-14 flex items-center 
          justify-center bg-purple-200 rounded-full hover:bg-purple-300 cursor-pointer box-border
          ${
            notesMode
              ? "border-2 border-blue-500"
              : "border-2 border-transparent"
          }`}
          onClick={() => setNotesMode((prev) => !prev)}
        >
          <BsPencil size={32} />
          <div
            className={`absolute top-[-25%] left-[50%] bg-slate-300 
          w-10 h-8 rounded-full flex items-center justify-center 
           ${notesMode ? "text-white bg-blue-400" : ""} `}
          >
            {notesMode ? "ON" : "OFF"}
          </div>
        </div>
        <div
          onClick={() => {
            setHints((prev) => (prev > 0 ? (prev -= 1) : prev));
            hints !== 0 ? insertHintValue() : "";
          }}
          className="relative w-14 h-14 flex items-center justify-center
           bg-purple-200 rounded-full hover:bg-purple-300 cursor-pointer"
        >
          <FaRegLightbulb size={32} />
          <div
            className={`absolute top-[-18%] left-[70%]
               flex items-center justify-center text-xl 
            `}
          >
            {hints}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameOptions;
