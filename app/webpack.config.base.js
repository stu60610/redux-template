const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {},
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'react-hot',
        'babel',
      ],
      exclude: /node_modules/,
      include: __dirname,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]!postcss-loader'
    }],
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
};
