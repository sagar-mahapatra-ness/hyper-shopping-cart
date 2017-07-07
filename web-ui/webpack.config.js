const path = require('path');
var webPack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {

    entry: {
        'app': './src/App.ts',
        'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts'
    },
    resolve: {
         extensions: ['.ts','.js','html','css','png']
    },

    module: {
        
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, loaders: ["awesome-typescript-loader",'angular2-template-loader'] }
           ,
           {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'raw-loader'
      },

            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
		new webPack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
      }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
         new CopyWebpackPlugin([{
        from: 'src/assets'
      }])
    ],
    output: {
      path: __dirname + '/build',  
      filename: '[name].js'
   }
}; 