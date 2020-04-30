const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    // 每个入口文件对应一个chunk,chunk的name默认为main
    entry: {index: './src/index.js'},
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    // 加载器
    module: {
        // 可以指定多个加载器的规则
        rules: [

            // css模块加载器,生成单独的css文件
            {test:/\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader']},
            // less模块加载器,生成单独的css文件
            {test:/\.less$/, use: [MiniCssExtractPlugin.loader,'css-loader', 'less-loader']},
            // ES6模块 babel加载器 
            // 使用.babelrc配置文件
            // {test:/\.js$/, use: 'babel-loader', exclude: /node_modules/}
            
            // 不使用.babelrc配置使用，在选项中指定babel转码规则
            {test:/\.js$/, use: {
                loader:'babel-loader',
                options: {
                    presets: ["env"]
                }
            }, exclude: /node_modules/},

            // 图片加载器url-loader
            {test: /\.(jpe?g|gif|png|svg|bmp)$/, use: {
                loader: 'url-loader',
                options: {
                    // 当图片文件大小低于limit指定的30kb，则将其使用base64进行编码
                    // 否则使用file-loader
                    limit: 1024*30,
                    fallback: 'file-loader'
                }
            }}
        ]
    },

    // webpack插件 - 为webpack打包服务
    plugins: [
        // 清空output.path指定的目录
        new CleanWebpackPlugin(),

        // html-webpack-plugin自动生成一个H5文件，引入打包后的js文件
        new HtmlWebpackPlugin({
            favicon: './src/img/favicon.ico',
            // 新生成的H5文件以template指定的文件为模板
            template: './src/index.html'
        }),


        // 复制文件或目录到output.path指定的目录中
        new CopyWebpackPlugin([
            {from: 'static', to:'static'}
        ]),
        new MiniCssExtractPlugin()
    ],

    // devServer: 快速开发应用，热更新
    devServer: {
        port: 8080,
        open: true // 是否自动打开浏览器
    }
};