var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css']
    },
    entry: [
        './index.tsx'
    ],
    output: {
        path: path.join(basePath, 'dist'),
        filename: 'blueribbonproducts.js',
    },
    target: "web",
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                },
            },
        },
        {
            test: /\.css$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader',
                },
            }),
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
        // Using here url-loader and file-loader
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.(jpg|png)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[path][name].[hash].[ext]",
                },
            },
        }]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true
        })
    ]
}