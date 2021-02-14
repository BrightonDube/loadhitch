import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const about = () => {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit, errors } = useForm();
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
            <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="First Name"
                  required="You must enter your name"
                  name="Name"
                  ref={register({ required: true, maxLength: 20 })}
                />
                {errors ? (
                  <div className={styles.errorText}>
                    <p>{errors.name}</p>
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name"
                  required="You must enter your last name"
                  name="LName"
                  ref={register({ required: true, maxLength: 20 })}
                />
                {errors ? (
                  <div className={styles.errorText}>
                    <p>{errors.name}</p>
                  </div>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  ref={register({ required: false, maxLength: 40 })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Work Email"
                  name="email"
                  required="Enter a valid work email"
                  ref={register}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  required="Enter a valid mobile number"
                  ref={register}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="role"
                  required="Make a selection"
                  ref={register}
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
                  defaultValue={null}
                  size="lg"
                  name="operation"
                  required="make a selection"
                  ref={register}
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
                  defaultValue={null}
                  size="lg"
                  name="destination"
                  required="make a selection"
                  ref={register}
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
                  name="dot"
                  required="DOT Number is required"
                  ref={register}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="area"
                  required
                  ref={register}
                >
                  <option>I travel within Ontario</option>
                  <option>YES</option>
                  <option>NO</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="regLocation"
                  required
                  ref={register}
                >
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
                  name="cvor"
                  required
                  ref={register}
                />
                <Form.Group></Form.Group>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                  required="Enter a valid password"
                  name="password"
                  ref={register({
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                  required="required"
                  name="password2"
                  ref={register}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="email"
                  size="lg"
                  name="medium"
                  required
                  ref={register}
                >
                  <option>
                    Where can we send your login Security Code too?*
                  </option>
                  <option>Mobile Number</option>
                  <option>Work Email Address</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10 }}>
                  <Form.Check
                    label="Agree to Terms and Conditions"
                    name="terms"
                    required
                    ref={register}
                  />
                </Col>
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
