import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import { BsClipboard2Check } from "react-icons/bs";
import { useBoard } from "../../context/BoardContext";

const GameOptionsModal = ({ children }) => {
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
              <ul className="bg-slate-200 rounded-lg font-semibold text-slate-600">
                <Dialog.Close asChild>
                  <li
                    className="list-item"
                    onClick={() => handleLevelSelect(60)}
                  >
                    <BsClipboard2Check size={26} />
                    Easy
                  </li>
                </Dialog.Close>

                <Dialog.Close asChild>
                  <li
                    className="list-item"
                    onClick={() => handleLevelSelect(54)}
                  >
                    <BsClipboard2Check size={26} />
                    Medium
                  </li>
                </Dialog.Close>

                <Dialog.Close asChild>
                  <li
                    className="list-item"
                    onClick={() => handleLevelSelect(45)}
                  >
                    <BsClipboard2Check size={26} />
                    Hard
                  </li>
                </Dialog.Close>

                <Dialog.Close asChild>
                  <li
                    className="list-item"
                    onClick={() => handleLevelSelect(36)}
                  >
                    <BsClipboard2Check size={26} />
                    Killer
                  </li>
                </Dialog.Close>
              </ul>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GameOptionsModal;
