import styles from "../styles/Header.module.css";
import { Row, Button } from "react-bootstrap";
const Header = () => (
  <Row className="no-gutters text-center">
    <div className={styles.bg}>
      <div className={styles.bg_inner}>
        <h1 className="mt-5">Your On-demand Road Freight Partner</h1>
      </div>
    </div>
  </Row>
);
export default Header;
