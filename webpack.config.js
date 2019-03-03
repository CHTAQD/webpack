let path = require("path");
let HWP = require("html-webpack-plugin")//插件
let MCEP= require("mini-css-extract-plugin")
let MCEPS= require("mini-css-extract-plugin")

//node的核心模块 路径模块
// console.log(path.resolve(__dirname,'dist'))
module.exports={
	mode:'development',
	entry:'./src/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	devServer:{
		port:3000,
		progress:true, 
		contentBase:'./dist', 
		compress:true 
	},
	plugins:[//用所有的插件都是new 插件
		new HWP({
			template:"./src/index.html",
			filename:"index.html",
			hash:true,
			minify:{ //压缩配置   
			    removeAttributeQuotes:true, //去除双引号
			    collapseWhitespace: true,  //去除空格
			 }
		}),
		new MCEP({//抽离css
			filename:"index.css"
		}),
		new MCEPS({
			filename:"b.less"
		})
	],
	module:{
		rules:[
			{//将es5转化为es6
				test:/.js$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env'],
						plugins:[//yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators  -D 
								//@babel/plugin-proposal-decorators
							 ["@babel/plugin-proposal-decorators", { "legacy": true }],
                             ["@babel/plugin-proposal-class-properties", { "loose" : true }]
						]
					}  
				}
			},
			{
				test:/.css$/,

				use:[MCEP.loader,'css-loader','postcss-loader']
			},
			{
				test:/.less$/,
				use:[MCEPS.loader,'css-loader','less-loader']
			}
		]
	}


}