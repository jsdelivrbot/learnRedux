const webpack = require('webpack');
module.exports = {
    devtool: 'inline-source-map',

  entry: {
      yt: './src/youtube/index.js',
      book: './src/book/book.js',
      forecast: './src/forecaster/index.js',
      blog: './src/blog/index.js'
  },
  output: {
      path: __dirname + '/build',
      publicPath: '/build/',
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
    context: __dirname,
    node: {
        __dirname: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }//,
  /*devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8081
  }*/
};
