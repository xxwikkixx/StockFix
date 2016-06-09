var path = require('path');

module.exports = {
  entry:{
    main: './views/components/home/home.jsx',
    signals: './views/components/signals/signals.jsx',
    profile: './views/components/profile/profileMain.jsx',
    chat: './views/components/chat/chatMain.jsx',
    information: './views/components/information/information.jsx',
    billing: './views/components/billing/billingMain.jsx'
  },
  output:{
    path: path.join(__dirname, 'public/js/bundles'),
    filename: '[name].bundle.js'
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
