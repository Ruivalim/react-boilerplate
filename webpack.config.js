const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	devServer: {
		hot: true,
		historyApiFallback: true,
		port: 3300
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader"
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.s[ac]ss$/i,
				loader: "postcss-loader",
				options: {
					postcssOptions: {
						ident: "postcss",
						plugins: [
							require("postcss-import"),
							require("tailwindcss"),
							require("postcss-nested"),
							require("postcss-custom-properties"),
							require("autoprefixer"),
						],
					},
				}
			},
		]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		}),
		new CompressionPlugin()
	]
};
