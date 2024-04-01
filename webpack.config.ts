import { getWebpackConfig } from './webpackConfig/getWebpackConfig';
import { EnvVars } from './webpackConfig/types';

const path = require('path');

export default (env: EnvVars) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.join(__dirname, 'build'),
  };
  const port = env.port ?? 3000;
  const mode = env.mode ?? 'development';
  const analyze = env.analyze ?? false;

  return getWebpackConfig({ port, paths, mode, analyze });
};
