const path = require('path')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './app.ts',
    output: {
        path: dist,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(svg|ttf|eot|woff2?)$/, use: 'file-loader'},
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js',
        },
        extensions: ['.ts'],
    },
}
