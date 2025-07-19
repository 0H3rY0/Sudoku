// import { useState } from "react";
import { useBoard } from "../context/BoardContext";
import Cell from "./Cell";
import { findSameValueCells } from "../providers/boardUtils";

const GameBoard = () => {
  const {
    board,
    initialBoard,
    solvedBoard,
    selectedCell,
    handleCellClick,
    sameValueCells,
    setSameValueCells,
  } = useBoard();

  const isRelatedCell = (row, col) => {
    if (!selectedCell) return false;
    const sameRow = selectedCell.row === row;
    const sameCol = selectedCell.col === col;
    const sameBox =
      Math.floor(selectedCell.row / 3) === Math.floor(row / 3) &&
      Math.floor(selectedCell.col / 3) === Math.floor(col / 3);
    return sameRow || sameCol || sameBox;
  };

  const isSameValueCell = (row, col) =>
    sameValueCells.includes(`${row}-${col}`);

  const handleClick = (row, col) => {
    handleCellClick(row, col);
    const sameCells = findSameValueCells(board, row, col);
    setSameValueCells(sameCells);
  };

  if (!board) return "loading";

  return (
    <div className="w-[30rem] h-[30rem] border-4 border-black">
      <div className="grid grid-cols-9 grid-rows-9 h-full w-full">
        {board.flat().map((cell, i) => {
          const row = Math.floor(i / 9);
          const col = i % 9;

          return (
            <Cell
              key={i}
              row={row}
              col={col}
              cell={cell}
              isInitial={initialBoard[row][col].value !== 0}
              solvedValue={solvedBoard[row][col].value}
              isSelected={
                selectedCell?.row === row && selectedCell?.col === col
              }
              isRelated={isRelatedCell(row, col)}
              isSameValue={isSameValueCell(row, col)}
              onClick={() => handleClick(row, col)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
