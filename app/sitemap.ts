import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ieoweb.com";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/services`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];
}