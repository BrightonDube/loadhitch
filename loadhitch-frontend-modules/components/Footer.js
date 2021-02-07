import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row>
          <Col md={6} lg={3} className="text-center text-md-left">
            <h3>SHIPPERS</h3>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/benefits">Benefits</Link>
              </li>
              <li>
                <Link href="/services">Industry</Link>
              </li>
              <li>
                <Link href="/services">FAQs</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="text-center text-md-left">
            <h3>CARRIERS</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/benefits">Benefits</Link>
              </li>
              <li>
                <Link href="/services">Trip Planner</Link>
              </li>
              <li>
                <Link href="/services">FAQs</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="text-center text-md-left">
            <h3>COMPANY</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="text-center text-md-left">
            <h3 className="connect">CONNECT</h3>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://linkedIn.com">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ fontSize: "0.9rem" }}>
            &copy; LOADHITCH {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
