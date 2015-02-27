'use strict';

var assign = require('object-assign');

var ball = require('./ball');

module.exports = {
  std: assign({}, ball, {
    color: 'white',
    background: '#ffc107',
    transform: 'translate3d(0,0,0) rotate(-180deg)'
  }),
  hover: {
    color: '#ffc107',
    background: 'white'
  },
  revealed(opts) {
    var index = opts.index || 1;
    var orientation = opts.orientation || "right";
    
    var xOrient = 0;
    var yOrient = 0;

    if (orientation === "right" || orientation === "left") {
      xOrient = 80 * index;
      if (orientation === "left") xOrient = xOrient * (-1);
    } else {
      yOrient = 80 * index;
      if (orientation === "top") yOrient = yOrient * (-1);
    }

    return {
      visibility: 'visible',
      transitionTimingFunction: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
      transitionDuration: `${ 90 + (80 * index) }ms`,
      transform: `translate3d(${ xOrient }px, ${ yOrient }px, 0) rotate(0)`
    };
  }
};
