import ReactPlayer from "react-player";
import styles from "../styles/Video.module.css";
const Video = () => {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer url="https://www.youtube.com/watch?v=sIlCR4eG8_o" />
    </div>
  );
};

export default Video;
