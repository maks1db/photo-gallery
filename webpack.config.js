const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglifyPlugin = webpack.optimize.UglifyJsPlugin;

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

const plugins = [
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

if (!isDevelopment){
    plugins.push(new uglifyPlugin({
        sourceMap: false,
        output: {comments: false}
    }));
}
module.exports = {
    entry: 
    ['./src/frontend/index.jsx'],
    output: {
        path:     path.resolve(__dirname, 'public', 'assets/js'),
        publicPath: '/assets/js/',
        filename: `index.js${isDevelopment ? '' : '?v=' + require('./package.json').version}`,
        sourceMapFilename: 'index.js.map'
    },
    devtool: isDevelopment && 'inline-source-map',
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/frontend/'),
            path.resolve(__dirname, 'src/frontend/components/'),
            path.resolve(__dirname, 'src/common/'),
            path.resolve(__dirname, 'node_modules/inputmaks/dist/inputmask/dependencyLibs/')
        ]
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: ['react-hot-loader', 'babel-loader']
        },
        { 
            test: /\.scss$/, 
            use: ['style-loader', 
                'css-loader?source-map&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'sass-loader'] 
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader?sourceMap' ]
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