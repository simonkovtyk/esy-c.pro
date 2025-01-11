import { MutableRefObject, useEffect, useRef, useState } from "react";
import Pause from "../icons/Pause";
import Play from "../icons/Play";
import VolumeMuted from "../icons/VolumeMuted";
import VolumeDown from "../icons/VolumeDown";
import VolumeUp from "../icons/VolumeUp";
import styles from "./VideoControl.module.css";

interface Props {
  videoRef?: MutableRefObject<HTMLVideoElement | null>
}

const VideoControl = (props: Props) => {
  const [ playing, setPlaying ] = useState<boolean>(true);
  const [ volume, setVolume ] = useState<number>(props.videoRef?.current?.volume ?? 0.5);
  const refVolume: MutableRefObject<HTMLInputElement | null>  = useRef<HTMLInputElement | null>(null);
  let previousVolume: MutableRefObject<number> = useRef<number>(volume);

  useEffect((): void => {
    props.videoRef!.current!.volume = volume;
  }, [volume])

  useEffect((): void => {
    playing
      ? props.videoRef!.current!.play()
      : props.videoRef!.current!.pause()
  }, [playing])

  const handleClickPlayToggle = (): void => {
    setPlaying((_playing) => !_playing);
  }

  const handleClickVolumeToggle = (): void => {
    setVolume((volume: number): number => {
      if (volume == 0) {
        refVolume.current!.value = (previousVolume.current * 100).toString();
        return previousVolume.current;
      }

      refVolume.current!.value = "0";
      previousVolume.current = volume;
      return 0;
    });
  }

  const handleChangeVolume = (): void => {
    setVolume(Number.parseInt(refVolume.current!.value) / 100);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClickPlayToggle}>
        {
          playing
          ? <Pause width={32} height={32} color="#d4d4d4" />
          : <Play width={32} height={32} color="#d4d4d4" />
        }
      </button>
      <div className={styles.volumeContainer}>
        <button className={styles.button} onClick={handleClickVolumeToggle}>
          {
            volume === 0
            ? <VolumeMuted width={32} height={32} color="#d4d4d4" />
            : volume < 0.5
            ? <VolumeDown width={32} height={32} color="#d4d4d4" />
            : <VolumeUp width={32} height={32} color="#d4d4d4" />
          }
        </button>
        <input className={styles.volumeSlider} ref={refVolume} type="range" min="0" max="100" defaultValue={volume * 100} onChange={handleChangeVolume} />
      </div>
    </div>
  );
};

export default VideoControl;
