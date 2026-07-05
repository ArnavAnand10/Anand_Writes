// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH ?? '/',

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    processor: unified({
      rehypePlugins: [rehypeMermaid]
    })
  },

  integrations: [
    mdx({
      rehypePlugins: [rehypeMermaid]
    })
  ]
});