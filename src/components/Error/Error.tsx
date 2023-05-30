import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1 className="h1">Quiz not Found, would you like to pick again?</h1>
      <Button variant="outline-dark" className="btn btn-link-light">
        <Link to={"/"}>Yes, please</Link>
      </Button>
    </>
  );
};

export default Error;
