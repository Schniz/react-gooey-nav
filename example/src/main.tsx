import * as React from "react";
import { render } from "react-dom";
import { Menu, Item } from "../../src/index";

const Icon = ({ name }: { name: string }) => <i className={`fa fa-${name}`} />;

render(
  <Menu>
    <Item title="Twitter!">
      <Icon name="twitter" />
    </Item>
    <Item
      title="Facebook!"
      component="a"
      componentProps={{
        href: "https://facebook.com",
        target: "_blank",
        rel: "noopener",
        onClick: (e: Event) => {
          console.log("Whoops!");
          e.preventDefault();
        }
      }}
    >
      <Icon name="facebook" />
    </Item>
    <Item title="Cool!">😎</Item>
  </Menu>,
  document.getElementById("main")
);
