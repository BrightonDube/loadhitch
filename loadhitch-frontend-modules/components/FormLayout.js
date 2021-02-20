import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const FormLayout = ({ children }) => {
  return (
    <div className={styles.formStyle}>
      <Container>
        <Row>
          <Col className="text-center pt-5">
            <h1>Carrier Profile Setup</h1>
          </Col>
        </Row>
        <Row className="justify-content-center w-100 py-5">
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormLayout;
