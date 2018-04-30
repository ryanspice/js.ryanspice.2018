
/* */

const filename = "babel-flow-webpack4-boilerplate.js";

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

/* */

module.exports = {
	mode:'development',
	entry: './src/index.js',
	output: {
		filename: filename,
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.scss', '.css'],
		plugins: [],
		modules: [
		 './src',
		 'node_modules'
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader"
				}
			},
			{
			  test: /bootstrap\.native/,
			  use: {
			    loader: 'bootstrap.native-loader'
			  }
			},
			{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
							,options:{url:false}
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      }
		]
	},
	plugins:[
		new CopyWebpackPlugin([
	        { from: './src/index.html' },
	        { from: './src/images', to:'./images/' }
	    ]),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new DashboardPlugin()
	],
	devServer: {
	  contentBase: './dist',
	  hot: false,
	  inline: true,
	  compress: true,
	  stats: {
		assets: true,
		children: false,
		chunks: false,
		hash: false,
		modules: false,
		publicPath: false,
		timings: true,
		version: false,
		warnings: true,
		colors: {
			  green: '\u001B[36m',
			}
		}
	}
};
