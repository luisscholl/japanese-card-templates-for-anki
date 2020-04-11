const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: '<entry>',
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
    filename: '<output_js>'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '<output_html>',
      template: './src/development-template.html',
      templateParameters: {
        title: '<title>'
      },
      inject: 'body',
      minify: false,
      xthmml: true,
      inlineSource: '.(js)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
}