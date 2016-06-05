const path = require('path');

//  define the root path to the app
const root = path.join(__dirname, './app');

module.exports = {
  // sets path from which the entrypoint references
  context: root,

  // the main file to start processing
  entry: './main.js',

  output: {
    // the directory in which the file should be ouput too
    path: __dirname,
    // the name of the file to ouput
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // a babel loader that will process ES6 and compile modules
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['style', 'css?localIdentName=[name]__[local]___[hash:base64:5]', 'sass']
      }
    ]
  },

  resolve: {
    // resolve files names so they don't have to be specified in the import
    extensions: ['', '.js', '.scss'],
    // set the root so import's don't have to prefixed with ./
    root: [root]
  }
};
