import { ForwardedRef, forwardRef } from "react";
import styles from "./Video.module.css";

const Video = forwardRef((props: {}, ref: ForwardedRef<HTMLVideoElement>) => {
  return (
    <video ref={ref} className={styles.video} preload="auto" loop>
      <source src="background.mp4" type="video/mp4" />
    </video>
  )
});

export default Video;
