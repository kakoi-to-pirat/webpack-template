const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');
const { path: PATHS } = baseWebpackConfig.externals;

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.public}/index.html`,
      title: process.env.APP_TITLE,
      options: {
        minify: true,
      },
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(prodWebpackConfig);
});
