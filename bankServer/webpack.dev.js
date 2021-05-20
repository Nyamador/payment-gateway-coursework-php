const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "./build"),
		publicPath: "/build/",
		filename: "[name].js",
		chunkFilename: "[id]-[chunkhash].js",
	},
	devtool: "inline-source-map",
	devServer: {
		port: 4000,
		headers: { "Access-Control-Allow-Origin": "*" },
		hot: true,
		writeToDisk: true,
	},
});