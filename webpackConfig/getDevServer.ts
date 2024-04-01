import { Port } from './types';
import webpack = require('webpack');

export const getDevServer = (port: Port): webpack.Configuration['devServer'] => {
  return {
    port,
    historyApiFallback: true,
    hot: true,
    open: true,
  };
};
