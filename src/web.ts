import { WebPlugin } from '@capacitor/core';

import type { RootDetectionPlugin } from './definitions';

export class RootDetectionWeb extends WebPlugin implements RootDetectionPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
