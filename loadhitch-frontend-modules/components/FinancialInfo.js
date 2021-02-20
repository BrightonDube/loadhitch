import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import styles from "../styles/Register.module.css";

const FinancialInfo = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormLayout>
      <FormNav />
      <Container>
        <Row className="justify-content-center w-100 py-5">
          <Col xs={12} sm={10} md={8}>
            <Form className="w-90 mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Bank Account Number"
                  name="bank_account"
                  ref={register({
                    required: "Account Number Required",
                    maxLength: {
                      value: 30,
                      message: "character limit reached",
                    },
                  })}
                />
                {errors.Name && (
                  <div className={styles.errorsText}>
                    {errors.bank_account.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Institution Code"
                  name="institution"
                  ref={register({
                    required: false,
                    maxLength: {
                      value: 30,
                      message: "character limit reached",
                    },
                  })}
                />
                {errors.LName && (
                  <div className={styles.errorsText}>
                    {errors.institution.message}
                  </div>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Transit Number"
                  name="transitNumber"
                  ref={register({ required: false, maxLength: 40 })}
                />
                {errors.name && errors.name.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
              </Form.Group>

              <Button
                className={`mx-auto ${styles.submitButton}`}
                variant="success"
                type="submit"
                size="lg"
              >
                Finish
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </FormLayout>
  );
};

export default FinancialInfo;
