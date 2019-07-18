const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env == 'production';
  const CSSExtract = new MiniCssExtractPlugin ({ 
    filename: 'styles.css'});
  const HTMLWebpackPlugin = new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './src/index.html',
    filename: 'index.html'
  });

  return {
    entry: { main: './src/index.js' },
    output: {
      path: path.resolve(__dirname, 'public'),
      // path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
      //filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test:/\.s?css$/,
        use: [
					{
            loader: MiniCssExtractPlugin.loader
					}, {
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
      }]
    },
    plugins: [
      CSSExtract,
      HTMLWebpackPlugin
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      watchContentBase: true
    }
  }
};