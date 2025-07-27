import { FaRegLightbulb } from "react-icons/fa";
import { useBoard } from "../../context/BoardContext";

const HintButton = () => {
  const { hints, setHints, insertHintValue } = useBoard();

  const handleClick = () => {
    if (hints > 0) {
      setHints(hints - 1);
      insertHintValue();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-14 h-14 flex items-center justify-center 
        bg-purple-200 rounded-full hover:bg-purple-300 cursor-pointer"
    >
      <FaRegLightbulb size={32} />
      <div className="absolute top-[-18%] left-[70%] flex items-center justify-center text-xl">
        {hints}
      </div>
    </div>
  );
};

export default HintButton;
