/** @jsx React.DOM */

"use strict";

var React = require('react');
var assign = require('object-assign');

var HoverMixin = require('./mixins/hover-mixin');
var baseCss = require('./style/index');

var MenuOpenButton = require('./MenuOpenButton');
var MenuItem = require('./GooeyNavItem');
var GooeySvg = require('./GooeySvg');

var GooeyNav = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array,
    orientation: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  },
  getInitialState() {
    return {
      isOpen: false
    }
  },
  getDefaultProps() {
    return {
      orientation: 'bottom',
      foregroundColor: '#ffc107',
      backgroundColor: '#009688',
      openDistance: '105px',
      openingAngle: Math.PI*2,
      menuItems: []
    };
  },
  style() {
    return baseCss.menu;
  },
  onOpenChanged(isOpen) {
    this.setState({ isOpen: isOpen });
  },
  componentWillMount() {
    if (document.querySelector("#gooey-nav-svgs")) return;
    var domNode = GooeySvg({ id: "gooey-nav-svgs" });
    document.body.appendChild(domNode);
  },
  getMenuItems() {
    return this.props.menuItems.map((menuItem, i) => {
      return (
        <MenuItem 
          key={ i }
          orientation={ this.props.orientation }
          revealed={ this.state.isOpen }
          position={ i + 1 }
          title={ menuItem.title }
          className={ menuItem.className } 
        />
      )
    });
  },
  render() {
    return (
      <nav style={ this.style() }>
        { this.getMenuItems() }
        <MenuOpenButton onOpenChanged={ this.onOpenChanged } />
      </nav>
    );
  }
});

module.exports = GooeyNav;
