const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');
const webpack = require('webpack');
const sources = require('./sources.json');

let htmlPlugins = Object.keys(sources).map(e => {
  return new HtmlWebpackPlugin({
    filename: `${e}.html`,
    chunks: [`${e}`],
    template: './src/development-template.html',
    templateParameters: {
      title: `${e}`
    },
    inject: 'body',
    minify: false,
    xthmml: true,
    inlineSource: `${e}.js`
  });
});

module.exports = {
  mode: 'development',
  entry: sources,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      } 
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    // Must be below test-utils
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    }
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  plugins: []
    .concat(htmlPlugins)
    .concat([
      new HtmlWebpackInlineSourcePlugin() 
    ])
}