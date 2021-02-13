import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const about = () => {
  return (
    <div className={styles.formStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Register</h1>
          </Col>
        </Row>
        <Row className="justify-content-center w-100">
          <Col>
            <Form className="w-50 mx-auto">
              <Form.Group controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter your first name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default about;
