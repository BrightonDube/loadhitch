import { Row, Col, Form } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const VehicleType = ({ register, errors, index }) => {
  return (
    <Row className="justify-content-center w-100 py-5">
      <Form.Label>Select your vehicle type</Form.Label>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridType">
          <Form.Control
            as="select"
            size="lg"
            name={`vehicletype ${index + 1}`}
            ref={register({ required: true })}
          >
            <option value="Flatbed">Flatbed</option>
            <option value="Reefer">Reefer</option>
            <option value="Hazmat">Hazmat</option>
            <option value="Dry Van">Dry Van</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Control
            placeholder="Max Payload (lbs)"
            size="lg"
            name={`payload ${index + 1}`}
            ref={register({ required: true })}
          />

          {errors.payload && (
            <div className={styles.errorsText}>Make a valid Selection</div>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Control
            placeholder="Max Capacity (Cu. ft.)"
            size="lg"
            name={`capacity ${index + 1}`}
            ref={register({ required: true })}
          />

          {errors.capacity && (
            <div className={styles.errorsText}>Make a valid Selection</div>
          )}
        </Form.Group>
      </Form.Row>
    </Row>
  );
};

export default VehicleType;
