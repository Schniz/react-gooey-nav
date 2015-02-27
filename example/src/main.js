/** @jsx React.DOM */

var React = require('react');
var { GooeyNav } = require('../../index');

var menuItems = [{
  className: "fa fa-facebook",
  title: "Shalom Olam"
}, {
  className: "fa fa-twitter",
  title: "Tweet Tweet!"
}];

React.render(<GooeyNav menuItems={ menuItems } />, document.getElementById("main"));
