import * as Dialog from "@radix-ui/react-dialog";
import { BsClipboard2Check } from "react-icons/bs";

const GameLevel = ({ handleLevelSelect, cellsToRemove, levelName }) => {
  return (
    <Dialog.Close asChild>
      <li
        className="list-item"
        onClick={() => handleLevelSelect(cellsToRemove)}
      >
        <BsClipboard2Check size={26} />
        {levelName}
      </li>
    </Dialog.Close>
  );
};

export default GameLevel;
