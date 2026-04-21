import { defineConfig } from "@lovable.dev/vite-tanstack-config";

if (process.env.NODE_ENV === "production") {
  process.env.NITRO_PRESET = "vercel";
}

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: {
      preset: "vercel",
    },
  },
});
