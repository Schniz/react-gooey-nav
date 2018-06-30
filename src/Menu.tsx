import * as React from "react";

import goo from "./style/goo";

import GooeySvg from "./GooeySvg";
import MenuOpenButton from "./MenuOpenButton";
import { Orientation } from "./style/menuItem";
import GooeyNavItem from "./GooeyNavItem";

type ProvidedMenuItem = { className?: string; title: string };
type Props = { menuItems: ProvidedMenuItem[]; orientation?: Orientation };
type State = { open: boolean };

export default class Menu extends React.Component<Props, State> {
  static defaultProps = {
    foregroundColor: "#ffc107",
    backgroundColor: "#009688",
    openDistance: "105px",
    openingAngle: Math.PI * 2,
    menuItems: []
  };

  state = { open: false };

  componentDidMount() {
    if (document.querySelector("#gooey-nav-svgs")) return;
    var domNode = GooeySvg({ id: "gooey-nav-svgs" });
    document.body.appendChild(domNode);
  }

  onOpenChanged = (open: boolean) => this.setState({ open });

  getMenuItems() {
    return this.props.menuItems.map((menuItem, i) => {
      return (
        <GooeyNavItem
          key={i}
          orientation={this.props.orientation || "bottom"}
          revealed={this.state.open}
          position={i + 1}
          title={menuItem.title}
          className={menuItem.className}
        />
      );
    });
  }

  render() {
    return (
      <nav
        style={{
          ...goo,
          position: "absolute",
          boxSizing: "border-box",
          fontSize: "20px",
          textAlign: "left",
          padding: 5,
          paddingBottom: 81
        }}
      >
        {this.getMenuItems()}
        <MenuOpenButton open={this.state.open} onOpenChanged={this.onOpenChanged} />
      </nav>
    );
  }
}
