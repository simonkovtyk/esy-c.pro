import gsap from "gsap";

const cropOut = (node: HTMLElement) => gsap.to(node, {
  duration: 0.2,
  scaleY: 0,
  height: 0,
  margin: 0
});

const cropIn = (node: HTMLElement) => gsap.to(node, {
  duration: 0.2,
  translateY: 0,
  height: 0
});

export {
  cropOut,
  cropIn
};
