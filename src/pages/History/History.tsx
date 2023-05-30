import { useContext } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ResultData } from "../../types/types";
import { HistoryContext } from "../../context/historyContext";



const History = () => {
  const { quizHistory } = useContext(HistoryContext);

  return (
    <Container className="mt-3 position-absolute top-0 left-0">
      <Row>
        <Col>
          <Button variant="outline-dark" className="btn btn-link-light mb-3">
            <Link to="/">Back to Home</Link>
          </Button>
        </Col>
      </Row>
      <Row className="d-flex">
          {quizHistory &&
            quizHistory.map((result: ResultData, index: number) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-2">
                <Card style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title>Quiz: {result.quizName}</Card.Title>
                  <Card.Text>Score: {result.score}</Card.Text>
                  <Card.Text>Correct: {result.correctAnswers}</Card.Text>
                  <Card.Text>Wrong: {result.wrongAnswers}</Card.Text>
                </Card.Body>
              </Card>
        </Col>
            ))}
      </Row>
    </Container>
  );
};

export default History;