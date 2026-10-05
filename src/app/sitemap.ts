import type { MetadataRoute } from "next";
import { services, site } from "@/lib/content";

// Legal pages are added once counsel has reviewed them; Insights is not at launch (brief tab 5).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", ...services.map((s) => `/services/${s.slug}`), "/partners", "/contact"];
  return paths.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}` }));
}
