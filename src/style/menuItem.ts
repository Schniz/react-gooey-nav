import * as React from "react";
import ball from "./ball";

export type Orientation = "right" | "left" | "top" | "bottom";
var orient = function(orientation: Orientation, index: number, amount: number = 80) {
  var xOrient = 0;
  var yOrient = 0;
  var amount = amount || 80;

  if (orientation === "right" || orientation === "left") {
    xOrient = amount * index;
    if (orientation === "left") xOrient = xOrient * -1;
  } else {
    yOrient = amount * index;
    if (orientation === "top") yOrient = yOrient * -1;
  }

  return {
    x: xOrient,
    y: yOrient
  };
};

type Options = { orientation: Orientation; index: number };
export function std({ orientation, index }: Options): React.CSSProperties {
  var { x, y } = orient(orientation, index - 1);
  var margin = orient(orientation, index - 1, 8);
  [x, y] = [x + margin.x, y + margin.y];

  return {
    ...ball,
    color: "white",
    background: "#ffc107",
    textDecoration: "none",
    transform: `translate3d(${-x}px, ${-y}px, 0) rotate(-180deg)`
  };
}

export const hover = {
  color: "#ffc107",
  background: "white"
} as React.CSSProperties;

export const revealed = (opts: Options): React.CSSProperties => {
  var index = opts.index || 1;
  var orientation = opts.orientation || "right";
  var { x, y } = orient(orientation, 1);

  return {
    visibility: "visible",
    transitionTimingFunction: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    transitionDuration: `${90 + 80 * index}ms`,
    transform: `translate3d(${x}px, ${y}px, 0) rotate(0)`
  };
};
