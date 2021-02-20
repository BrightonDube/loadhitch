import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const step1 = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
  };
  const password = useRef({});
  password.current = watch("password", "");
  return (
    <div className={styles.formStyle}>
      <Container>
        <Row>
          <Col className="text-center pt-5">
            <h1>Company Profile</h1>
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
                  ref={register({
                    required: "Name required",
                    maxLength: {
                      value: 30,
                      message: "character limit reached",
                    },
                  })}
                />
                {errors.Name && (
                  <div className={styles.errorsText}>{errors.Name.message}</div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name"
                  name="LName"
                  ref={register({
                    required: "Last name is required",
                    maxLength: {
                      value: 20,
                      message: "character limit reached",
                    },
                  })}
                />
                {errors.LName && (
                  <div className={styles.errorsText}>
                    {errors.LName.message}
                  </div>
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
                {errors.name && errors.name.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Work Email"
                  name="email"
                  ref={register({
                    required: "valid email is required",
                    pattern: {
                      // Validation pattern
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address", // Error message when validation fails.
                    },
                  })}
                />
                {errors.email && (
                  <div className={styles.errorsText}>
                    {errors.email.message}
                  </div>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  ref={register({
                    required: "Your mobile number is required",
                    maxLength: {
                      value: 30,
                      message: "character limit reached",
                    },
                  })}
                />
                {errors.mobileNumber && (
                  <div className={styles.errorsText}>
                    {errors.mobileNumber.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="role"
                  ref={register({ required: "Role is required" })}
                >
                  <option>Your role can be best described as</option>
                  <option value="owner operator">Owner Operator</option>
                  <option value="company owner">Company Owner</option>
                  <option value="dispatcher">Dispatcher</option>
                  <option value="operations manager">Operations Manager</option>
                  <option value="other">Other</option>
                </Form.Control>
                {errors.role && (
                  <div className={styles.errorsText}>{errors.role.message}</div>
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
                  ref={register({ required: "CVOR number is required" })}
                />
                {errors.cvor && (
                  <div className={styles.errorsText}>{errors.cvor.message}</div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="email"
                  size="lg"
                  name="medium"
                  ref={register({ required: true })}
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

export default step1;
