import { useState } from "react";
import BoardContext from "../context/BoardContext";
import { generateEmptyBoard, fillBoard, removeCells } from "./boardUtils";

export const BoardProvider = ({ children, mistakes, setMistakes }) => {
  const [solvedBoard] = useState(() => {
    const board = generateEmptyBoard();
    fillBoard(board);
    return board;
  });

  const [initialBoard] = useState(() => removeCells(solvedBoard, 36));
  const [board, setBoard] = useState(() => initialBoard.map((row) => [...row]));
  const [selectedCell, setSelectedCell] = useState(null);
  const [history, setHistory] = useState([]);
  const [notesMode, setNotesMode] = useState(false);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const InsertValue = (num) => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;
    if (initialBoard[row][col] !== 0) return;

    setHistory((prev) => [...prev, board.map((r) => [...r])]);

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = num;

    setBoard(newBoard);

    if (isValidMove(row, col, num)) {
      return;
    } else {
      setMistakes((prev) => (prev += 1));
    }
  };

  const isValidMove = (row, col, num) => {
    return solvedBoard[row][col] === num;
  };

  const undoMove = () => {
    if (history.length === 0) return;

    const previousBoard = history[history.length - 1];
    setBoard(previousBoard);
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const clearPickedMove = () => {
    const { row, col } = selectedCell;

    if (initialBoard[row][col] !== 0) {
      return;
    }

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[row][col] = 0;
      return newBoard;
    });

    setHistory((prev) => [...prev, board.map((r) => [...r])]);
  };

  return (
    <BoardContext.Provider
      value={{
        solvedBoard,
        initialBoard,
        board,
        selectedCell,
        mistakes,
        notesMode,
        setNotesMode,
        handleCellClick,
        InsertValue,
        clearPickedMove,
        undoMove,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
