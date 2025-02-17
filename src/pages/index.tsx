import { useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo";
import Video from "../ui/Video";
import styles from "./index.module.css";
import Click from "../scenes/Click";
import Presentation from "../scenes/Presentation";

const Home = () => {
  const [ clickEmitted, setClickEmitted ] = useState<boolean>(false);
  const [ switchScenes, setSwitchScenes ] = useState<boolean>(false);
  const refVideo = useRef<HTMLVideoElement | null>(null);
  const currentYear: number = new Date().getFullYear();

  useEffect((): void => {
    if (!clickEmitted)
      return;

    setTimeout((): void => {
      setSwitchScenes(true);
    }, 3000);
  }, [clickEmitted])

  return (
    <>
      <main className={styles.main}>
        <Logo />
        {
          switchScenes
          ? <Presentation videoRef={refVideo} />
          : <Click onEmit={setClickEmitted} />
        }
        {
          switchScenes && <p className={styles.copyright}>© {currentYear}</p>
        }
      </main>
      <Video ref={refVideo} />
    </>
  );
};

export default Home;
