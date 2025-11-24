import { useNavigate } from "react-router-dom";

export default function Selection() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/games");
  };

  return (
        <h1>Welcome to Lucy's Sudoku</h1>
  );
}