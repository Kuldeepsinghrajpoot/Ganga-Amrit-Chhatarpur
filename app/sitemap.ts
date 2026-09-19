import type { MetadataRoute } from "next";

const BASE_URL = "https://gangaamrit.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const priority: Record<string, number> = {
    "": 1,
    "/products": 0.9,
    "/about": 0.8,
    "/contact": 0.8,
    "/faq": 0.6,
    "/terms": 0.3,
    "/privacy-policy": 0.3,
  };
  const routes = Object.keys(priority);
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/products" ? ("weekly" as const) : ("monthly" as const),
    priority: priority[route],
  }));
}