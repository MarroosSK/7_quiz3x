import React, { useState } from "react";
import { Alert, Button, Container, Col, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState<boolean>(false);

  //random quiz
  const handleRandomQuiz = ()=>{
      const quizes = ["sport", "movie", "math"];
      const randomNumber = Math.floor(Math.random() * quizes.length)
      const randomQuiz = quizes[randomNumber]
        navigate(`/${randomQuiz}`)
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column p-5">
          <h1 className="display-1 text-center">Quiz</h1>
          <Alert variant="info">Test your knowledge with 3 quizes!</Alert>
          <div className="d-flex justify-content-center">
            <Button variant="outline-dark" className="btn btn-link-light" onClick={handleRandomQuiz}>
              Random Quiz
            </Button>
            <Button
              variant="outline-dark"
              className="btn btn-link-light"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? <GrClose /> : <MdOutlineKeyboardArrowDown />}
            </Button>
          </div>
          {showMore && (
            <div className="d-flex justify-content-center pt-2">
              <Button variant="outline-dark" className="btn btn-link-light">
                <Link to={"/sport"}>Sport</Link>
              </Button>
              <Button variant="outline-dark" className="btn btn-link-light">
                <Link to={"/movie"}>Movie</Link>
              </Button>
              <Button variant="outline-dark" className="btn btn-link-light">
                <Link to={"/math"}>Math</Link>
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
