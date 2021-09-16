import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Result = ({ isFinished, result }) => {
  if (!isFinished) return null;

  return (
    <Row className="h-100">
      <Card>
        <Card.Body className="display-1 text-center">
          {Object.values(result).reduce((acc, val) => acc + val)} /{" "}
          {Object.keys(result).length}
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Result;
