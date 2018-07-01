import * as React from "react";
import * as menuItemStyle from "./style/menuItem";

export type Props<A> = {
  orientation: menuItemStyle.Orientation;
  revealed: boolean;
  position: number;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  component?: string | React.ComponentType<A>;
  componentProps?: A;
};
type State = { hovered: boolean };
export default class GooeyNavItem<A> extends React.Component<Props<any>, State> {
  state = { hovered: false };

  render() {
    const {
      children,
      component: Component = "a",
      componentProps: { style, ...compProps } = {} as { style?: React.CSSProperties },
      orientation,
      position: index,
      revealed,
      title
    } = this.props;
    return (
      <Component
        href="#"
        title={title}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        style={{
          ...menuItemStyle.std({ index, orientation }),
          ...(this.state.hovered && menuItemStyle.hover),
          ...(revealed && menuItemStyle.revealed({ index, orientation })),
          ...style
        }}
        {...compProps}
      >
        {children}
      </Component>
    );
  }
}
