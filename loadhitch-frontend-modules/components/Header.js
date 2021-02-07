import styles from "../styles/Header.module.css";
import { Row, Button } from "react-bootstrap";
const Header = () => (
  <Row className="no-gutters text-center">
    <div className={styles.bg}>
      <div className={styles.bg_inner}>
        <h1>Your On-demand Road Freight Partner</h1>
        <h2>I am a</h2>
      </div>
    </div>
  </Row>
);
export default Header;
