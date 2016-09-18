/* global __dirname */

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/app/app.js',
  output: {
    filename: '[name].bundle.js',
    publicPath: './',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint']},
      {test: /\.json$/, loader: 'json'},
      {test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
      {test: /.*\.(gif|png|jpe?g|svg)$/i, loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
      }
    ]
  },
  imageWebpackLoader: {
    pngquant:{
      quality: "65-90",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
  },
  eslint: {
    configFile: '.eslintrc'
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'src')]
  },
  plugins: [
    // Injects bundle.js into the index.html file instead of wiring it all manually.
    // It also adds hash to all injected assets so we don't have problems with cache purging during deployment
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1
    })
  ]
};