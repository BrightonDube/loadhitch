import YouTube from 'react-youtube';
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Video.module.css";

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 0,
    controls: 0,
    rel: 0,
    modestbranding: 1
  },
};

const Video = () => {
  return (
    <Row className={`no-gutters ${styles.container}`}>
      <Col md={6} sm={12} className={`text-center align-items-center ${styles.text_wrapper}`}>
        <h1 className="">How it works</h1>
      </Col>
      <Col md={6} sm={12}>
        <div className="movie-trailer-part">
          <div className="overlay-left"></div>
          <div className="overlay-right"></div>
          <div className="overlay-top"></div>
          <div className="overlay-down"></div>
          <div className="youtube-trailer">
            <YouTube videoId="sIlCR4eG8_o" className="youtube-trailer" opts={opts} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Video;
