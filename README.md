# React Gooey Navigation Menu

based on [Lucas Bebber's Gooey Menu](http://codepen.io/lbebber/pen/rawQKR)

I've updated the implementation to use TypeScript and modern-ish React

## Installation

```bash
npm install --save react-gooey-nav
```

## Usage

```jsx
import { Menu } from "react-gooey-nav";

var menuItems = [
  {
    title: "Tweet",
    className: "fa fa-twitter"
  },
  {
    title: "Share on Facebook",
    className: "fa fa-facebook"
  }
];

var nav = <GooeyNav orientation="bottom" menuItems={menuItems} />;
```

## Help me make this thing better!

:octocat:

Thanks Lucas!
