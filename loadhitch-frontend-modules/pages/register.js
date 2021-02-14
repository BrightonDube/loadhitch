import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const about = () => {
  return (
    <div className={styles.formStyle}>
      <Container>
        <Row>
          <Col className="text-center pt-5">
            <h1>Register</h1>
          </Col>
        </Row>
        <Row className="justify-content-center w-100 py-5">
          <Col>
            <Form className="w-50 mx-auto">
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Work Email"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="tel"
                  placeholder="Mobile Number"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="Your role can be best described as"
                  size="lg"
                  required
                >
                  <option>Your role can be best described as</option>
                  <option>Owner Operator</option>
                  <option>Company Owner</option>
                  <option>Dispatcher</option>
                  <option>Operations Manager</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="My Carrier operations is best described as"
                  size="lg"
                  required
                >
                  <option>My Carrier operations is best described as</option>
                  <option>Within Canadian Border</option>
                  <option>Across Canadian Border</option>
                  <option>Within and across the Canadian border</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="Please Specify Destination"
                  size="lg"
                  required
                >
                  <option>Please Specify Destination</option>
                  <option>Mexico</option>
                  <option>USA</option>
                  <option>Mexico and USA</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="DOT Number"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control as="select" defaultValue="Yes" size="lg" required>
                  <option>I travel within Ontario</option>
                  <option>YES</option>
                  <option>NO</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="select" defaultValue="Yes" size="lg" required>
                  <option>
                    My Truck/s is plated in Ontario, Mexico or USA?
                  </option>
                  <option>YES</option>
                  <option>NO</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="CVOR Number"
                  required
                />
                <Form.Group></Form.Group>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="email"
                  size="lg"
                  required
                >
                  <option>
                    Where can we send your login Security Code too?*
                  </option>
                  <option>Mobile Number</option>
                  <option>Work Email Address</option>
                </Form.Control>
              </Form.Group>
              <Button
                className={styles.submitButton}
                variant="success"
                type="submit"
                size="lg"
              >
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
