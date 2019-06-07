const path = require('path');
const util = require('util');

const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const debuglog = util.debuglog('webpack_config');

const baseConfig = require('./webpack.base');

const config = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    externals: [webpackNodeExternals()],
    devtool: 'cheap-module-eval-source-map',
};

module.exports = () => {
    const result = merge(baseConfig, config);

    debuglog(result);

    return result;
};
