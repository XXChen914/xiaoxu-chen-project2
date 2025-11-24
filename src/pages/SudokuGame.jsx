import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SudokuContext } from "../components/SudokuProvider";
import SudokuBoard from "../components/SudokuBoard";
import { Mode } from "../constants/Mode";
import "./SudokuGame.css";

export default function SudokuGame() {
  const { difficulty } = useParams();
  const {
    createNewGame,
    resetBoard,
    inputValue,
    selectedCell,
    timer,
    isComplete,
    mode,
    board,
  } = useContext(SudokuContext);

  useEffect(() => {
    if (difficulty && difficulty !== mode) {
      createNewGame(difficulty);
    }
  }, [difficulty, mode, createNewGame]);

  const maxValue = board.length || 9;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  function handleNumberClick(num) {
    if (selectedCell && !isComplete) {
      inputValue(selectedCell.row, selectedCell.col, num);
    }
  }

  function handleClear() {
    if (selectedCell && !isComplete) {
      inputValue(selectedCell.row, selectedCell.col, 0);
    }
  }

  const numberButtons = [];
  for (let i = 1; i <= maxValue; i++) {
    numberButtons.push(
      <button
        key={i}
        className="numberButton"
        onClick={() => handleNumberClick(i)}
        disabled={isComplete}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="sudokuGame">
      <h1>Sudoku</h1>

      <div className="timer">Time: {formatTime(timer)}</div>

      {isComplete && (
        <div className="congratulations">
          🎉 Congratulations! You solved the puzzle! 🎉
        </div>
      )}

      <div className="modeSelector">
        <label>Difficulty: </label>
        <select
          value={mode}
          onChange={(e) => createNewGame(e.target.value)}
          disabled={isComplete}
        >
          <option value={Mode.EASY.difficulty}>Easy (6x6)</option>
          <option value={Mode.NORMAL.difficulty}>Normal (9x9)</option>
        </select>
      </div>

      <SudokuBoard />

      <div className="numberPad">
        {numberButtons}
        <button
          className="numberButton clearButton"
          onClick={handleClear}
          disabled={isComplete}
        >
          Clear
        </button>
      </div>

      <div className="gameControls">
        <button className="controlButton" onClick={() => createNewGame(mode)}>
          New Game
        </button>
        <button className="controlButton" onClick={resetBoard}>
          Reset
        </button>
      </div>
    </div>
  );
}
