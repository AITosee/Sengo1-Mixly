const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { name } = require('../../package.json');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new ESLintPlugin({
            context: process.cwd(),
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(process.cwd(), 'src/template.xml'),
            filename: 'sengo1.xml',
            minify: false,
            publicPath: `../../${name}/`,
            excludeChunks: [
                'language/sengo1/zh-hans',
                'language/sengo1/zh-hant',
                'language/sengo1/en',
                'block/sengo1',
                'generator/sengo1'
            ]
        }),
    ]
});
