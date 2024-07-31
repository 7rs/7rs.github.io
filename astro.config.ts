import path from 'node:path';
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import UnoCSS from 'unocss/astro';
import compressor from 'astro-compressor';
import playformCompress from '@playform/compress';
import purgecss from 'astro-purgecss';

import tsconfig from './tsconfig.json';

let aliasesArray: { [key: string]: string } = {};
for (const [alias, targetPath] of Object.entries(tsconfig.compilerOptions.paths)) {
  aliasesArray = {
    ...aliasesArray,
    ...{
      [alias]: path.resolve(targetPath[0]),
    },
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: aliasesArray,
    },
  },
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: 'dracula',
    },
  },
  integrations: [icon(), mdx(), svelte(), UnoCSS(), purgecss(), playformCompress(), compressor()],
});
