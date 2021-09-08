const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
  },
  devtool: 'inline-source-map',

 devServer: {
    
   static: './dist',

 },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/template.js',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.png$/, type: 'asset/resource' },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
