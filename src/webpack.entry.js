const path = require('path');

module.exports = {
  entry: './src/webpack.entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
