import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-luvtorn.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://portfolio-luvtorn.vercel.app/projects/job-tracker",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://portfolio-luvtorn.vercel.app/projects/cookly",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
