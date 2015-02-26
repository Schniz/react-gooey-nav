'use strict';

var assign = require('object-assign');

var goo = require('./goo');

module.exports = assign({}, goo, {
  position: 'absolute',
  left: '50%',
  marginLeft: '-80px',
  paddingTop: '20px',
  paddingLeft: '80px',
  boxSizing: 'border-box',
  fontSize: '20px',
  textAlign: 'left',
});
