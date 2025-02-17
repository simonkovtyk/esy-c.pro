import styles from "./Skeleton.module.css";

interface Props {
  className?: string | undefined;
  width: number;
  height: number;
}

const Skeleton = (props: Props) => {
  return (
    <div style={{ width: `${props.width}px`, height: `${props.height}px` }} className={`${props.className} ${styles.container}`}></div>
  );
};

export default Skeleton;
