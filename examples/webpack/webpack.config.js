const path = require('path');

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1500,
    ignored: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  // File output settings.
  output: {
    // Output file directory name.
    path: path.resolve(__dirname, 'dist'),
    // Output file name.
    filename: '[name].js'
  },

  // Do not include React itself in the bundle file.
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },
}