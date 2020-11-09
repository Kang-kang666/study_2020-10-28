const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 环境
   mode: 'development',
    // 目标文件
   entry: {
        index: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'), //路径
        filename: '[name].bundle.js' //文件名称
    },
    //loader的配置
    module: {
        rules: [
          {
            //详细loader配合
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
          },
          {
            //详细loader配合
            test: /\.(jpg|png|gif)$/,
            //处理图片资源
            loader: 'url-loader',
            options: {
                limit: 8* 1024
            }
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html'
        })
    ]
}