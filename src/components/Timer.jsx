import { useContext } from "react";
import { SudokuContext } from "./SudokuProvider";
// import "./Timer.css";

export default function Timer() {
  const { timer, isTimerRunning, isComplete } = useContext(SudokuContext);

  // Format timer display (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Determine timer status for styling
  const getTimerStatus = () => {
    if (isComplete) return "complete";
    if (isTimerRunning) return "running";
    return "paused";
  };

  return (
    <div className={`timer-container ${getTimerStatus()}`}>
      <div className="timer-label">Time</div>
      <div className="timer-display">
        <span className="timer-digits">{formatTime(timer)}</span>
      </div>
    </div>
  );
}
