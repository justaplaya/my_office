export type BuildMode = 'development' | 'production';
export type Port = number;
export type EnvVars = {
  port?: number;
  mode?: BuildMode;
  analyze?: boolean;
};

export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
};

export type BuildOptions = {
  port: Port;
  paths: BuildPaths;
  mode: BuildMode;
  analyze: boolean;
};
