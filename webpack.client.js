const path = require('path');
const util = require('util');

const merge = require('webpack-merge');

const debuglog = util.debuglog('webpack_config');

const baseConfig = require('./webpack.base');

const config = {
    entry: './src/client/client.tsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
};

module.exports = () => {
    const result = merge(baseConfig, config);

    debuglog(result);

    return result;
};
