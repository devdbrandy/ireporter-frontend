const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const dotenvPlugin = new Dotenv();
const envLoaderPlugin = new webpack.DefinePlugin({
  'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
  'process.env.CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.CLOUDINARY_CLOUD_NAME),
  'process.env.CLOUDINARY_UPLOAD_PRESET': JSON.stringify(process.env.CLOUDINARY_UPLOAD_PRESET),
});

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 5000,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: 'public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    dotenvPlugin,
    envLoaderPlugin,
  ],
  resolve: { extensions: ['.js', '.jsx'] },
};
