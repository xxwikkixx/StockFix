module.exports = {
  entry:'./views/components/signals/signals.jsx',
  output:{
    filename: './public/js/bundles/signalBundle.js'

  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  externals:{

  },
  resolve:{
    extensions: ['', '.jsx', '.js']
  }
}
