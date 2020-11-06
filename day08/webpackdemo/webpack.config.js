const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 环境
   mode: 'development',
    // 目标文件
   entry: {
        index: path.resolve(__dirname, './src/index.js'),
        other: path.resolve(__dirname, './src/other.js')
    },
    // [path.resolve(__dirname, './src/index.js'), path.resolve(__dirname, './src/other.js')],
    // 自定义输出文件
    output: {
        path: path.resolve(__dirname, './dist'), //路径
        filename: '[name].bundle.js' //文件名称
    },
    devServer:{
        contentBase:'./dist'
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename:"index.html",
            title: "Webpack init",
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:"other.html",
            title: "Webpack init",
            chunks:['other']
        }),
    ]
}