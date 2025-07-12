import { useBoard } from "../context/BoardContext";

const GameBoard = () => {
  const { board, initialBoard, solvedBoard, selectedCell, handleCellClick } =
    useBoard();

  const getCellColor = (row, col) => {
    const value = board[row][col];
    const isInitial = initialBoard[row][col] !== 0;

    if (isInitial) return "text-black";
    if (value === 0) return "";
    return value === solvedBoard[row][col] ? "text-blue-600" : "text-red-600";
  };

  return (
    <div>
      <div className="w-[30rem] h-[30rem] border-4 border-black">
        <div className="grid grid-cols-9 grid-rows-9 h-full w-full">
          {board.flat().map((cell, i) => {
            const row = Math.floor(i / 9);
            const col = i % 9;
            const isSelected =
              selectedCell?.row === row && selectedCell?.col === col;

            return (
              <div
                key={i}
                onClick={() => handleCellClick(row, col)}
                className={`flex items-center justify-center border text-xl font-bold cursor-pointer select-none
                  ${col % 3 === 2 && col !== 8 ? "border-r-4" : ""}
                  ${row % 3 === 2 && row !== 8 ? "border-b-4" : ""}
                  ${isSelected ? "bg-yellow-200" : ""}
                  ${getCellColor(row, col)}`}
              >
                {cell !== 0 ? cell : ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
