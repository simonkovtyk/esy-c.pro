import { ForwardedRef, forwardRef, ReactNode } from "react";
import styles from "./Box.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const Box = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement | null>) => {
  return (
    <div ref={ref} className={props.className ? `${styles.container} ${props.className}` : styles.container}>
      {props.children}
    </div>
  );
});

export default Box;
