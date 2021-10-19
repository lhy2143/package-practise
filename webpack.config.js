const path = require('path');

module.exports = {
  mode: 'production',
  entry: './webpack/entry/index.js',
  output: {
    path: path.resolve(__dirname, 'webpack/output'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  optimization: {
    usedExports: true,
  },
};
