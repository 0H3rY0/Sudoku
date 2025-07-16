import { useBoard } from "../context/BoardContext";
import { useState } from "react";

const GameBoard = () => {
  const { board, initialBoard, solvedBoard, selectedCell, handleCellClick } =
    useBoard();

  const [sameValueCells, setSameValueCells] = useState([]);

  const getCellColor = (row, col) => {
    const { value } = board[row][col];
    const isInitial = initialBoard[row][col].value !== 0;

    if (isInitial) return "text-black";
    if (value === 0) return "";
    return value === solvedBoard[row][col].value
      ? "text-blue-600"
      : "text-red-600";
  };

  const isRelatedCell = (row, col) => {
    if (!selectedCell) return false;

    const sameRow = selectedCell.row === row;
    const sameCol = selectedCell.col === col;
    const sameBox =
      Math.floor(selectedCell.row / 3) === Math.floor(row / 3) &&
      Math.floor(selectedCell.col / 3) === Math.floor(col / 3);

    return sameRow || sameCol || sameBox;
  };

  const isSameNumber = (row, col) => {
    const selectedValue = board[row][col].value;
    if (selectedValue === 0) {
      setSameValueCells([]);
      return;
    }

    const cells = [];

    board.forEach((r, rowIndex) => {
      r.forEach((cell, colIndex) => {
        if (
          cell.value === selectedValue &&
          (rowIndex !== row || colIndex !== col)
        ) {
          cells.push(`${rowIndex}-${colIndex}`);
        }
      });
    });

    setSameValueCells(cells);
  };

  const isSameValueCell = (row, col) => {
    return sameValueCells.includes(`${row}-${col}`);
  };

  if (!board) {
    return "loading";
  }

  return (
    <div>
      <div className="w-[30rem] h-[30rem] border-4 border-black">
        <div className="grid grid-cols-9 grid-rows-9 h-full w-full">
          {board.flat().map((cell, i) => {
            const row = Math.floor(i / 9);
            const col = i % 9;
            const isSelected =
              selectedCell?.row === row && selectedCell?.col === col;

            const { value, notes } = cell;

            return (
              <div
                key={i}
                onClick={() => {
                  handleCellClick(row, col);
                  isSameNumber(row, col);
                }}
                className={`relative flex items-center justify-center border text-xl font-bold cursor-pointer select-none
                    ${col % 3 === 2 && col !== 8 ? "border-r-4" : ""}
                    ${row % 3 === 2 && row !== 8 ? "border-b-4" : ""}
                    ${isSelected ? "bg-yellow-200" : ""}
                    ${
                      !isSelected && isRelatedCell(row, col)
                        ? "bg-blue-100"
                        : ""
                    }
                    ${isSameValueCell(row, col) ? "bg-green-200" : ""}
                    ${getCellColor(row, col)}`}
              >
                {value !== 0 ? (
                  value
                ) : (
                  <div className="absolute inset-1 grid grid-cols-3 text-xs text-gray-500">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <div
                        key={n}
                        className={notes.includes(n) ? "" : "invisible"}
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
