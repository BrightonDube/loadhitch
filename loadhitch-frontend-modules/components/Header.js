import styles from "../styles/Header.module.css";

import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import HeaderText from "./HeaderText";
const Header = () => (
  <div>
    <Row className="no-gutters text-center">
      <div className={styles.bg}></div>
    </Row>
    <Row>
      <HeaderText />
    </Row>
  </div>
);
export default Header;
