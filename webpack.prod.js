const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');


 module.exports = merge(common, {
   mode: 'production',
   plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting"'],
      //onBuildEnd: ['sh writehtml.sh']
    })
  ],
     optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
 });