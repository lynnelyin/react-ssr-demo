module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/react', ['@babel/preset-env', {
            targets: {
              // 兼容到浏览器的最新两个版本 
              browsers: ['last 2 versions']     
            }
          }]]
        }
      }
    ]
  }
};