import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react()],
    build: {
      minify: false,
    },
  }),
  manifest: {
    web_accessible_resources: [
      {
        resources: ["fastText.browser.wasm"],
        matches: ["<all_urls>"],
      },
    ],
  },
});
