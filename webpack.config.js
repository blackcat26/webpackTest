module.exports = {
	entry:{
		bundle1:'./src/js/app/test1.js',
		bundle2:'./src/js/app/test2.js',
	},
	output:{
		filename:'[name].js',
		path:__dirname + '/src/js/public'
	}
}