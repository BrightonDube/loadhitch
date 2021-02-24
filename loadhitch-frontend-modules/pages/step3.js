import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";
import { useStateMachine } from "little-state-machine";
import updateAction from "../components/updateAction";

import styles from "../styles/Register.module.css";

const FinancialInfo = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    router.push("./results");
  };
  return (
    <FormLayout>
      <FormNav />
      <Row className="justify-content-center w-100 py-5">
        <Col xs={12} sm={10}>
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
              {errors.bank_account && (
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
              {errors.institution && (
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
              {errors.transitNumber &&
                errors.transitNumber.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
            </Form.Group>
            <Button
              className={`mx-auto ${styles.submitButton}`}
              variant="success"
              type="submit"
              size="lg"
              href="/dashboard"
            >
              Finish
            </Button>
          </Form>
        </Col>
      </Row>
    </FormLayout>
  );
};

export default FinancialInfo;
