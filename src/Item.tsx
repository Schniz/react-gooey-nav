import * as React from "react";

export interface Props<A> {
  title: string;
  component?: string | React.ComponentType<A>;
  componentProps?: A;
  children?: React.ReactNode | React.ReactNode[];
}
export default class Item<A> extends React.Component<Props<A>> {
  render() {
    return null;
  }
}
