import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import BlogLayout from "@/components/BlogLayout";
import RelatedPosts from "@/components/RelatedPosts";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { mdxComponents } from "@/components/mdx-components";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <BlogLayout
        title={post.title}
        description={post.description}
        date={post.date}
        tags={post.tags}
        readingTime={post.readingTime}
        coverImage={(post as any).coverImage}
      >
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          components={mdxComponents}
        />
        <RelatedPosts posts={relatedPosts} currentSlug={slug} />
      </BlogLayout>
      <FloatingWhatsApp />
    </>
  );
}
