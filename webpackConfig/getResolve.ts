import { ResolveOptions } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const getResolve = (): ResolveOptions => {
  return {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  };
};
