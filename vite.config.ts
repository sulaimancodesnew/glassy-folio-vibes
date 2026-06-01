// Lovable's TanStack Start wrapper includes the Cloudflare Workers build plugin
// by default. We disable it (`cloudflare: false`) so the build emits a standard
// Vite SSR bundle (client + server) that Vercel / any Node host can serve.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
