module.exports = {
  mode: 'production',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // comment out to see output working
          'thread-loader',
          require.resolve('./loader.js')
        ]
      }
    ]
  }
}
