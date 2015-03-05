'use strict';

var assign = require('object-assign');

var ball = require('./ball');

var orient = function(orientation, index, amount) {
  var xOrient = 0;
  var yOrient = 0;
  var amount = amount || 80;

  if (orientation === "right" || orientation === "left") {
    xOrient = amount * index;
    if (orientation === "left") xOrient = xOrient * (-1);
  } else {
    yOrient = amount * index;
    if (orientation === "top") yOrient = yOrient * (-1);
  }

  return {
    x: xOrient,
    y: yOrient
  };
};

module.exports = {
  std(opts) {
    var { x, y } = orient(opts.orientation, opts.index - 1);
    var margin = orient(opts.orientation, opts.index - 1, 8);
    [x,y] = [x+margin.x, y+margin.y];

    return assign({}, ball, {
      color: 'white',
      background: '#ffc107',
      transform: `translate3d(${ -x }px, ${ -y }px, 0) rotate(-180deg)`
    })
  },
  hover: {
    color: '#ffc107',
    background: 'white'
  },
  revealed(opts) {
    var index = opts.index || 1;
    var orientation = opts.orientation || "right";
    var { x, y } = orient(orientation, 1);

    return {
      visibility: 'visible',
      transitionTimingFunction: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
      transitionDuration: `${ 90 + (80 * index) }ms`,
      transform: `translate3d(${ x }px, ${ y }px, 0) rotate(0)`
    };
  }
};
