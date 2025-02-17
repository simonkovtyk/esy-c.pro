import { MutableRefObject, useEffect, useRef, useState } from "react";
import Skeleton from "./Skeleton";

interface Props {
  className?: string | undefined;
  width: number;
  height: number;
  src: string;
}

const Picture = (props: Props) => {
  const refImage: MutableRefObject<HTMLImageElement | null> = useRef<HTMLImageElement | null>(null);
  const [ loaded, setLoaded ] = useState<boolean>(false);

  useEffect((): void => {
    refImage.current?.addEventListener("load", (): void => {
      setLoaded(true);
    });
  });

  return (
    <>
      <img style={{ display: loaded ? "block" : "none" }} ref={refImage} className={props.className} src={props.src} alt="Profile picture" width={props.width} height={props.height} />
      {
        !loaded && <Skeleton className={props.className} width={props.width} height={props.height} />
      }
    </>
  )
}

export default Picture;
