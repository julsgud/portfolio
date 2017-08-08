const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
	{from: 'src/404.html', to: 'dist/404.html'},
	{from: 'src/sitemap.html', to: 'dist/sitemap.html'},
	{from: 'src/sitemap.xml', to: 'dist/sitemap.xml'},
	{from: 'src/robots.txt', to: 'dist/robots.txt'}
}
]);

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename:'index_bundle.js'
	},
	module: {
		loaders: [
		{test: /\.js$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/},
		{test: /\.css$/, loader: 'style-loader!css-loader?modules', include: /flexboxgrid/}
		]
	},
	plugins: [
		[HtmlWebpackPluginConfig],
		[CopyWebpackPluginConfig]
	],
	resolve: {
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
}