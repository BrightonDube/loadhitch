import styles from "../styles/Header.module.css";

import { Row, Col } from "react-bootstrap";
import Button from "./Button";
const Header = () => (
  <Row className="no-gutters text-center">
    <div className={styles.bg}>
      <div className={styles.bg_inner}>
        <h1>Your On-demand Road Freight Partner</h1>
        <h2>I am a</h2>

        <Row xs={1} md={2} className="no-gutters">
          <Col xs={12} md={6} className="justify-content-center">
            <Button title="Shipper" href="/shipper" className="ml-auto" />
          </Col>
          <Col xs={12} md={6} className="align-content-center">
            <Button title="Carrier" href="/carrier" />
          </Col>
        </Row>
      </div>
    </div>
  </Row>
);
export default Header;
