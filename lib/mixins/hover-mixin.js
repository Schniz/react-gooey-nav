"use strict";

var HoverMixin = {
  getInitialState() {
    return { isHover: false };
  },
  onHoverIn() {
    this.setState({ isHover: true });
  },
  onHoverOut() {
    this.setState({ isHover: false });
  }
};

module.exports = HoverMixin;
