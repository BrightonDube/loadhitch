import ReactPlayer from "react-player";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Video.module.css";
const Video = () => {
  return (
    <Row className={`no-gutters h-100 ${styles.container}`}>
      <Col
        className={`d-flex text-center align-items-center ${styles.text_wrapper}`}
      >
        <h1 className="">How it works</h1>
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
