import { MetadataRoute } from "next";
import { getAllSlugs, getAllPosts } from "@/lib/blog";
import { cities } from "@/data/cities";

const BASE_URL = "https://bestloans.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const posts = getAllPosts();

  const blogRoutes: MetadataRoute.Sitemap = slugs.map((slug) => {
    const post = posts.find((p) => p.slug === slug);
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: post?.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/home-loan-in-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticSeoRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/home-loan-interest-rates-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/best-home-loan-for-salaried`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...staticSeoRoutes,
    ...cityRoutes,
    ...blogRoutes,
  ];
}
