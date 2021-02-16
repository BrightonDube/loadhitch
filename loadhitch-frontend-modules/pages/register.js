import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const about = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
    setAuthenticated(true);
  };
  const password = useRef({});
  password.current = watch("password", "");
  return (
    <div className={styles.formStyle}>
      <Container>
        <Row>
          <Col className="text-center pt-5">
            <h1>Sign up.</h1>
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
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                  name="password"
                  ref={register({
                    required: "Password required",

                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    maxLength: { value: 20, message: "Max length exceeded" },
                    validate: (value) => {
                      return (
                        [
                          /[a-z]/,
                          /[A-Z]/,
                          /[0-9]/,
                          /[^a-zA-Z0-9]/,
                        ].every((pattern) => pattern.test(value)) ||
                        "must include lower, upper, number, and special chars"
                      );
                    },
                  })}
                />
                {errors.password && (
                  <div className={styles.errorsText}>
                    {errors.password.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  size="lg"
                  name="password2"
                  ref={register({
                    required: "confirm password",
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.password2 && (
                  <div className={styles.errorsText}>
                    {errors.password2.message}
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
                  {errors.terms && (
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
