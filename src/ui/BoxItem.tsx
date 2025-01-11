import { ReactNode } from "react";
import styles from "./BoxItem.module.css";

interface Props {
  children: ReactNode;
}

const BoxItem = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default BoxItem;
