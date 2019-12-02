const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出文件地址
    path: path.resolve(__dirname, 'dist')
  }
};