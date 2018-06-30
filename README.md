# React Gooey Navigation Menu

based on [Lucas Bebber's Gooey Menu](http://codepen.io/lbebber/pen/rawQKR)

I've updated the implementation to use TypeScript and modern-ish React

## Installation

```bash
npm install --save react-gooey-nav
```

## Usage

```jsx
import { Menu, Item } from "react-gooey-nav";

var nav = (
  <Menu orientation="bottom">
    <Item title="Cool!">😎</Item>
    <Item
      title="Kitty"
      componentProps={{ onClick: () => console.log("Meow!") }}
    >
      😸
    </Item>
  </Menu>
);
```

## Help me make this thing better!

:octocat:

Thanks Lucas!
