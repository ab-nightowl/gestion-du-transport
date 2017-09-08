const webpack = require('webpack');
const path = require('path');

const API_URL = process.env.NODE_ENV === 'production' ? 'https://api-transport.cleverapps.io' : 'http://localhost:8080';
const publicPath = process.env.NODE_ENV === 'production' ? '' : '/gestion-du-transport/';

const output = 'public';

module.exports = {
    entry: "./app",
    output: {
        path: path.resolve(__dirname, output),
        filename: "bundle.js",
        publicPath: publicPath
    },

    devServer: {
        contentBase: path.join(__dirname, output),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },

	devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [['env', {
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }
                    }]]
                }
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },

            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },

            {
                test: /\.html$/,
                exclude: [/node_modules/],
                loader: 'html-loader',
            },
            {
                    test: /\.(jpg|png|gif|svg)$/i,
                    loaders: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                    ]
                }
        ]

    },

    plugins: [
        new webpack.DefinePlugin({'API_URL': JSON.stringify(API_URL)})
    ]
};
