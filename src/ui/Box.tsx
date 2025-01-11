import { ReactNode } from "react";
import styles from "./Box.module.css";

interface Props {
  children: ReactNode;
}

const Box = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default Box;
