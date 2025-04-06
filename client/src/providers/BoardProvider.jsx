import { createContext, useContext, useState } from "react";

const BoardContext = createContext();

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

export const BoardProvider = ({ children }) => {
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
    <BoardContext.Provider
      value={{
        handleNumberInput,
        isValidMove,
        handleCellClick,
        board,
        selectedCell,
        initialBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

// 3. Hook ułatwiający używanie kontekstu
export const useBoard = () => useContext(BoardContext);
