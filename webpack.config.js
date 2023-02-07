const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [new ESLintPlugin(options)]
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
