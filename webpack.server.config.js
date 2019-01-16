const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

const ROOT_DIR = path.resolve(__dirname, './');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');
const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass)$/;
const reImage = /\.(bpm|gif|jpg|jpeg|png|svg)$/;
const staticAssetName = 'assets/[name].[ext]';
const BUILD_DIR = path.resolve(__dirname, 'dist');

const resolve = {
  modules: ['node_modules'],
  alias: {
    '~': SRC_DIR
  },
}

module.exports = {
  context: ROOT_DIR,
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  name: 'server',
  resolve,
  entry: {
    server: [
      './src/server.js',
    ],
  },
  target: 'node',
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
    chunkFilename: 'chunks/[name].js',
  },
  externals: [
    './chunk-manifest.json',
    nodeExternals({
      whitelist: [reStyle, reImage],
    }),
  ],
  resolveLoader: {
    modules: ['node_modules', './webpack-loaders'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader",
            options: {
              sourceMap: false,
              modules: true,
              localIdentName: '[path]_[local]',
              exportOnlyLocals: true,
            }
          },
        ]
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "./src/"),
        ],
        loader: "babel-loader",
        options: {
          babelrc: false,
          cacheDirectory: false,
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  node: 'current',
                },
                modules: false,
                useBuiltIns: false,
              },
            ], [
              "@babel/preset-react",
              {
                development: true,
              },
            ],
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-transform-runtime"],
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
          ],
        },
      },
      {
        test: reImage,
        oneOf: [
          // Inline lightweight images into CSS
          {
            issuer: reStyle,
            oneOf: [
              // Inline lightweight SVGs as UTF-8 encoded DataUrl string
              {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },

              // Inline lightweight images as Base64 encoded DataUrl string
              {
                loader: 'url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
            ],
          },

          // Or return public URL to image resource
          {
            loader: 'file-loader',
            options: {
              name: staticAssetName,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: false,
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
}