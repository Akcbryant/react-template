var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  devServer: {
    inline: true,
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
