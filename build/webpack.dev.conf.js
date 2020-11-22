const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');
const { path: PATHS } = baseWebpackConfig.externals;

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: process.env.APP_PORT,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.public}/index.html`,
      title: process.env.APP_TITLE,
      options: {
        minify: false,
      },
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
