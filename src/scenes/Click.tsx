import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from "react";
import { cropOut } from "../shared/Animations";
import styles from "./Click.module.css";

interface Props {
  onEmit: ((value: boolean) => unknown) | Dispatch<SetStateAction<boolean>>;
}

const Click = (props: Props) => {
  const refText: MutableRefObject<HTMLParagraphElement | null> = useRef<HTMLParagraphElement | null>(null);

  const handleWindowClick = (): void => {
    window.removeEventListener("click", handleWindowClick);

    cropOut(refText.current!).then((): void => {
      props.onEmit(true);
    });
  }

  useEffect((): void => {
    window.addEventListener("click", handleWindowClick);
  }, []);

  return (
    <p className={styles.clickHint} ref={refText}>Click to enter</p>
  );
};

export default Click;
