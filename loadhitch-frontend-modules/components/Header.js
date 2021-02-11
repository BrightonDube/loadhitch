import styles from "../styles/Header.module.css";

import { Row } from "react-bootstrap";
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
