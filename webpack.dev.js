
const common = require('./webpack.common')

const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }]
    },
    {
      test: /\.svg/,
      use: {
        loader: 'svg-url-loader',
        options: {
          iesafe: true,
          encoding: 'base64'
        }
      }
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.dev.html'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon/favicon-16x16.png'
    }),
    new DefinePlugin({
      'process.env.API_URL': 'https://api-bank-nodejs.herokuapp.com/api/v1'
    })
  ]
})
