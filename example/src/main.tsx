import * as React from "react";
import { render } from "react-dom";
import { GooeyNav } from "../../src/index";

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

render(<GooeyNav menuItems={menuItems} />, document.getElementById("main"));
