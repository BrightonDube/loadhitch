import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "../styles/Register.module.css";
import VehicleType from "../components/VehicleType";
import FormLayout from "../components/FormLayout";
import FormNav from "../components/FormNav";
import {
  stateOptions,
  provincesOptions,
  uscitiesOptions,
  cityOptions,
} from "../data/data";

const LoadProfile = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [vehicleCount, setVehicleCount] = useState(0);
  const vehicles = useRef({});

  vehicles.current = watch("vehiclecount", "");
  const handleClick = () => {
    setVehicleCount(vehicles.current);
  };
  return (
    <FormLayout>
      <FormNav />

      <Row className="justify-content-center w-100 py-5">
        <Col xs={12} sm={10} md={10}>
          <Form className="w-90 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <InputGroup>
                <Form.Control
                  as="select"
                  defaultValue={null}
                  size="lg"
                  name="vehiclecount"
                  ref={register({
                    required: "Number of vehicles is required",
                  })}
                >
                  <option>Select your number of Transport Vehicles*</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Form.Control>

                <InputGroup.Append>
                  <Button variant="outline-success" onClick={handleClick}>
                    Confirm
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              {errors.vehiclecount && (
                <div className={styles.errorsText}>
                  {errors.vehiclecount.message}
                </div>
              )}
            </Form.Group>

            {Array.from({ length: vehicleCount }, () => ({
              hello: "goodbye",
            })).map((el, index) => (
              <VehicleType key={index} />
            ))}

            <Form.Group>
              <Form.Label>Choose your preferred haul type</Form.Label>
              <Form.Control
                as="select"
                defaultValue={null}
                size="lg"
                name="haultype"
                ref={register({ required: true })}
              >
                <option>Choose...</option>
                <option value="Full Truck Load">Full Truck Load (FTL)</option>
                <option value="Less than a Truck Load">
                  Less than a Truck Load(LTL)
                </option>
                <option value="FTL and LTL">FTL and LTL</option>
              </Form.Control>
              {errors.haultype && (
                <div className={styles.errorsText}>Make a valid selection</div>
              )}
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridLine">
                <Form.Label>Select your preferred Line</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Canada"
                  size="lg"
                  name="line"
                  ref={register({ required: true })}
                >
                  <option>From</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="Mexico">Mexico</option>
                </Form.Control>
                {errors.line && (
                  <div className={styles.errorsText}>
                    This section is required
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLine">
                <Form.Label>To</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="To"
                  size="lg"
                  name="lineto"
                  ref={register({ required: true })}
                >
                  <option>To</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="Mexico">Mexico</option>
                </Form.Control>
                {errors.lineto && (
                  <div className={styles.errorsText}>
                    This section is required
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="formHorizontalCheck">
                <Form.Label></Form.Label>
                <Form.Check
                  className="mt-3"
                  label="Select for return journey"
                  name="return"
                  ref={register({ required: false })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              {/*  Province */}
              <Form.Group as={Col} controlId="formGridProvince">
                <Form.Control
                  as="select"
                  defaultValue="FROM: Province/State"
                  size="lg"
                  name="province"
                  ref={register({ required: true })}
                >
                  <option>FROM: Province/State</option>
                  {provincesOptions.map((option, index) => (
                    <option key={index} value={option.label}>
                      {option.value}
                    </option>
                  ))}
                  {stateOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Control>
                {errors.province && (
                  <div className={styles.errorsText}>
                    This section is required
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridProvince">
                <Form.Control
                  as="select"
                  defaultValue="TO: Province/State"
                  size="lg"
                  name="provinceto"
                  ref={register({ required: true })}
                >
                  <option>To Province/State</option>
                  {provincesOptions.map((option, index) => (
                    <option key={index} value={option.label}>
                      {option.value}
                    </option>
                  ))}
                  {stateOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Control>
                {errors.provinceto && (
                  <div className={styles.errorsText}>
                    This section is required
                  </div>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  as="select"
                  defaultValue="From City"
                  size="lg"
                  name="city"
                  ref={register({ required: true })}
                >
                  <option>From City</option>
                  {uscitiesOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                  {cityOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
                {errors.city && (
                  <div className={styles.errorsText}>
                    This section is required
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  as="select"
                  defaultValue="To City"
                  size="lg"
                  name="cityto"
                  ref={register({ required: true })}
                >
                  <option>To City</option>
                  {uscitiesOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                  {cityOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
                {errors.cityto && (
                  <div className={styles.errorsText}>
                    This section is required
                  </div>
                )}
              </Form.Group>
            </Form.Row>
            <Link href="/step3">
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
    </FormLayout>
  );
};

export default LoadProfile;
