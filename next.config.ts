import type { NextConfig } from "next";

/**
 * Static export: `npm run build` writes a plain HTML site to ./out.
 * On GitHub Pages the site lives under /portafolio, so the workflow sets NEXT_PUBLIC_BASE_PATH.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
