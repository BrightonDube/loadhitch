import { Container, Row, Column } from "react-bootstrap";
const Statistics = () => {
  return (
    <Container>
      <Row className="stats">
        <Col></Col>
      </Row>
      <style jsx>{`
        .stats {
          min-height: 40%;
          background-color: #ff0000;
        }
      `}</style>
    </Container>
  );
};

export default Statistics;
