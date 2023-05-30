import { useEffect, useContext } from "react";
import {  ResultData } from "../../types/types";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HistoryContext} from "../../context/historyContext";

const Results = ({ result }: { result: ResultData }) => {
  const { setQuizHistory } = useContext(HistoryContext);

  useEffect(() => {
    setQuizHistory((prevQuizHistory: ResultData[]) => [...prevQuizHistory, result]);
  }, [result, setQuizHistory]);

  return (
    <div>
      <h3>Result of {result.quizName}</h3>
      <p>
        Total Score: <span> {result.score}</span>
      </p>
      <p>
        Correct Answers: <span> {result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers: <span> {result.wrongAnswers}</span>
      </p>
      <Button variant="outline-dark" className="btn btn-link-light">
        <Link to="/">Play Again</Link>
      </Button>
      <Button variant="outline-dark" className="btn btn-link-light">
        <Link to="/history">Show History</Link>
      </Button>
    </div>
  );
};

export default Results;
