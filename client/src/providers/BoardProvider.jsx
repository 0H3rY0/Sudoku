import { useState } from "react";
import BoardContext from "../context/BoardContext";
import { generateEmptyBoard, fillBoard, removeCells } from "./boardUtils";

export const BoardProvider = ({ children }) => {
  const [solvedBoard] = useState(() => {
    const board = generateEmptyBoard();
    fillBoard(board);
    return board;
  });

  const [initialBoard] = useState(() => removeCells(solvedBoard, 36));
  const [board, setBoard] = useState(() => initialBoard.map((row) => [...row]));
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const InsertValue = (num) => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;
    if (initialBoard[row][col] !== 0) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = num;
    setBoard(newBoard);
  };

  const isValidMove = (row, col, num) => {
    return solvedBoard[row][col] === num;
  };

  const undoMove = () => {};

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
  };

  return (
    <BoardContext.Provider
      value={{
        solvedBoard,
        initialBoard,
        board,
        selectedCell,
        handleCellClick,
        InsertValue,
        clearPickedMove,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
