# HYPER SHOPPING CART

## web-ui

instal node.js
need npm 3.10.10

npm init
npm install @angular/common @angular/core @angular/compiler --save
npm install @angular/platform-browser @angular/platform-browser-dynamic --save
npm install @angular/router @angular/router-deprecated --save
npm install @angular/http --save
npm install @angular/forms --save
npm install es6-shim reflect-metadata rxjs zone.js --save

npm install --save @angular/material
npm install --save @angular/animations


npm install webpack-dev-server webpack --save-dev
npm install webpack-merge --save-dev

webpack.config.js

const path = require('path');
module.exports = {

    entry: {
        'app': './src/App.ts'
    },

    output: {
       filename: './build/bundle.js'
    },

    resolve: {
         extensions: ['.ts']
    },

    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, loader: "ts-loader",  exclude: path.resolve(__dirname, 'node_modules') }
        ]
    },

    plugins: [
		// finetune the behaviour of specific plugins
    ]
}; 

npm install -g typescript

tsc --init --experimentalDecorators --emitDecoratorMetadata --target ES5 --module commonjs --sourceMap true

npm install --save @types/lodash
npm install --save-dev @types/core-js
npm install @types/jquery --save

npm install -g lite-server
npm install ts-loader --save-dev

npm install angular2-template-loader awesome-typescript-loader css-loader file-loader html-loader null-loader raw-loader style-loader to-string-loader --save-dev


npm install html-webpack-plugin webpack-merge extract-text-webpack-plugin --save-dev