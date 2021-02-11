import ReactPlayer from "react-player";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Video.module.css";
const Video = () => {
  return (
    <Row className="no-gutters">
      <Col className="text-center justify-content-center">
        <h1 className="justify-self-center">How it works</h1>
      </Col>
      <Col>
        <div className={styles.wrapper}>
          <ReactPlayer url="https://www.youtube.com/watch?v=sIlCR4eG8_o" />
        </div>
      </Col>
    </Row>
  );
};

export default Video;
