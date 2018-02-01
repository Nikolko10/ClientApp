module.exports = {
	entry: __dirname + '/jsx/app.jsx',
	output: {
		path: __dirname + '/js/',
		filename: 'bundle.js'
	},
	devtool: '#sourcemap',
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loaders: 'babel-loader'
			}
		]
	}
}