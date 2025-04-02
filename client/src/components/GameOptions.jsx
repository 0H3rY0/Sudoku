import { MdOutlineRefresh } from "react-icons/md";
import { PiEraser } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

const GameOptions = () => {
  return (
    <div className="flex gap-5 w-full text-center mb-2 justify-center text-blue-500 font-extrabold">
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full">
        <MdOutlineRefresh size={32} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full">
        <PiEraser size={32} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full">
        <BsPencil size={32} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-200 rounded-full">
        <FaRegLightbulb size={32} />
      </div>
    </div>
  );
};

export default GameOptions;
