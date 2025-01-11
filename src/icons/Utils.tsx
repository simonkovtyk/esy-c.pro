import Props from "./Types";

const iconProps = (props: Props) => ({
  style: {
    width: props.width,
    height: props.height
  },
  fill: props.color
});

export default iconProps;
