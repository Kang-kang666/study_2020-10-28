module.exports = {
    publicPath: "./",

    // outputDit: 'dist',

    assetsDir: 'static',

    indexPath: 'index.html',

    productionSourceMap: false,
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         filename: 'index.html',
    //     },
    //     subpage: 'src/subpage/main.js'
    // },
    configureWebpack: {
        plugins: []
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = 200 * 1024;
                return options;
            });
    },
    devServer: {
        open: true,//设置自动打开
        port: 8880,//设置端口
    }
}