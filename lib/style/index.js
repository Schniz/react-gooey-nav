"use strict";

var assign = require('object-assign');

var css = {};

css.goo = {
  filter: "url('#shadowed-goo')",
  WebkitFilter: "url('#shadowed-goo')"
};

css.ball = {
  background: '#ffc107',//this.props.foregroundColor,
  borderRadius: '100%',
  width: '80px',
  height: '80px',
  marginLeft: '-40px',
  position: 'absolute',
  top: '20px',
  color: 'white',
  textAlign: 'center',
  lineHeight: '80px',
  transform: 'translate3d(0,0,0)',
  transition: 'transform ease-out',
  transitionDuration: '200ms'
};

css.menu = assign({}, css.goo, {
  position: 'absolute',
  left: '50%',
  marginLeft: '-80px',
  paddingTop: '20px',
  paddingLeft: '80px',
  boxSizing: 'border-box',
  fontSize: '20px',
  textAlign: 'left',
});

css.menuOpenButton = {
  hamburger(isOpen, i) {
    var hamburgerSpacing = 8;
    var width = 25;
    var height = 3;
    var rotateFactor = isOpen ? 45 : 0;
    var rotate = -rotateFactor * i + rotateFactor;
    var scale = isOpen && i === 1 ? 0 : 1;
    var mySpace = isOpen ? 0 : (i*hamburgerSpacing - hamburgerSpacing);

    return {
      width: width + 'px',
      height: height + 'px',
      background: 'white',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: -width/2 + 'px',
      marginTop: -height/2 + 'px',
      transition: 'transform 200ms',
      transform: `translate3d(0,${mySpace}px,0) scale(${scale}) rotate(${rotate}deg)`
    };
  }
};

css.menuItem = {
  std: assign({}, css.ball, {
    color: 'white',
    background: '#ffc107',
    transform: 'translate3d(0,0,0) rotate(-180deg)',
    visibility: 'hidden'
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

module.exports = css;
