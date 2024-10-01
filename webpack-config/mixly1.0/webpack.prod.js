const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libInfo = `<!--
  type="company"
  block="block/sengo1.js"
  generator="generator/sengo1.js"
  lib="Sentry"
  media="media/sengo1"
  language="language/sengo1"
-->
<script type="text/javascript" src="../../blocks/company/sengo1.js"></script>`;


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
                publicPath: `../../`,
                excludeChunks: [
                    'language/sengo1/zh-hans',
                    'language/sengo1/zh-hant',
                    'language/sengo1/en',
                    'block/sengo1',
                    'generator/sengo1'
                ],
                templateParameters: (compilation, assets, assetTags, options) => {
                    assetTags.headTags.push(libInfo);
                    return {
                        compilation,
                        webpackConfig: compilation.options,
                        htmlWebpackPlugin: {
                            tags: assetTags,
                            files: assets,
                            options
                        }
                    };
                }
            })
        ]
    }
});
