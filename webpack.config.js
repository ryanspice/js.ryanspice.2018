/* */
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* */
const filename = "ryanspice.2018.js";

module.exports = {
	mode: 'development',
	devtool: 'eval-source-maps',
	entry: './src/index.js',
	output: {
		filename: filename,
		chunkFilename: '[name].bundle.js',
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
		rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/]
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
						,
					options: {
						url: false
					}
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [{
					loader: 'file?name=public/fonts/[name].[ext]'
				}]
			}
		]
	},

	node: {
		setImmediate: false,
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},

	plugins: [
		new MiniCssExtractPlugin({

			filename: "[name].css",

			chunkFilename: "[id].css"

		}),
		new CopyWebpackPlugin([{
				from: './src/index.html'
			},
			{
				from: './src/assets',
				to: './assets/'
			}
		]),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true)
	],
	devServer: {
		contentBase: './dist',
		hot: false,
		inline: true,
		compress: false,
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
