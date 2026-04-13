import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://bestloans.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const posts = getAllPosts();

  const blogRoutes = slugs.map((slug) => {
    const post = posts.find((p) => p.slug === slug);
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: post?.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

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
    ...blogRoutes,
  ];
}
