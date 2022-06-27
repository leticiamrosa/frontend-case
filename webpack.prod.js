const common = require('./webpack.common')
const { merge } = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
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
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    axios: 'axios',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[hash].css'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon/favicon-16x16.png'
    })
  ]
})
