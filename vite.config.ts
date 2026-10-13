import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  plugins: [solidStart(),
    nitro({
      /** Static build: pages are prerendered to .output/public */
      preset: "static",
      prerender: {
        routes: ["/"],
        crawlLinks: true
      }
    })
  ]
});
