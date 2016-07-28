var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
