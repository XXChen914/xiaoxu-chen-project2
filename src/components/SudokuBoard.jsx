import { useContext } from "react";
import { SudokuContext } from "./SudokuProvider";
import SudokuCell from "./SudokuCell";
// import "./SudokuBoard.css";

export default function SudokuBoard() {
  const { board } = useContext(SudokuContext);

  const boardComponent = board.map((row, rowIdx) => {
    return (
      <div className="sudoku-row" key={rowIdx}>
        {row.map((cell, cellIdx) => {
          return (
            <SudokuCell
              key={`${rowIdx}-${cellIdx}`}
              row={rowIdx}
              col={cellIdx}
              value={cell}
            />
          );
        })}
      </div>
    );
  });

  return <div className="sudoku-board">{boardComponent}</div>;
}