'use strict';

module.exports = {
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

