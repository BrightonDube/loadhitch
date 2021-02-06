import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row m-3="true">
          <Col>
            <h4>SHIPPERS</h4>
            <Link href="/services">Services</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/services">Industry</Link>
            <Link href="/services">FAQs</Link>
          </Col>
          <Col>
            <h4>CARRIERS</h4>
            <Link href="/services">Services</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/services">Trip Planner</Link>
            <Link href="/services">FAQs</Link>
          </Col>
          <Col>
            <h4>COMPANY</h4>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </Col>
          <Col>
            <h4>CONNECT</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
