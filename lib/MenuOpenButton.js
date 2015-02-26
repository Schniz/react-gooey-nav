/** @jsx React.DOM */

"use strict";

var React = require('react');
var assign = require('object-assign');
var HoverMixin = require('./mixins/hover-mixin');
var css = require('./style/index');

var MenuOpenButton = React.createClass({
  mixins: [HoverMixin],

  generateHamburgerCss(i) {
    return css.menuOpenButton.hamburger(this.state.isOpen, i);
  },

  generateStyle() {
    var style = assign({}, css.ball, {
      zIndex: 2,
      transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      transitionDuration: '400ms',
      transform: 'scale(1.1,1.1) translate3d(0,0,0)',
      cursor: 'pointer'
    });

    if (this.state.isHover) {
      style = assign({}, style, {
        transform: 'scale(1.2,1.2) translate3d(0,0,0)'
      });
    }

    if (this.state.isOpen) {
      style = assign({}, style, {
        transitionTimingFunction: 'linear',
        transitionDuration: '200ms',
        transform: 'scale(0.8,0.8) translate3d(0,0,0)'
      });
    }

    return style;
  },

  getInitialState() {
    return {
      isOpen: false
    };
  },
  onToggle() {
    var isOpen = !this.state.isOpen;
    this.props.onOpenChanged && this.props.onOpenChanged(isOpen);
    this.setState({ isOpen: isOpen });
  },
  render() {
    return (
      <a onClick={ this.onToggle } onMouseEnter={ this.onHoverIn } onMouseLeave={ this.onHoverOut } style={ this.generateStyle() }>
        { [0,1,2].map(i => { return (<span key={ i } style={ this.generateHamburgerCss(i) }></span>) }) }
      </a>
    );
  }
});

module.exports = MenuOpenButton;
