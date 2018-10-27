const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglifyPlugin = webpack.optimize.UglifyJsPlugin;

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

const plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            DEV: isDevelopment
        }
    }),
    new HtmlWebpackPlugin({
        template: 'src/ejs/index.ejs',
        filename: '../../index.html'
    })
];

if (!isDevelopment) {
    plugins.push(
        new uglifyPlugin({
            sourceMap: false,
            output: { comments: false }
        })
    );
}

plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = {
    entry: [
        '@babel/polyfill',
        isDevelopment && 'react-hot-loader/patch',
        './src/frontend/index.jsx'
    ].filter(x => x !== false),
    output: {
        path: path.resolve(__dirname, 'public', 'assets/js'),
        publicPath: '/assets/js/',
        filename: `index.js${
            isDevelopment ? '' : '?v=' + require('./package.json').version
        }`
    },
    devtool: isDevelopment && 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/frontend/'),
            path.resolve(__dirname, 'src/frontend/components/'),
            path.resolve(__dirname, 'src/helpers/'),
            path.resolve(
                __dirname,
                'node_modules/inputmaks/dist/inputmask/dependencyLibs/'
            )
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?source-map&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(png)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    plugins: plugins
};
