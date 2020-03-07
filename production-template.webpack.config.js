// not maintained right now, use development config for reference

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var path = require('path');

module.exports = {
  entry: '<entry>',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '<output_js>'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '<output_html>',
      template: 'src/production-template.txt',
      inject: 'body',
      minify: true,
      xthmml: true,
      inlineSource: '.(js)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
}