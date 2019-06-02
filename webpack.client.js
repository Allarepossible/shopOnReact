const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
    entry: './src/client/client.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
};

module.exports = merge(baseConfig, config);
