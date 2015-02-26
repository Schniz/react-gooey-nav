/** @jsx React.DOM */

"use strict";

var React = require('react');
var assign = require('object-assign');

var HoverMixin = require('./mixins/hover-mixin');
var css = require('./style/index');

var GooeyNavItem = React.createClass({
  propTypes: {
    position: React.PropTypes.number.isRequired
  },
  mixins: [HoverMixin],
  styleProps() {
    return {
      index: this.props.position,
      orientation: this.props.orientation
    };
  },
  style() {
    var style = assign({}, css.menuItem.std);

    if (this.state.isHover) style = assign(style, css.menuItem.hover);
    if (this.props.revealed) style = assign(style, css.menuItem.revealed(this.styleProps()));

    return style;
  },
  render() {
    return (
      <a href="#" title={ this.props.title } onMouseEnter={ this.onHoverIn } onMouseLeave={ this.onHoverOut } style={ this.style() }>
        <i className={ this.props.className } />
      </a>
    );
  }
});

module.exports = GooeyNavItem;
