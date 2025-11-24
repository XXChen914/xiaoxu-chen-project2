import { useContext } from "react";
import { SudokuContext } from "../components/SudokuProvider";
import SudokuBoard from "../components/SudokuBoard";
import Timer from "../components/Timer";
import { Mode } from "../constants/Mode";
import "./SudokuGame.css";

export default function SudokuGame() {

  return (
        <h1>Welcome to Lucy's Sudoku</h1>
  );
  // const {
  //   createNewGame,
  //   resetBoard,
  //   mode,
  //   isComplete,
  //   inputValue,
  //   selectedCell,
  // } = useContext(SudokuContext);

  // // Handle number input from keyboard
  // const handleKeyDown = (e) => {
  //   if (!selectedCell || isComplete) return;

  //   const key = e.key;
    
  //   // Handle number input
  //   if (key >= "1" && key <= "9") {
  //     const num = parseInt(key);
  //     const maxValue = mode === Mode.EASY.difficulty ? 6 : 9;
      
  //     if (num <= maxValue) {
  //       inputValue(selectedCell.row, selectedCell.col, num);
  //     }
  //   }
    
  //   // Handle delete/backspace
  //   if (key === "Backspace" || key === "Delete" || key === "0") {
  //     inputValue(selectedCell.row, selectedCell.col, 0);
  //   }
  // };

  // // Handle difficulty change
  // const handleModeChange = (newMode) => {
  //   createNewGame(newMode);
  // };

  // return (
  //   <div className="sudoku-game" onKeyDown={handleKeyDown} tabIndex={0}>
  //     <div className="game-header">
  //       <h1>Sudoku</h1>
  //       <p className="game-subtitle">Challenge your logic and problem-solving skills</p>
  //     </div>

  //     {/* Timer Component */}
  //     <Timer />

  //     {/* Difficulty Mode Selection */}
  //     <div className="mode-section">
  //       <h2>Difficulty</h2>
  //       <div className="mode-buttons">
  //         <button
  //           className={`mode-btn ${mode === Mode.EASY.difficulty ? "active" : ""}`}
  //           onClick={() => handleModeChange(Mode.EASY.difficulty)}
  //           disabled={isComplete}
  //         >
  //           Easy (6x6)
  //         </button>
  //         <button
  //           className={`mode-btn ${mode === Mode.NORMAL.difficulty ? "active" : ""}`}
  //           onClick={() => handleModeChange(Mode.NORMAL.difficulty)}
  //           disabled={isComplete}
  //         >
  //           Normal (9x9)
  //         </button>
  //       </div>
  //     </div>

  //     {/* Completion Message */}
  //     {isComplete && (
  //       <div className="completion-message">
  //         <h2>🎉 Congratulations! 🎉</h2>
  //         <p>You've successfully completed the puzzle!</p>
  //       </div>
  //     )}

  //     {/* Game Board */}
  //     <div className="board-container">
  //       <SudokuBoard />
  //     </div>

  //     {/* Instructions */}
  //     <div className="instructions">
  //       <h3>How to Play</h3>
  //       <ul>
  //         <li>Click on an empty cell to select it</li>
  //         <li>Type a number (1-{mode === Mode.EASY.difficulty ? "6" : "9"}) to fill the cell</li>
  //         <li>Press Backspace or Delete to clear a cell</li>
  //         <li>Fill all cells following Sudoku rules</li>
  //         <li>Red borders indicate rule violations</li>
  //       </ul>
  //     </div>

  //     {/* Control Buttons */}
  //     <div className="controls-section">
  //       <h2>Options</h2>
  //       <div className="control-buttons">
  //         <button className="control-btn reset-btn" onClick={resetBoard}>
  //           Reset
  //         </button>
  //         <button className="control-btn new-game-btn" onClick={() => createNewGame(mode)}>
  //           New Game
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}