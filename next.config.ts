import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Browsers and crawlers request /favicon.ico at the root; serve the delivered file.
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/mpgw-brand-assets/favicon.ico" }];
  },
};

export default nextConfig;
