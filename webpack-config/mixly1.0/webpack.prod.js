const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('../../package.json');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
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
            })
        ]
    }
});
