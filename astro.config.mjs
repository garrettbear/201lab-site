import { defineConfig } from 'astro/config';

// Static output: every page is prerendered HTML. A marketing site has no
// server-side work to do, and static keeps it fast on the mobile connections
// most of this traffic arrives on.
export default defineConfig({
  site: 'https://201lab.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
