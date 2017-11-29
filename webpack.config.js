const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch', // for hot module replacement
    'webpack-dev-server/client?http://localhost:8080', // for webpack dev server (host and port)
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './js/ClientApp.jsx' // entry point for our app
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true, // enable HMR on devserver
    publicPath: '/public/',
    historyApiFallback: true // respond to 404s with index.html (i.e. by our router, not webpack)
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [ // plugins for HMR and other things that are augmenting the abilities of webpack
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in browser console for HMR updates
  ]
};
