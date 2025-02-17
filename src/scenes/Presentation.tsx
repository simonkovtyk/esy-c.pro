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
import Person from "../icons/Person";
import { getAge } from "../utils/Age";
import Work from "../icons/Work";
import Picture from "../ui/Picture";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

const Presentation = (props: Props) => {
  const refBox: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const age: number = getAge();

  useEffect((): void => {
    cropIn(refBox.current!);
  }, []);

  return (
    <div className={styles.container}>
      <Box ref={refBox} className={styles.hiddenBox}>
        <h1 className={styles.heading}>About me</h1>
        <div className={styles.aboutMeContainer}>
          <div className={styles.aboutMeInfoContainer}>
            <Location color="#d4d4d4" width={18} height={18} />
            <p className={styles.aboutMeText}>Germany</p>
          </div>
          <div className={styles.aboutMeInfoContainer}>
            <Person color="#d4d4d4" width={18} height={18} />
            <p className={styles.aboutMeText}>{age} y/o</p>
          </div>
          <div className={styles.aboutMeInfoContainer}>
            <Work color="#d4d4d4" width={18} height={18} />
            <p className={styles.aboutMeText}>Software Developer</p>
          </div>
        </div>
        <h2 className={styles.heading}>Links</h2>
        <div className={styles.boxContainer}>
          <BoxItem>
            <div className={styles.boxItemContainer}>
              <div className={styles.boxMetadataContainer}>
                <Picture width={64} height={64} src="/images/profile.webp" />
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
                <Picture width={64} height={64} src="/images/profile.webp" />
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
    </div>
  );
};

export default Presentation;
