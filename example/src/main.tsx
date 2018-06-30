import * as React from "react";
import { render } from "react-dom";
import { Menu } from "../../src/index";

var menuItems = [
  {
    className: "fa fa-facebook",
    title: "Facebook!"
  },
  {
    className: "fa fa-linkedin",
    title: "Linked In!"
  },
  {
    className: "fa fa-twitter",
    title: "Tweet Tweet!"
  }
];

render(<Menu menuItems={menuItems} />, document.getElementById("main"));
