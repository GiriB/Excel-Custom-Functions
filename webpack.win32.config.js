module.exports = {
  entry: {
    "customfunctions": "./src/customfunctions/functions.ts"
  },
  output: {
    filename: '[name].bundle.win32.js',
    path: __dirname + '/dist'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
};
