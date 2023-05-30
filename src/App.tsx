import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Home, MovieQuiz, SportQuiz, MathQuiz, History } from "./pages";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";

function App() {
  return (
    <Container>
      <Row className="position-relative d-flex justify-content-center align-items-center vh-100">
        <Col
          xs={12}
          sm={12}
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sport" element={<SportQuiz />} />
            <Route path="/movie" element={<MovieQuiz />} />
            <Route path="/math" element={<MathQuiz />} />
            <Route path="/history" element={<History />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
