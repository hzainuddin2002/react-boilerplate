const path = require('path');

module.exports = {
  entry: './client/components/app.jsx',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {test:/\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
}