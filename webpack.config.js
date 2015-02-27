"use strict";

var webpack = require('webpack');

var webpackConf = {
  cache: true,
  entry: 
  {
    main: './example/src/main'
  },
  output: {
    path: './example/build/',
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  resolve: {
    extensions: ["", ".js"]
  },
  plugins: [
  ]
};

module.exports = webpackConf;
