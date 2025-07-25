import { useState, useEffect } from "react";
import BoardContext from "../context/BoardContext";
import { generateEmptyBoard, fillBoard, removeCells } from "./boardUtils";
import { findSameValueCells } from "./boardUtils";

export const BoardProvider = ({ children, mistakes, setMistakes }) => {
  const [solvedBoard, setSolvedBoard] = useState(null);
  const [initialBoard, setInitialBoard] = useState(null);
  const [board, setBoard] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [history, setHistory] = useState([]);
  const [notesMode, setNotesMode] = useState(false);
  const [sameValueCells, setSameValueCells] = useState([]);
  const [initialRemovedCellsNumber, setInitialRemovedCellsNumber] = useState({
    removeCells: 60,
    newGame: false,
  });

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [hints, setHints] = useState(3);

  useEffect(() => {
    const solved = generateEmptyBoard();
    fillBoard(solved);
    const puzzle = removeCells(solved, initialRemovedCellsNumber.removeCells);

    const userBoard = puzzle.map((row) =>
      row.map((cell) =>
        typeof cell === "object" ? { ...cell } : { value: cell, notes: [] }
      )
    );

    setSolvedBoard(solved);
    setInitialBoard(userBoard);
    setBoard(userBoard);
    setSelectedCell(null);
    setHistory([]);
    setSameValueCells([]);
    setMistakes(0);
    setSecondsElapsed(0);
    setHints(3);
  }, [initialRemovedCellsNumber]);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
    console.log(currentTime);
  };

  const isValidMove = (row, col, num) => {
    return solvedBoard[row][col].value === num;
  };

  const InsertValue = (num) => {
    if (!selectedCell || !board || !initialBoard) return;
    const { row, col } = selectedCell;

    if (initialBoard[row][col].value !== 0) return;

    setHistory((prev) => [
      ...prev,
      board.map((r) => r.map((cell) => ({ ...cell }))),
    ]);

    const newBoard = board.map((r) => r.map((cell) => ({ ...cell })));

    if (notesMode) {
      const notes = newBoard[row][col].notes || [];
      if (notes.includes(num)) {
        newBoard[row][col].notes = notes.filter((n) => n !== num);
      } else {
        newBoard[row][col].notes = [...notes, num].sort();
      }
    } else {
      newBoard[row][col].value = num;
      newBoard[row][col].notes = [];

      if (!isValidMove(row, col, num)) {
        console.log(solvedBoard);
        console.log(solvedBoard[row][col]);
        console.log(isValidMove(row, col, num));
        setMistakes((prev) => prev + 1);
      }
    }

    const sameCells = findSameValueCells(newBoard, row, col);
    setSameValueCells(sameCells);

    setBoard(newBoard);
  };

  const undoMove = () => {
    if (history.length === 0) return;

    const previousBoard = history[history.length - 1];
    setBoard(previousBoard);
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const clearPickedMove = () => {
    if (!selectedCell || !initialBoard || !board) return;
    const { row, col } = selectedCell;

    if (initialBoard[row][col].value !== 0) return;

    setHistory((prev) => [
      ...prev,
      board.map((r) => r.map((cell) => ({ ...cell }))),
    ]);

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((r) => r.map((cell) => ({ ...cell })));
      newBoard[row][col].value = 0;
      newBoard[row][col].notes = [];
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
        undoMove,
        notesMode,
        setNotesMode,
        mistakes,
        setMistakes,
        sameValueCells,
        setSameValueCells,
        setInitialRemovedCellsNumber,
        secondsElapsed,
        setSecondsElapsed,
        initialRemovedCellsNumber,
        hints,
        setHints,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
