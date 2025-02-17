import { ForwardedRef, forwardRef } from "react";
import styles from "./Video.module.css";

const Video = forwardRef((props: {}, ref: ForwardedRef<HTMLVideoElement>) => {
  return (
    <video ref={ref} className={styles.video} preload="auto" loop controls={false} playsInline autoPlay={false}>
      <source src="videos/background.mp4" type="video/mp4" />
    </video>
  )
});

export default Video;
