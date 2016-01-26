module.exports = {
  context: __dirname,
  entry: "./public/javascripts/App",
  output: {
    path: __dirname + "/",
    filename: "./public/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
