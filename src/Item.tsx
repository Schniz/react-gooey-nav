import * as React from "react";

export interface Props<A> {
  title: string;
  className: string;
  component?: string | React.ComponentType<A>;
  componentProps?: A;
}
export default class Item<A> extends React.Component<Props<A>> {
  render() {
    return null;
  }
}
