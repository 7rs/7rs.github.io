import path from 'node:path';
import { defineConfig } from 'astro/config';
import tsconfig from './tsconfig.json';
import svelte from "@astrojs/svelte";
let aliasesArray: {
  [key: string]: string;
} = {};
for (const [alias, targetPath] of Object.entries(tsconfig.compilerOptions.paths)) {
  aliasesArray = {
    ...aliasesArray,
    ...{
      [alias]: path.resolve(targetPath[0])
    }
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: aliasesArray
    }
  },
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: 'dracula'
    }
  },
  integrations: [svelte()]
});