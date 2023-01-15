const path = require('path')
const htmlPlugin=require("html-webpack-plugin")
const cssMinPlugin=require("css-minimizer-webpack-plugin")
const htmlMinPlugin=require("html-minimizer-webpack-plugin")


module.exports = {
    module:{
rules: [
    {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
    },
    devServer:{
        compress:true,
        port:9000
    },
mode:'development',
  entry: {
    index: path.resolve(__dirname, './src/js/index.js') 
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlPlugin({
      template: path.resolve(__dirname, "./home.html"),
      filename:"home.html",
      inject:"body"
    })
  ],
  optimization:{
    minimizer:[
        new cssMinPlugin(),
        new htmlMinPlugin(),
    ]
  }
}
