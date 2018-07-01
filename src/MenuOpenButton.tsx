import * as React from "react";
import ball from "./style/ball";

function hamburger(isOpen: boolean, i: number): React.CSSProperties {
  var hamburgerSpacing = 8;
  var width = 25;
  var height = 3;
  var rotateFactor = isOpen ? 45 : 0;
  var rotate = -rotateFactor * i + rotateFactor;
  var scale = isOpen && i === 1 ? 0 : 1;
  var mySpace = isOpen ? 0 : i * hamburgerSpacing - hamburgerSpacing;

  return {
    width: width + "px",
    height: height + "px",
    background: "white",
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -width / 2 + "px",
    marginTop: -height / 2 + "px",
    transition: "transform 200ms",
    transform: `translate3d(0,${mySpace}px,0) scale(${scale}) rotate(${rotate}deg)`
  };
}

type Props = { onOpenChanged: Function; open: boolean };
type State = { hover: boolean };
export default class MenuOpenButton extends React.Component<Props, State> {
  state = { hover: false };
  render() {
    return (
      <a
        onClick={() => this.props.onOpenChanged(!this.props.open)}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        style={{
          ...ball,
          zIndex: 2,
          transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
          transitionDuration: "400ms",
          transform: "scale(1.1,1.1) translate3d(0,0,0)",
          cursor: "pointer",
          position: "absolute",
          top: 5
        }}
      >
        {[0, 1, 2].map(i => {
          return <span key={i} style={hamburger(this.props.open, i)} />;
        })}
      </a>
    );
  }
}
