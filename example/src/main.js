/** @jsx React.DOM */

var React = require('react');
var { GooeyNav } = require('../../index');

var menuItems = [{
  className: "fa fa-facebook",
  title: "Facebook!"
}, {
  className: "fa fa-linkedin",
  title: "Linked In!"
}, {
  className: "fa fa-twitter",
  title: "Tweet Tweet!"
}];

React.render(<GooeyNav menuItems={ menuItems } />, document.getElementById("main"));
