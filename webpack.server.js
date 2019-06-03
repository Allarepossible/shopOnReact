const path = require('path');

const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const config = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
