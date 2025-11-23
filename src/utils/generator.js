
function commonSudokuBuilder(size = 9, difficulty = "normal") {
  const board = Array(size)
    .fill(0)
    .map(() => Array(size).fill("_"));

  // Step 1: Fill the board with valid random numbers based on size
  fillBoard(board);

  // Step 2: Once the board is created, randomly remove 28-30 numbers to create the puzzle
  const totalCells = size * size;
  let keepCells =
    difficulty === "hard"
      ? 28
      : difficulty === "easy"
      ? 18
      : Math.floor(totalCells / 3);
  const cellsToRemove = size * size - keepCells;

  // Get all cells and shuffle
  const filledCells = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      filledCells.push([i, j]);
    }
  }
  filledCells.sort(() => Math.random() - 0.5);

  // Remove the required number of cells
  for (let i = 0; i < cellsToRemove; i++) {
    const [row, col] = filledCells[i];
    board[row][col] = 0;
  }

  return board;
}

function fillBoard(board) {
  const size = board.length;
  const boxHeight = size === 9 ? 3 : 2;
  const boxWidth = size === 9 ? 3 : 3;

  function isValid(r, c, num) {
    // Check row
    for (let x = 0; x < size; x++) {
      if (board[r][x] === num) return false;
    }

    // Check column
    for (let x = 0; x < size; x++) {
      if (board[x][c] === num) return false;
    }

    // Check box
    const boxR = Math.floor(r / boxHeight) * boxHeight;
    const boxC = Math.floor(c / boxWidth) * boxWidth;
    for (let i = 0; i < boxHeight; i++) {
      for (let j = 0; j < boxWidth; j++) {
        if (board[boxR + i][boxC + j] === num) return false;
      }
    }
    return true;
  }

  // Backtracking function to create a sudoku board
  function backtrack(i = 0) {
    if (i === size * size) return true;

    const r = Math.floor(i / size);
    const c = i % size;

    const candidates = Array.from({ length: size }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );

    for (let num of candidates) {
      if (isValid(r, c, num)) {
        board[r][c] = num;
        if (backtrack(i + 1)) return true;
        board[r][c] = 0;
      }
    }
    return false;
  }

  const success = backtrack();

  if (!success) {
    console.log("Failed to generate a valid board!");
    return false;
  }

  return true;
}

function prettyPrintBoard(board) {
  const size = board.length;

  for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {
      const cell = board[i][j] === 0 ? "_" : board[i][j];
      row += cell + "  ";

      // Add vertical separator between subgrids
      if (size === 9 && (j + 1) % 3 === 0 && j < size - 1) {
        row += "|  ";
      } else if (size === 6 && (j + 1) % 3 === 0 && j < size - 1) {
        row += "|  ";
      }
    }

    console.log(row);

    // Add horizontal separator between subgrids
    if (size === 9 && (i + 1) % 3 === 0 && i < size - 1) {
      console.log("-".repeat(row.length));
    } else if (size === 6 && (i + 1) % 2 === 0 && i < size - 1) {
      console.log("-".repeat(row.length));
    }
  }
  console.log("\n");
}