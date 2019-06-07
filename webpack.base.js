module.exports = {
    mode: 'development',
    module: {
        resolve: {extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx']},
        rules: [
            {
                // test: /\.js$/,
                // exclude: /node_modules/,
                // loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
};
