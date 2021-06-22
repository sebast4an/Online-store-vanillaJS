const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}