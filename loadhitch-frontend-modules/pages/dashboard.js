import { Container, Row, Col } from "react-bootstrap";
import Revenue_chart from "../components/Revenue_chart";
import Distance_chart from "../components/Distance_chart";
const dashboard = ({ authenticated }) => {
  authenticated = true;
  if (authenticated) {
    return (
      <Container>
        <Row className="text-center w-100">
          <Col className="align-self-center py-3">
            <h1>My Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Revenue_chart />
          </Col>
          <Col>
            <Distance_chart />
          </Col>
        </Row>
      </Container>
    );
  } else return null;
};

export default dashboard;
