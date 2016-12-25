module.exports = {

  entry: {
    yt: './src/youtube/index.js',
    book: './src/book/book.js',
    forecast: './src/forecaster/index.js'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].bundle.js'
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
