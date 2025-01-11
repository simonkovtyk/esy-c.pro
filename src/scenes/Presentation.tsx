import Location from "../icons/Location";
import Steam from "../icons/Steam";
import Box from "../ui/Box";
import BoxItem from "../ui/BoxItem";
import Button from "../ui/Button";
import styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <Box>
      <div className={styles.locationContainer}>
        <Location color="#d4d4d4" width={16} height={16} />
        <p className={styles.locationName}>Germany</p>
      </div>
      <div className={styles.boxContainer}>
        <BoxItem>
          <div className={styles.boxItemContainer}>
            <div className={styles.boxMetadataContainer}>
              <img src="profile.webp" alt="Profile picture" width="64" height="64" />
              <div>
                <h1 className={styles.boxHeading}>esy</h1>
                <div className={styles.boxDescriptionContainer}>
                  <Steam width={16} height={16} color="#6366f1" />
                  <p className={styles.boxDescription}>Steam Profile</p>
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
                <h1 className={styles.boxHeading}>esy</h1>
                <div className={styles.boxDescriptionContainer}>
                  <Steam width={16} height={16} color="#6366f1" />
                  <p className={styles.boxDescription}>Steam Profile</p>
                </div>
              </div>
            </div>
            <Button to="https://steamcommunity.com/id/esy_c/" newTab>Profile</Button>
          </div>
        </BoxItem>
      </div>
    </Box>
  );
};

export default Presentation;
