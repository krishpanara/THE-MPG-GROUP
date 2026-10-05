import type { MetadataRoute } from "next";
import { home, site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "MPG Group",
    description: home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F1",
    theme_color: "#2D3748",
    icons: [
      { src: "/mpgw-brand-assets/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/mpgw-brand-assets/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
