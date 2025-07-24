import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import { BsClipboard2Check } from "react-icons/bs";
import { useBoard } from "../../context/BoardContext";
import GameLevel from "../ui/GameLevel";
import LevelsList from "../LevelsList";

const GameLevelesModal = ({ children }) => {
  const { setInitialRemovedCellsNumber } = useBoard();

  const handleLevelSelect = (cellsToRemove) => {
    setInitialRemovedCellsNumber((prev) => ({
      ...prev,
      newGame: !prev.newGame,
      removeCells: cellsToRemove,
    }));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <div className="absolute left-[88%] top-[2%]">
              <Dialog.Close className="modal-close">
                <IoClose size={28} />
              </Dialog.Close>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h2 className="font-bold text-xl text-slate-600 mb-5">
                Choose game mode
              </h2>
              <LevelsList handleLevelSelect={handleLevelSelect} />
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GameLevelesModal;
