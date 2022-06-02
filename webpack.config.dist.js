const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    'highlight.js': {
      commonjs2: 'highlight.js'
    },
    react: {
      commonjs2: 'react'
    },
    'react-dom': {
      commonjs2: 'react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader'],
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  }
}
