const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: {
    'app':              './src/index.js',
    'assets/js/banner': './src/assets/js/banner.js',
    'assets/js/tabs': './src/assets/js/tabs.js',
    'assets/js/upload': './src/assets/js/upload.js',
    'assets/js/chart': './src/assets/js/chart.js',

  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'app'),
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]' /* هذا السطر */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,

        exclude: /images/,

        use: [
          {
            loader: 'file-loader',

            options: {
              name: '[name].[ext]',

              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
        type: 'asset/resource',
       },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'app'),
    },
    compress: true,
    port: 8100,
    // open: true,
    devMiddleware: {
      writeToDisk: true,
      stats: 'errors-only',
    },
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['app', 'assets/js/banner', 'assets/js/chart', 'assets/js/tabs']
    }),
    new HtmlWebpackPlugin({
      template: './src/add-product.html',
      filename: 'add-product.html',
      chunks: ['app', 'assets/js/upload']
    }),
    new HtmlWebpackPlugin({
      template: './src/product.html',
      filename: 'product.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/users.html',
      filename: 'users.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/orders.html',
      filename: 'orders.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/add-user.html',
      filename: 'add-user.html',
      chunks: ['app', 'assets/js/upload']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/button.html',
      filename: 'components/button.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/textfield.html',
      filename: 'components/textfield.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/card.html',
      filename: 'components/card.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/list.html',
      filename: 'components/list.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/help.html',
      filename: 'components/help.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/summary.html',
      filename: 'components/summary.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/actions.html',
      filename: 'components/actions.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/sidebar.html',
      filename: 'components/sidebar.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/table.html',
      filename: 'components/table.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/chart.html',
      filename: 'components/chart.html',
      chunks: ['app', 'assets/js/chart']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/upload.html',
      filename: 'components/upload.html',
      chunks: ['app', 'assets/js/upload']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/tabs.html',
      filename: 'components/tabs.html',
      chunks: ['app', 'assets/js/tabs']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/banner.html',
      filename: 'components/banner.html',
      chunks: ['app', 'assets/js/banner']
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({ filename: 'assets/css/styles.css' }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/help.html'),
      location: 'help',
      template_filename: ['index.html', 'add-product.html', 'product.html', 'users.html', 'orders.html', 'add-user.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/banner.html'),
      location: 'banner',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/sidebar.html'),
      location: 'sidebar',
      template_filename: ['index.html', 'add-product.html', 'product.html', 'users.html', 'orders.html', 'add-user.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/chart.html'),
      location: 'chart',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/actions.html'),
      location: 'actions',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/tabs.html'),
      location: 'tabs',
      template_filename: ['index.html'],
    }),
  ],
};
