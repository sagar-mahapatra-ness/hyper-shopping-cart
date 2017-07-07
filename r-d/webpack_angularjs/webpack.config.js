var webPack = require('webpack');
var htmlWebPack = require('html-webpack-plugin');
var extractTextWebPackPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helpers');
var config = {
  entry:{
    'app':'./src/App.ts',
	'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  resolve:{
      extensions:['.ts','.js']
  },
  module:{
      rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader?tsconfig',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      }
	  ,
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
 plugins: [
    new webPack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
    }),
	new webPack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    )
  ],
  output: {
   filename: '[name].js',
  },
};
module.exports = config;