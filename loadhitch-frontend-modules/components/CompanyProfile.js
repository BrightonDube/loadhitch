import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const CompanyProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.formStyle}>
      <Container>
        <Row className="justify-content-center w-100 py-5">
          <Col xs={12} sm={10} md={8}>
            <Form className="w-90 mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label className="mt-3">Company Name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  ref={register({ required: false, maxLength: 40 })}
                />
                {errors.companyName &&
                  errors.companyName.type === "maxLength" && (
                    <span>Max length exceeded</span>
                  )}
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label className="mt-3">Company Address</Form.Label>
                <Form.Control
                  placeholder="Address Line 1"
                  size="lg"
                  type="text"
                  name="address1"
                  ref={register({
                    required: "Address required",
                  })}
                />
              </Form.Group>
              {errors.address && (
                <div className={styles.errorsText}>
                  {errors.address.message}
                </div>
              )}
              <Form.Group controlId="formGridAddress2">
                <Form.Control
                  placeholder="Address Line 2"
                  size="lg"
                  type="text"
                  name="address2"
                  ref={register({
                    required: false,
                  })}
                />
              </Form.Group>

              <Form.Group controlId="formGridCity">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="City"
                  name="city"
                  ref={register({
                    required: "City required",
                    maxLength: {
                      value: 30,
                      message: "character limit reached",
                    },
                  })}
                />
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Control
                  as="select"
                  defaultValue="Province..."
                  size="lg"
                  name="role"
                  ref={register({ required: "Province is required" })}
                >
                  <option>Province...</option>
                  <option>Saskachewan</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGridZip">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Zip Code"
                  name="zip"
                  ref={register({
                    required: "Zip Code required",
                    maxLength: {
                      value: 30,
                      message: "character limit reached",
                    },
                  })}
                />
              </Form.Group>
              {errors.zip && (
                <div className={styles.errorsText}>{errors.zip.message}</div>
              )}
              <Form.Group controlId="formGridZip">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Canada"
                  value="Canada"
                  name="country"
                  ref={register({
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Contact Person</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Full Name"
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
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 digits",
                    },
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
                <Form.Label className="mt-3">Company Information</Form.Label>
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
                <Form.Label className="mute">MC Number </Form.Label>
                <span> (If you travel interstate within the US)</span>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="MC Number"
                  name="mcnumber"
                  ref={register({ required: false })}
                />
                {errors.mcnumber && (
                  <div className={styles.errorsText}>
                    {errors.mcnumber.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="CBSA Number"
                  name="cbsa"
                  ref={register({ required: "CBSA number is required" })}
                />
                {errors.cbsa && (
                  <div className={styles.errorsText}>{errors.cbsa.message}</div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="Are you Registered for Sales Tax?"
                  size="lg"
                  name="tax"
                  ref={register({ required: "Tax status is required" })}
                >
                  <option>Are you Registered for Sales Tax?</option>
                  <option value="yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
                {errors.tax && (
                  <div className={styles.errorsText}>{errors.tax.message}</div>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="taxreg"
                  ref={register({ required: true })}
                >
                  <option>What sales tax are you registered for?</option>
                  <option value="">Alberta GST</option>
                  <option value="British Columbia PST">
                    British Columbia PST
                  </option>
                  <option value="Manitoba PST">Manitoba PST</option>
                  <option value="New Brunswick HST">New Brunswick HST</option>
                  <option value="Newfoundland & Labrador HST">
                    Newfoundland & Labrador HST
                  </option>
                  <option value="Northwest Territories GST">
                    Northwest Territories GST
                  </option>
                  <option value="Nova Scotia HST">Nova Scotia HST</option>
                  <option value="Nunavut  GST">Nunavut GST</option>
                  <option value="Ontario HSR">Ontario HSR</option>
                  <option value="Prince Edward Island HST">
                    Prince Edward Island HST
                  </option>
                  <option value="Quebec QST">Quebec QST</option>
                  <option value="Saskatchewan PST">Saskatchewan PST</option>
                  <option value="Yukon GST">Yukon GST</option>
                </Form.Control>
                {errors.taxreg && (
                  <div className={styles.errorsText}>
                    Make a valid Selection
                  </div>
                )}
              </Form.Group>

              <Button
                className={`mx-auto ${styles.submitButton}`}
                variant="success"
                type="submit"
                size="lg"
              >
                Next
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyProfile;
