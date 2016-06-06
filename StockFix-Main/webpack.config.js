module.exports = {
  entry:'./views/components/home/home.jsx',
  output:{
    filename: './public/js/bundles/homeBundle.js'

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
