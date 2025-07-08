import { createContext, useContext, useState } from "react";

const BoardContext = createContext();

// ---------- GENEROWANIE PLANSZY ----------

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

// ---------- PROVIDER ----------

export const BoardProvider = ({ children }) => {
  const [solvedBoard] = useState(() => {
    const board = generateEmptyBoard();
    fillBoard(board);
    return board;
  });

  const [initialBoard] = useState(() => removeCells(solvedBoard, 36));
  const [board, setBoard] = useState(() => initialBoard.map((row) => [...row]));
  const [selectedCell, setSelectedCell] = useState(null);
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

    if (isValidMove(row, col, num)) {
      setBoard(newBoard);
      setValidCells((prev) => [
        ...prev.filter((cell) => !(cell.row === row && cell.col === col)),
        { row, col },
      ]);
    } else {
      setBoard(newBoard);
      setValidCells((prev) =>
        prev.filter((cell) => !(cell.row === row && cell.col === col))
      );
    }
  };

  const isValidMove = (row, col, num) => {
    return solvedBoard[row][col] === num;
  };

  return (
    <BoardContext.Provider
      value={{
        solvedBoard,
        initialBoard,
        board,
        selectedCell,
        validCells,
        handleCellClick,
        handleNumberInput,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
