const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development', // 또는 'production'
    entry: './src/index.js', // 프로젝트의 진입 파일 경로
    output: {
        filename: 'bundle.js', // 번들된 파일의 이름
        path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 경로
        // environment: { module: true },
    },
    experiments: { outputModule: true },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 9000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: './src/assets/favicon/favicon.ico',
            inject: false, // 자동 주입 해제
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),

        new CopyWebpackPlugin({
            patterns: [
                { from: './robots.txt', to: './' },
                { from: './sitemap.xml', to: './' },
                { from: './google6b36f453637478f8.html', to: './' },
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            // 필요한 로더 설정 (예: Babel 등)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-syntax-import-meta'], // 이 부분을 추가
                    },
                },
            },
            ,
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // use 배열 안의 Loader들은 뒤에서부터 적용된다.
                // css-loader로 읽고 style-loader로 html에 style 태그 추가
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]', // 파일 이름에 해시를 추가하여 충돌 방지
                            outputPath: 'assets/images', // 출력 경로 설정
                            publicPath: 'assets/images', // 빌드된 파일의 공개 경로 설정
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
};
