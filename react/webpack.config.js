var webpack = require('webpack');

module.exports = {
  entry: {
    path: './react/src/main.js'
  },
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.jsx', '.js']
  }
}
