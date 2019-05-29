const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
};

module.exports = merge(baseConfig, config);
