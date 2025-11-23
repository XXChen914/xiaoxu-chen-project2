import { useContext } from "react";
import { SudokuContext } from "./SudokuProvider";
import './SudokuCell.css'

export default function SudokuCell(props) {

    const {x, y} = props;

    const sudokuDataAndFuncs = useContext(SudokuContext);
    const value = sudokuDataAndFuncs.board[x][y];
    const cellIsGuessed = sudokuDataAndFuncs.cellIsGuessed

    const selectCell = sudokuDataAndFuncs.selectCell

    const className = cellIsGuessed(x,y) ? "boggleCell selectedCell" : "boggleCell"

    //selectedCell
    return (
        <div className={className} onClick={() => addToGuess(x, y)}>
            {value}
        </div>
    )
}