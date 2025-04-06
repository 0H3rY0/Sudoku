import { useState } from "react";

const initialBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const GameBoard = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const handleNumberInput = (num) => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;

    // Nie nadpisuj pól z oryginalnej planszy
    if (initialBoard[row][col] !== 0) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = num;

    if (isValidMove(newBoard, row, col, num)) {
      setBoard(newBoard);
    } else {
      alert("Niepoprawny ruch!");
    }
  };

  const isValidMove = (board, row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (i !== col && board[row][i] === num) return false;
      if (i !== row && board[i][col] === num) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if ((r !== row || c !== col) && board[r][c] === num) return false;
      }
    }

    return true;
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
            const isInitial = initialBoard[row][col] !== 0;

            return (
              <div
                key={i}
                onClick={() => handleCellClick(row, col)}
                className={`flex items-center justify-center border text-xl font-bold cursor-pointer select-none
                ${col % 3 === 2 && col !== 8 ? "border-r-4" : ""}
                ${row % 3 === 2 && row !== 8 ? "border-b-4" : ""}
                ${isSelected ? "bg-yellow-200" : ""}
                ${isInitial ? "text-black" : "text-blue-600"}
                `}
              >
                {cell !== 0 ? cell : ""}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-9 gap-2 w-[30rem]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberInput(num)}
            className="bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
