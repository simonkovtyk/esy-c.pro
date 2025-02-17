import { MutableRefObject, useEffect, useRef, useState } from "react";
import Pause from "../icons/Pause";
import Play from "../icons/Play";
import VolumeMuted from "../icons/VolumeMuted";
import VolumeDown from "../icons/VolumeDown";
import VolumeUp from "../icons/VolumeUp";
import styles from "./VideoControl.module.css";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

const VideoControl = (props: Props) => {
  const [ playing, setPlaying ] = useState<boolean>(true);
  const [ volume, setVolume ] = useState<number>(props.videoRef?.current?.volume ?? 0.5);
  const refVolume: MutableRefObject<HTMLInputElement | null>  = useRef<HTMLInputElement | null>(null);
  let previousVolume: MutableRefObject<number> = useRef<number>(volume);

  useEffect((): void => {
    props.videoRef!.current!.volume = volume;
  }, [volume]);

  useEffect((): void => {
    playing
      ? props.videoRef!.current!.play()
      : props.videoRef!.current!.pause()
  }, [playing]);

  const updatePositionState = (): void => {
    navigator.mediaSession.setPositionState({
      duration: props.videoRef.current!.duration,
      playbackRate: props.videoRef.current!.playbackRate,
      position: props.videoRef.current!.currentTime
    });
  }

  useEffect(() => {
    props.videoRef.current!.volume = 0.5;

    props.videoRef.current!.play().then((): void => {
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: "got played by esy ©",
          artwork: [
            {
              src: "/images/media-artwork-512x512.webp",
              sizes: "512x512",
              type: "image/webp"
            }
          ]
        });

        navigator.mediaSession.setActionHandler("play", (): void => {
          setPlaying(true);
        });

        navigator.mediaSession.setActionHandler("stop", (): void => {
          setPlaying(false);
          props.videoRef.current!.currentTime = 0;
        });

        navigator.mediaSession.setActionHandler("pause", (): void => {
          setPlaying(false);
          props.videoRef.current!.pause();
        });

        navigator.mediaSession.setActionHandler("nexttrack", (): void => {
          props.videoRef.current!.currentTime = 0;
        });

        navigator.mediaSession.setActionHandler("previoustrack", (): void => {
          props.videoRef.current!.currentTime = 0;
        });

        navigator.mediaSession.setActionHandler("seekbackward", (details: MediaSessionActionDetails): void => {
          const skipTime = details.seekOffset ?? 10;
          props.videoRef.current!.currentTime = Math.max(props.videoRef.current!.currentTime - skipTime, 0);
          updatePositionState();
        });

        navigator.mediaSession.setActionHandler("seekforward", (details: MediaSessionActionDetails): void => {
          const skipTime = details.seekOffset ?? 10;
          props.videoRef.current!.currentTime = props.videoRef.current!.currentTime + skipTime > props.videoRef.current!.duration ? 0 : props.videoRef.current!.currentTime + skipTime;
          updatePositionState();
        });

        navigator.mediaSession.setActionHandler("seekto", (details: MediaSessionActionDetails): void => {
          props.videoRef.current!.currentTime = details.seekTime ?? props.videoRef.current!.currentTime;
          updatePositionState();
        });

        navigator.mediaSession.playbackState = "playing";
      }
    });
  }, [])

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
