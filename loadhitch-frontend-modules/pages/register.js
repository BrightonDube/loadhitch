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
          <Col xs={12} sm={10} md={8}>
            <Form className="w-90 mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="First Name"
                  name="Name"
                  ref={register({ required: true, maxLength: 20 })}
                />
                {errors.Name && (
                  <div className={styles.errorsText}>
                    First name is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name"
                  name="LName"
                  ref={register({ required: true, maxLength: 20 })}
                />
                {errors.LName && (
                  <div className={styles.errorsText}>Last name is required</div>
                )}
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
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                  <div className={styles.errorsText}>Email is required</div>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  ref={register({ required: true, maxLength: 20 })}
                />
                {errors.mobileNumber && (
                  <div className={styles.errorsText}>
                    Your mobile number is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="role"
                  ref={register({ required: true, maxLength: 20 })}
                >
                  <option>Your role can be best described as</option>
                  <option value="owner operator">Owner Operator</option>
                  <option value="company owner">Company Owner</option>
                  <option value="dispatcher">Dispatcher</option>
                  <option value="operations manager">Operations Manager</option>
                  <option value="other">Other</option>
                </Form.Control>
                {errors.role && (
                  <div className={styles.errorsText}>Role is required</div>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="operation"
                  ref={register({ required: true })}
                >
                  <option>My Carrier operations is best described as</option>
                  <option value="within">Within Canadian Border</option>
                  <option value="across">Across Canadian Border</option>
                  <option value="within and across">
                    Within and across the Canadian border
                  </option>
                </Form.Control>
                {errors.operation && (
                  <div className={styles.errorsText}>
                    Make a valid Selection
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="destination"
                  ref={register({ required: true })}
                >
                  <option>Please Specify Destination</option>
                  <option value="Mexico">Mexico</option>
                  <option value="USA">USA</option>
                  <option value="both">Mexico and USA</option>
                </Form.Control>
                {errors.destination && (
                  <div className={styles.errorsText}>
                    Make a valid selection
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="DOT Number"
                  name="dot"
                  ref={register({ required: true })}
                />
                {errors.dot && (
                  <div className={styles.errorsText}>
                    DOT Number is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="area"
                  ref={register({ required: true })}
                >
                  <option>I travel within Ontario</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </Form.Control>
                {errors.area && (
                  <div className={styles.errorsText}>
                    Choose a valid location
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="regLocation"
                  ref={register({ required: true })}
                >
                  <option>
                    My Truck/s is plated in Ontario, Mexico or USA?
                  </option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </Form.Control>
                {errors.regLocation && (
                  <div className={styles.errorsText}>
                    Place of registration is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="CVOR Number"
                  name="cvor"
                  ref={register({ required: true })}
                />
                {errors.cvor && (
                  <div className={styles.errorsText}>
                    CVOR number is required
                  </div>
                )}
                <Form.Group></Form.Group>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                  name="password"
                  ref={register({
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })}
                />
                {errors.password && (
                  <div className={styles.errorsText}>
                    Password must be at least 8 characters long
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                  name="password2"
                  ref={register({
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })}
                />
                {errors.password2 && (
                  <div className={styles.errorsText}>
                    Valid password is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="email"
                  size="lg"
                  name="medium"
                  ref={register({ required: true, minLength: 6 })}
                >
                  <option>
                    Where can we send your login Security Code too?*
                  </option>
                  <option value="Mobile Number">Mobile Number</option>
                  <option value="email">Work Email Address</option>
                </Form.Control>
                {errors.medium && (
                  <div className={styles.errorsText}>
                    Make a valid selection
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10 }}>
                  <Form.Check
                    label="Agree to Terms and Conditions"
                    name="terms"
                    ref={register({ required: true })}
                  />
                  {errors.name && (
                    <div className={styles.errorsText}>
                      You must agree to the terms and conditions
                    </div>
                  )}
                </Col>
              </Form.Group>
              <Button
                className={`mx-auto ${styles.submitButton}`}
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
