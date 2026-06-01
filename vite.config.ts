// Vite config supporting BOTH Lovable's Cloudflare Workers deploy (default)
// and Vercel (Node/Edge). On Vercel, the VERCEL=1 env var is set during the
// build, so we disable the Cloudflare plugin and let Vite emit a standard
// client + SSR bundle that the Edge Function in /api/ssr.ts can serve.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercelBuild = !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercelBuild ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
});
