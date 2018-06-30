import * as React from "react";
import { render } from "react-dom";
import { Menu, Item } from "../../src/index";

render(
  <Menu>
    <Item
      title="Facebook!"
      className="fa fa-facebook"
      componentProps={{
        href: "https://facebook.com",
        target: "_blank",
        rel: "noopener",
        onClick: (e: Event) => {
          console.log("Whoops!");
          e.preventDefault();
        }
      }}
    />
    <Item title="Twitter!" className="fa fa-twitter" />
  </Menu>,
  document.getElementById("main")
);
