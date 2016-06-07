module.exports = {
  entry:'./views/components/profile/profileMain.jsx',
  output:{
    filename: './public/js/bundles/profileBundle.js'

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
