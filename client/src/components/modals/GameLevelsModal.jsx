import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import { useBoard } from "../../context/BoardContext";
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
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <div className="absolute left-[88%] top-[2%]">
            <Dialog.Close className="modal-close">
              <IoClose size={28} />
            </Dialog.Close>
          </div>

          <div className="flex justify-center items-center flex-col">
            <Dialog.Title className="font-bold text-xl text-slate-600">
              Choose game mode
            </Dialog.Title>

            <Dialog.Description className="text-slate-500 mb-5 text-sm text-center">
              Your current game progress will be lost
            </Dialog.Description>

            <LevelsList handleLevelSelect={handleLevelSelect} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GameLevelesModal;
