import { useNavigate } from "react-router-dom";

export default function Rules() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/rules");
  };

  return (
        <h1>Welcome to Lucy's Sudoku</h1>
  );
}