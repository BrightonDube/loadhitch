import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";
import { taxOptions, provincesOptions } from "../data/data";
import Link from "next/link";
import styles from "../styles/Register.module.css";
import Select from "react-select";

const CompanyProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: "1px solid #70ad47;",
      backgroundColor: "#000",
      color: state.isSelected ? "black" : "blue",
      padding: 20,
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#000",
      borderColor: "red",
      borderStyle: "solid",
    }),
  };
  return (
    <div className={styles.formStyle}>
      <Row className="justify-content-center w-100 py-5">
        <Col xs={12} sm={10}>
          <Form className="w-90 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label className="mt-3">Company Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Company Name"
                name="companyName"
                ref={register({
                  required: "Company name required",
                  maxLength: {
                    value: 40,
                    message: "Character limit reached",
                  },
                })}
              />
              {errors.companyName && (
                <div className={styles.errorsText}>
                  {errors.companyName.message}
                </div>
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
            {errors.address1 && (
              <div className={styles.errorsText}>{errors.address1.message}</div>
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
                name="province"
                ref={register({ required: "Province is required" })}
              >
                <option value={null}>Province</option>
                {provincesOptions.map((option, index) => (
                  <option key={index} value={option.label}>
                    {option.value}
                  </option>
                ))}
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
                <div className={styles.errorsText}>{errors.email.message}</div>
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
                <div className={styles.errorsText}>DOT Number is required</div>
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
                {taxOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
              {errors.taxreg && (
                <div className={styles.errorsText}>Make a valid Selection</div>
              )}
            </Form.Group>
            <Form.Group>
              <Select
                className={styles.selectStyle}
                isMulti
                styles={customStyles.option}
                options={taxOptions}
              />
            </Form.Group>

            <Link passRef href="/step2">
              <Button
                className={`${styles.submitButton}`}
                variant="success"
                type="submit"
                size="lg"
              >
                Next
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyProfile;
