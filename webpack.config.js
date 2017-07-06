module.exports = {
	entry:'./src/js/app/entry.js',
	output:{
		filename:'bundle.js',
		path:__dirname + '/src/js/public'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	}
}