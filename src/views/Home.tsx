import { useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo";
import Video from "../ui/Video";
import styles from "./Home.module.css";
import Click from "../scenes/Click";
import Presentation from "../scenes/Presentation";

const Home = () => {
  const [ clickEmitted, setClickEmitted ] = useState<boolean>(false);
  const [ switchScenes, setSwitchScenes ] = useState<boolean>(false);
  const refVideo = useRef<HTMLVideoElement | null>(null);

  useEffect((): void => {
    if (!clickEmitted)
      return;

    refVideo.current!.play();

    setTimeout((): void => {
      setSwitchScenes(true);
    }, 3000)
  }, [ clickEmitted ])

  return (
    <>
      <main className={styles.main}>
        <Logo width={256} />
        {
          switchScenes
          ? <Presentation />
          : <Click onEmit={setClickEmitted} />
        }
      </main>
      <Video ref={refVideo} />
    </>
  )
};

export default Home;
