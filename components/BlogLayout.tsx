import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface BlogLayoutProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  coverImage?: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  description,
  date,
  tags,
  readingTime,
  coverImage,
  children,
}: BlogLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 bg-white">
        {/* Cover image */}
        {coverImage && (
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 via-[#1E3A8A]/20 to-transparent" />
          </div>
        )}

        {/* Header card */}
        <div
          className={`${
            coverImage
              ? "bg-white border-b border-gray-100"
              : "bg-gradient-to-br from-[#EEF2FF] to-[#F0FDF4] border-b border-blue-100"
          } py-10 px-4`}
        >
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[#1E3A8A] hover:text-[#22C55E] transition-colors mb-5 font-medium"
            >
              <ArrowLeft size={14} />
              All Articles
            </Link>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs bg-[#1E3A8A] text-white px-2.5 py-1 rounded-full font-medium"
                  >
                    <Tag size={9} />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-2xl md:text-4xl font-extrabold text-[#1E3A8A] leading-tight mb-3">
              {title}
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#22C55E]" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#22C55E]" />
                {readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <article className="space-y-0">{children}</article>

          {/* CTA */}
          <div className="mt-14 bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="text-2xl font-bold mb-2">
              Ready to Get Your Home Loan?
            </h3>
            <p className="text-blue-200 mb-5 text-sm">
              Compare 150+ banks and get the lowest rate in minutes — free.
            </p>
            <Link
              href="/#lead-form"
              className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-green-900/20"
            >
              Check Eligibility – Free
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
