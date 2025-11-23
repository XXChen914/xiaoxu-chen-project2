import { createContext, useContext, useState } from "react";
import { commonSudokuBuilder } from "./utils/generator";
import { Mode } from "../constants/Mode";

const sudokuContext = createContext();

export default function SudokuProvider(props) {
  const [mode, setMode] = useState(Mode.EASY.difficulty); // 'easy' or 'normal'
  const [initialBoard, setInitialBoard] = useState([[]]); // Track immutable cells
  const [board, setBoard] = useState([[]]); // current board state
  const [selectedCell, setSelectedCell] = useState(null); // {row, col}
  const [timer, setTimer] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const [invalidCells, setInvalidCells] = useState(new Set()); // Set of "row,col" strings
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Create a new puzzle
  function createNewGame(newmode = mode) {
    const size =
      newmode === Mode.EASY.difficulty ? Mode.EASY.size : Mode.NORMAL.size;
    const board = commonSudokuBuilder(size, newmode);

    // Deep copy for initial state
    const initialBoard = board.map((row) => [...row]);

    setBoard(board);
    setInitialBoardState(initialBoard);
    setmode(newmode);
    setSelectedCell(null);
    setInvalidCells(new Set());
    setIsComplete(false);
    setTimer(0);
    setIsTimerRunning(true);
  }

  function resetBoard() {
    // Restore to initial state
    const resetBoard = initialBoard.map((row) => [...row]);
    setBoard(resetBoard);
    setSelectedCell(null);
    setInvalidCells(new Set());
    setIsComplete(false);
    setTimer(0);
    setIsTimerRunning(true);
  }

  function selectCell(row, col) {
    if (isCellEditable(row, col)) {
      setSelectedCell({ row, col });
    }
  }

  function isCellEditable(row, col) {
    return initialBoard[row][col] === 0;
  }

  function inputValue(row, col, value) {
    // Check if cell is editable
    if (!isCellEditable(row, col)) return;
    // Check if value is an integer
    if (!Number.isInteger(value)) return;

    const size = board.length;
    const maxValue = size;

    // Validate input range
    if (value !== 0 && (value < 1 || value > maxValue)) return;

    // Create new board with updated value
    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = value;
    setBoard(newBoard);

    // Validate the cell and update invalid cells
    updateInvalidCells(newBoard);

    // Check if board is complete
    checkCompletion(newBoard);
  }

  const globalDataAndFunctions = {
    createNewGame,
    resetBoard,
    selectCell,
    isCellEditable,
    inputValue,
    mode,
    board,
    initialBoard,
    selectedCell,
    timer,
    isComplete,
    invalidCells,
    isTimerRunning,
    setIsTimerRunning,  
  };

  return (
    <sudokuContext.Provider value={globalDataAndFunctions}>
      {props.children}
    </sudokuContext.Provider>
  );
}
