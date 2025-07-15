export const generateEmptyBoard = () =>
  Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => ({ value: 0, notes: [] }))
  );

export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const isValid = (board, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i].value === num || board[i][col].value === num)
      return false;

    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[boxRow][boxCol].value === num) return false;
  }
  return true;
};

export const fillBoard = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col].value === 0) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let num of nums) {
          if (isValid(board, row, col, num)) {
            board[row][col].value = num;
            if (fillBoard(board)) return true;
            board[row][col].value = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

export const removeCells = (board, clues = 36) => {
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
  let cellsToRemove = 81 - clues;

  while (cellsToRemove > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (newBoard[row][col].value !== 0) {
      newBoard[row][col] = { value: 0, notes: [] };
      cellsToRemove--;
    }
  }

  return newBoard;
};
