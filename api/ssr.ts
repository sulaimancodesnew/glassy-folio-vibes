// Vercel Edge Function entry point.
//
// Vercel auto-discovers files under /api as serverless functions. We rewrite
// every incoming request to this single endpoint (see vercel.json) and let
// TanStack Start's Web-standard fetch handler render the response.
//
// Edge runtime is used because TanStack Start's server entry is built around
// the Web Fetch API (Request/Response), matching Cloudflare Workers and Vercel
// Edge. If you need Node APIs (fs, native modules), switch runtime to 'nodejs'.

import handler from "../src/server";

export const config = {
  runtime: "edge",
};

export default async function ssr(request: Request): Promise<Response> {
  return handler.fetch(request, {}, {});
}
