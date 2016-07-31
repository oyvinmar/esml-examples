var path = require('path');
var util = require('util');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var pkg = require('./package.json');

process.env.NODE_ENV = 'development';

var loaders = [
  {
    test: /\.jsx?|\.js?$/,
    exclude: /node_modules/,
    loaders: ['babel']
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
  },
  {
    test: /\.html$/,
    loader: [
      'file-loader?name=[path][name].[ext]',
      'template-html-loader?' + [
        'raw=true',
        'engine=handlebars',
        'title=' + pkg.name
      ].join('&')
    ].join('!')
  }
];


var config = {
  context: path.join(__dirname, 'src'),
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: path.join('js', '[name].js'),
  },
  module: {
    loaders: loaders
  },
  devServer: {
    colors: true,
    contentBase: path.resolve(pkg.config.buildDir),
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(path.join('css', '[name].css'), {
      allChunks: true
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },
};

module.exports = config;
