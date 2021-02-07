import { Container, Row, Col } from "react-bootstrap";
const Statistics = () => {
  return (
    <Container>
      <Row className="stats">
        <Col></Col>
      </Row>
      <style jsx>{`
        .stats {
          height: 100px;
          background-color: #ff0000;
        }
      `}</style>
    </Container>
  );
};

export default Statistics;
