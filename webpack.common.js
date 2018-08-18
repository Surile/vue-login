const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.[hash:8].js',
        chunkFilename: '[name].[hash:8].chunk.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName:
                                        '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName:
                                        '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    {
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /\.scss$/,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName:
                                        '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName:
                                        '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    {
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue start kit',
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(['build']),
        new webpack.NamedModulesPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin({
            hotReload: true,
            shadowMode: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
}
