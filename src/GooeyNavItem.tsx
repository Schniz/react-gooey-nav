import * as React from "react";
import * as menuItemStyle from "./style/menuItem";

export type Props = {
  orientation: menuItemStyle.Orientation;
  revealed: boolean;
  position: number;
  title: string;
  className?: string;
};
type State = { hovered: boolean };
export default class GooeyNavItem extends React.Component<Props, State> {
  state = { hovered: false };

  styleProps = () => ({ index: this.props.position, orientation: this.props.orientation });

  render() {
    return (
      <a
        href="#"
        title={this.props.title}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        style={{
          ...menuItemStyle.std(this.styleProps()),
          ...(this.state.hovered && menuItemStyle.hover),
          ...(this.props.revealed && menuItemStyle.revealed(this.styleProps()))
        }}
      >
        <i className={this.props.className} />
      </a>
    );
  }
}
