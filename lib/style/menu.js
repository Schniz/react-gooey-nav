'use strict';

var assign = require('object-assign');

var goo = require('./goo');

module.exports = assign({}, goo, {
  position: 'absolute',
  boxSizing: 'border-box',
  fontSize: '20px',
  textAlign: 'left',
  padding: 5,
  paddingBottom: 81
});
