import styles from "../styles/Header.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";

const HeaderText = () => {
  return (
    <div className={styles.bg_inner}>
      <h1>Your On-demand Road Freight Partner</h1>
      <h2>I am a</h2>

      <Row xs={1} md={2} className="no-gutters text-center">
        <Col className={styles.btn_col}>
          <Button
            title="Shipper"
            href="/carrier_profile_form"
            className="mx-auto"
          />
        </Col>
        <Col className={styles.btn_col}>
          <Button title="Carrier" href="/carrier_profile_form" />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderText;
