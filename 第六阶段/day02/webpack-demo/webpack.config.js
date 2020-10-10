const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist', // 本地服务器所加载文件的目录
    port: '8088', // 设置端口号为8088
    inline: true, // 文件修改后实时刷新
  },
  module:{
    rules:[
      {
        test: /\.css$/, // 正则匹配以.css结尾的文件
        use: ['style-loader', 
              'css-loader',
              {
                loader: 'postcss-loader'
              }
          ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  }
};