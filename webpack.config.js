module.exports = {
	entry:'./src/js/app/entry.js',
	output:{
		filename:'bundle.js',
		path:__dirname + '/src/js/public'
	},
	module:{
		loaders:[
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=8192&name=src/img/[name].[ext]',
			},
			/*{
				test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
					name: 'src/img/public/[name].[ext]'
				}
			},*/
		]
	}
}