/* eslint-disable no-console */
import { initializeTabs } from '@chrome-extension-boilerplate/shared';
import { exampleThemeStorage } from '@chrome-extension-boilerplate/storage';

export async function toggleTheme(): Promise<void> {
  console.log('initial theme:', await exampleThemeStorage.get());
  console.log('all the tabs, yay!: ', await initializeTabs());
  await exampleThemeStorage.toggle();
  console.log('toggled theme:', await exampleThemeStorage.get());
}
