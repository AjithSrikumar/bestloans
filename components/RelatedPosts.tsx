import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";
import { ArrowRight, Clock } from "lucide-react";

interface Props {
  posts: BlogMeta[];
  currentSlug: string;
}

export default function RelatedPosts({ posts, currentSlug }: Props) {
  const related = posts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <aside className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-bold text-[#1E3A8A] mb-5">
        Related Articles
      </h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#22C55E]/30 hover:shadow-md transition-all"
          >
            {post.tags[0] && (
              <span className="text-xs font-medium text-[#22C55E] bg-green-50 px-2 py-0.5 rounded-full self-start">
                {post.tags[0]}
              </span>
            )}
            <h4 className="text-sm font-semibold text-[#1E3A8A] group-hover:text-[#22C55E] transition-colors line-clamp-2 leading-snug">
              {post.title}
            </h4>
            <div className="flex items-center justify-between mt-auto">
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={11} />
                {post.readingTime}
              </span>
              <ArrowRight
                size={13}
                className="text-gray-300 group-hover:text-[#22C55E] transition-colors"
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
