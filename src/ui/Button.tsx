import { MutableRefObject, ReactNode, useRef } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  to: string;
  newTab: boolean;
}

const Button = (props: Props) => {
  const refButton: MutableRefObject<HTMLAnchorElement | null> = useRef<HTMLAnchorElement | null>(null);

  const handleDrag = (event: DragEvent): void => {
    event.preventDefault();
  };

  return (
    // @ts-ignore
    <a onDragStart={handleDrag} ref={refButton} className={styles.button} href={props.to} target={props.newTab ? "_blank" : "_self"}>
      {props.children}
    </a>
  );
};

export default Button;
