import { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types';
//eslint-disable-next-line @typescript-eslint/no-unused-vars
import webpack = require('webpack');
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { DefinePlugin } from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export const getPlugins = (
  mode: BuildOptions['mode'],
  paths: BuildOptions['paths'],
  analyze: BuildOptions['analyze'],
): WebpackPluginInstance[] => {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html,
  });

  const definePlugin = new DefinePlugin({ __MODE__: JSON.stringify(mode) });

  const copyPlugin = new CopyPlugin({
    patterns: [
      {
        from: 'public/assets',
        to: 'assets/',
      },
      { from: 'public/netlifyStuff' },
    ],
  });

  const analyzePlugin = new BundleAnalyzerPlugin();

  const hotRefreshPlugin = new ReactRefreshWebpackPlugin();

  const plugins = [htmlPlugin, definePlugin];

  if (isDev) plugins.push(hotRefreshPlugin);

  if (isProd) {
    plugins.push(copyPlugin);
  }

  if (analyze) {
    plugins.push(analyzePlugin);
  }

  return plugins;
};
