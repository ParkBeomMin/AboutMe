// const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'development', // 또는 'production'
//     entry: './src/index.js', // 프로젝트의 진입 파일 경로
//     output: {
//         filename: 'bundle.js', // 번들된 파일의 이름
//         path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 경로
//         // environment: { module: true },
//     },
//     experiments: { outputModule: true },
//     devServer: {
//         static: {
//             directory: path.resolve(__dirname, 'dist'),
//         },
//         port: 9000,
//         open: true,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'index.html',
//         }),
//     ],
//     resolve: {
//         alias: {
//             '~': path.resolve(__dirname, './src/'),
//         },
//     },
//     module: {
//         rules: [
//             // 필요한 로더 설정 (예: Babel 등)
//         ],
//     },
// };
