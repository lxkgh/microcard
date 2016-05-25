var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var alias = require('./alias.js')
var noParseAlias = require('./noparseAlias.js')
var config = {
    context: __dirname,
    entry: {
        vendor: ["react", "react-dom"],
        index: 'src/js/entry/index/entry.jsx',
        admin: 'src/js/entry/admin/admin.jsx',
        app: 'src/js/entry/web/web.jsx'
    },
    output: {
        path: '../../../../target/classes/assets/',
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx?)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
            include: path.resolve(__dirname, 'src/js'),
            exclude: [path.resolve(__dirname, 'src/css'), path.resolve(__dirname, 'node_modules')]
        }, {
            test: /\.css$/,
            loader: "style!css!postcss-loader",
            include: [path.resolve(__dirname, 'src/css'), path.resolve(__dirname, 'node_modules')],
            exclude: path.resolve(__dirname, 'src/js')
        }, {
            test: /\.(png|jpg|eot|svg|ttf|woff|gif|otf|woof2)((\?|#).*)?$/,
            loader: 'url?limit=100000&name=img/[hash:8].[name].[ext]'
        }],
        preLoaders: [{
            test: /\.jsx$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }],
        noParse: []
    },
    postcss: function() {
        return [precss, autoprefixer]
    },
    resolve: {
        root: [__dirname, path.resolve(__dirname, "node_modules")],
        alias: alias,
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "./js/vendor.js",
            minChunks: Infinity
        }),
        new ExtractTextPlugin("./css/[name].css", {
            allChunks: false
        }),
        new webpack.NoErrorsPlugin()
    ],
}

for (var i in noParseAlias) {
    if (Object.prototype.hasOwnProperty.call(noParseAlias, i)) {
        config.resolve.alias[i] = noParseAlias[i]
        config.module.noParse.push(noParseAlias[i]);
    }
}

module.exports = config
