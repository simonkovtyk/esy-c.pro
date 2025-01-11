import { MutableRefObject, useEffect, useRef } from "react";
import Location from "../icons/Location";
import Steam from "../icons/Steam";
import YouTube from "../icons/YouTube";
import Box from "../ui/Box";
import BoxItem from "../ui/BoxItem";
import Button from "../ui/Button";
import VideoControl from "../ui/VideoControl";
import styles from "./Presentation.module.css";
import { cropIn } from "../shared/Animations";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>
}

const Presentation = (props: Props) => {
  const refBox: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  
  useEffect((): void => {
    cropIn(refBox.current!);
  }, []);

  return (
    <Box ref={refBox} className={styles.hiddenBox}>
      <div className={styles.locationContainer}>
        <Location color="#d4d4d4" width={18} height={18} />
        <p className={styles.locationName}>Germany</p>
      </div>
      <div className={styles.boxContainer}>
        <BoxItem>
          <div className={styles.boxItemContainer}>
            <div className={styles.boxMetadataContainer}>
              <img src="profile.webp" alt="Profile picture" width="64" height="64" />
              <div>
                <h1 className={styles.boxHeading}>esy ©</h1>
                <div className={styles.boxDescriptionContainer}>
                  <Steam width={16} height={16} color="#6366f1" />
                  <p className={`${styles.boxDescription} ${styles.boxDescriptionSteam}`}>Steam Profile</p>
                </div>
              </div>
            </div>
            <Button to="https://steamcommunity.com/id/esy_c/" newTab>Profile</Button>
          </div>
        </BoxItem>
        <BoxItem>
          <div className={styles.boxItemContainer}>
            <div className={styles.boxMetadataContainer}>
              <img src="profile.webp" alt="Profile picture" width="64" height="64" />
              <div>
                <h1 className={styles.boxHeading}>esy ©</h1>
                <div className={styles.boxDescriptionContainer}>
                  <YouTube width={16} height={16} color="#ff0033" />
                  <p className={`${styles.boxDescription} ${styles.boxDescriptionYouTube}`}>YouTube Profile</p>
                </div>
              </div>
            </div>
            <Button to="https://www.youtube.com/@esy_c" newTab>Profile</Button>
          </div>
        </BoxItem>
      </div>
      <VideoControl videoRef={props.videoRef} />
    </Box>
  );
};

export default Presentation;
