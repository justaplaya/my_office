import { BuildOptions } from './types';
import { ModuleOptions } from 'webpack';

export const getLoaders = (mode: BuildOptions['mode']): ModuleOptions['rules'] => {
  const urlLoader = {
    test: /\.(png|jpg|gif|woff|woff2|eot|ttf|webp)$/,
    loader: 'url-loader',
    options: { name: 'assets/[hash].[ext]' },
  };

  const tsLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [{ loader: 'babel-loader' }],
  };

  const loaders: Record<string, unknown>[] = [urlLoader, tsLoader];
  return loaders;
};
