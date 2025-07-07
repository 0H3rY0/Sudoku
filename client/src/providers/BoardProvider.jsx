import { createContext, useContext, useState } from "react";

const BoardContext = createContext();

// --------- BoardGeneration ----------

const generateEmptyBoard = () =>
  Array.from({ length: 9 }, () => Array(9).fill(0));

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const isValid = (board, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;

    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[boxRow][boxCol] === num) return false;
  }
  return true;
};

const fillBoard = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let num of nums) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (fillBoard(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

const removeCells = (board, clues = 36) => {
  const newBoard = board.map((row) => [...row]);
  let cellsToRemove = 81 - clues;

  while (cellsToRemove > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (newBoard[row][col] !== 0) {
      newBoard[row][col] = 0;
      cellsToRemove--;
    }
  }

  return newBoard;
};

const generateInitialBoard = () => {
  const board = generateEmptyBoard();
  fillBoard(board);
  console.log(board);
  return removeCells(board, 36);
};

// --------- BoardProvider ----------

export const BoardProvider = ({ children }) => {
  const [initialBoard] = useState(generateInitialBoard);
  const [board, setBoard] = useState(() => initialBoard);
  const [selectedCell, setSelectedCell] = useState(null);
  const [invalidCells, setInvalidCells] = useState([]);
  const [validCells, setValidCells] = useState([]);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const handleNumberInput = (num) => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;

    if (initialBoard[row][col] !== 0) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = num;

    if (isValidMove(newBoard, row, col, num)) {
      setBoard(newBoard);
      setValidCells((prev) => [
        ...prev.filter((cell) => !(cell.row === row && cell.col === col)),
        { row, col },
      ]);
      setInvalidCells((prev) =>
        prev.filter((cell) => !(cell.row === row && cell.col === col))
      );
    } else {
      setBoard(newBoard);
      setInvalidCells((prev) => [...prev, { row, col }]);
      setValidCells((prev) =>
        prev.filter((cell) => !(cell.row === row && cell.col === col))
      );
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
        invalidCells,
        validCells,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
