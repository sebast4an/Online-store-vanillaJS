const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
//const webpack = require("webpack");
const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, `docs`),
    assetModuleFilename: 'assets/[name][ext][query]',
    clean: true,
  },
  devServer: {
    liveReload: true,
    contentBase: path.resolve(__dirname, `docs`),
    hot: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  devtool: 'source-map',
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/transform-runtime']],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'onlineStore vanillaJS',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
