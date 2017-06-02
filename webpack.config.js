module.exports = {
    entry: './public/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extentions: ['','.js','.jsx']
    },
    module: {
        loader: {
            loader: 'babel',
            query: {
                presets: ['es2015','react']
            },
            test: '/\.jsx?$/',
            exclude: /(node_modules|bower_compnents)/
        }
    }
};