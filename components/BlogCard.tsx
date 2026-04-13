import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  tags,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#22C55E]/30 transition-all h-full flex flex-col">
        {/* Color header */}
        <div className="h-2 bg-gradient-to-r from-[#1E3A8A] to-[#22C55E]" />

        <div className="p-6 flex flex-col flex-1">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs bg-blue-50 text-[#1E3A8A] px-2 py-0.5 rounded-full font-medium"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2 className="font-bold text-[#1E3A8A] text-lg leading-snug mb-2 group-hover:text-[#22C55E] transition-colors line-clamp-2">
            {title}
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
            {description}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {readingTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
