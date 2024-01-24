import React from "react";
import styles from "./VideoBackground.module.scss";

const VideoBackground = () => {
  return (
    <video
      src={require("../../../../assets/video/rcs.mp4")}
      autoPlay
      muted
      loop
      className={styles.wrapper}
    />
  );
};

export default VideoBackground;
