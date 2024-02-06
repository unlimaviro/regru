const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  entry: {
    main: './mainpage/static/js/main.js',
    // Добавляем jQuery как дополнительную точку входа
    jquery: 'jquery'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './mainpage/static/mainpage/dist'),
    publicPath: '/static/mainpage/dist/',
  },
  module: {
    rules: [
      // Ваши правила загрузки...
    ],
  },
  plugins: [
    // Автоматически загружаем jQuery там, где она используется
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // Остальные плагины...
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new BundleTracker({
      path: path.resolve(__dirname, './mainpage/static/mainpage/dist/'),
      filename: 'webpack-stats.json',
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            // Добавьте svgo конфигурацию по желанию
          ],
        },
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
