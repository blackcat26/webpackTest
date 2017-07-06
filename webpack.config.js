module.exports = {
	entry:'./src/js/app/entry.jsx',
	output:{
		filename:'bundle.js',
		path:__dirname + '/src/js/public'
	},
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'babel-loader?presets[]=es2015&presets[]=react'
			}
		]
	}
}