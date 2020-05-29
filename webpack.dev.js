const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin');


module.exports = merge(common, {
 mode: 'development',
 devtool: 'inline-source-map',
 devServer: {
   contentBase: './dist'
  },
 
  plugins: [
  new WebpackShellPlugin({
    onBuildStart: ['echo "Starting"'],
   // onBuildEnd: ['sh writehtml.sh']
  })
],
 
  module: {
 
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            sourceMap: true
          }
        },
        {
          loader: "ifdef-loader", options: {
            DEBUG: true,
          }
        }
        ]
      },
    ]
  }
});
    