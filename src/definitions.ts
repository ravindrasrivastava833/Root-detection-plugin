export interface RootDetectionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
