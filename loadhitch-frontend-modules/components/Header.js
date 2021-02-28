import styles from "../styles/Header.module.css";
import { Col, Row } from 'react-bootstrap'
import HeaderText from "./HeaderText";
import Slider from "./Slider";

const Header = () => (
  <div>
    <Row className="no-gutters text-center">
      <Col>
      <Slider />
      </Col>
    </Row>
    <Row>
      <HeaderText />
    </Row>
  </div>
);
export default Header;
