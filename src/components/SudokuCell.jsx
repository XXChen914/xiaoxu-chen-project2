import { useContext } from "react";
import { SudokuContext } from "./SudokuProvider";
import "./SudokuCell.css";

export default function SudokuCell(props) {
  const { x, y } = props;

  const sudokuDataAndFuncs = useContext(SudokuContext);
  const isSelected = selectedCell?.row === x && selectedCell?.col === y;
  const isEditable = isCellEditable(x, y);
  const isIncorrect = isCellIncorrect(x, y);
  const value = sudokuDataAndFuncs.board[x][y];

  // const className = ;

  //selectedCell
  return (
    <div className="getCellClass()" onClick={() => selectCell(x, y)}>
      {value}
    </div>
  );
}
