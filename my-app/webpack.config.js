const path = require('path');

module.exports = {
  target:["web", "es5"],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // './dist'의 절대 경로를 리턴합니다.
    filename: 'app.bundle.js',
  },
};