module.exports = {
  entry:'./src/components/home/home.jsx',
  output:{
    filename: './public/javascripts/bundles/homeBundle.js'

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
