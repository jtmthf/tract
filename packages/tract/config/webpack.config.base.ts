import { Configuration } from 'webpack';

const config: Configuration = {
  module: {
    rules: [
      {
        test: /.(j|t)x?$/,
        loader: require.resolve('ts-loader')
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
},
};

export default config;
