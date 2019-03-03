## webpack 安装 
npm init -y
安装本地的webpack 
yarn add webpack webpack-cli -D  
npm install webpack webpack-cli -D
-D 表示development  开发环境 
建文件夹 src 
把要打包的源码放入src
## webpack 可以进行0配置
- 可以在文件夹直接运行 npx webpack 
- 打包工具->输出后的结果(js模块)
- 打包（直接js的模块化）
  src 表示码源文件夹
## 手动配置webpack 
  默认配置文件的名字是webpack.config.js 自己创建
  module.exports
  mode  是开发模式还是生产模式 默认development
  entry 入口 可以是相对路径
  output 出口输出
    path 输出路径必须是绝对路径
    filename 输出的文件名

- 
- webpack 是node写出来的 
```

-yarn add webpack-dev-server -D 一个插件 网页运行
devServer
    port:3000, #端口好
    progress:true, #显示进度条
    contentBase:'./dist', #目录
    compress:true  #是否开启gzip压缩
```

## 配置脚本 package.json 
scripts：
  - "build": "webpack --config webpack.config.js",
  - "dev": "webpack-dev-server"
- 这样就可以通过npm run dev 运行网页/npm run build打包执行相关的命令

## 处理html 
-  yarn add  html-webpack-plugin 下载插件
  插件的使用在开头引入插件 并在plugin new 插件
plugins
  new 插件
    template:'./src/index.html',//模板
    filename:'index.html', //编译后的名字
    hash:true,//加hash值 
    minify:{ //压缩配置   
        removeAttributeQuotes:true, //去除双引号
        collapseWhitespace: true,  //去除空格
        }
```

## 直接给文件加hash值 
```
filename:'bundle[hash].js'
可以用数字设置hash值的长短 
filename:'bundle[hash:8].js'
```
## 处理样式
  jsFile里
- . 通过require require('/index.css') 报错如下 

```
Module not found：Can't resolve '/index.css' in '/Users/ruanye/Desktop/webpacklesson/src

```
- . 配置module,配置rules数组，表示很多规则，用正在匹配js、css等

```
module:{
  rules:[
    {
        test:'/\.css/',//配置到css
        use:['css-loader','style-loader']
    }
```
- .use 可以直接写loader，也可以写对象，写对象的时候可以写配置
yard add css-loader style-loader -D
```
 {
   loader:'style-loader', 以style标签的样式显示样式
    options:{
     insertAt:'top'  //css 放置位置可以绝对css的优先级
  }
```
- 配置less编译(less->css) 因为从右向左，从下到上执行 所以写在下边和右边
yarn add less less-loader -D
module:{
		rules:[
        {
          test:/.less$/,
          use:[MCEPS.loader,'css-loader','less-loader']
          以link输出
        }
##  抽离css 
- yarn add  mini-css-extract-plugin -D
  引用插件
在blugins new插件
  new MCEP({
			filename:"index.css"
		}),
    抽离
    并以link的形式输出样式
  module:{
		rules:[
			{
				test:/.css$/,
				use:[MCEP.loader,'css-loader']
			},
## 使用postcss添加浏览器前缀 
- yarn add postcss-loader autoprefixer -D 
- 放到所有cssloader后面，执行顺序原因
- 需要配置postcss默认文件 名字postcss.config.js
```
module.exports={
    plugins:[require('autoprefixer')]
}
```

## 配置优化项
- yarn add optimize-css-assets-webpack-plugin  uglifyjs-webpack-plugin -D 
optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true, //缓存 
        parallel: true, //是否并发打包
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
## 处理js es6转化成es5
- yarn add babel-loader @babel/core @babel/preset-env
@babel/core babel 核心模块
@babel-preset-env 标准语法转化成低级语法
- class 和 es6@(装饰器需要安装额外的插件) 并且添加plugins集合
```
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ]
}
``` 
- promise genarater 需要 @babel/plugin-transform-runtime
yarn add  @babel/plugin-transform-runtime 
生产环境也需要runtime 
yarn add @babel/runtime 
- es7的一些语法需要其他的 补丁包 
yarn  @babel/polyfill
require("@babel/polyfill");

## 配置需要设置loader的文件路径  

- include 包含  include:path.resolve(__dirname,'src'), 
- exclude 不包含  exclude:/node_modules/

## babel 也可以独立进行配置，文件名字.babelrc











