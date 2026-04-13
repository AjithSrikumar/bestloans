import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface BlogLayoutProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  description,
  date,
  tags,
  readingTime,
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
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F0FDF4] py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#1E3A8A] hover:text-[#22C55E] transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs bg-[#1E3A8A] text-white px-2.5 py-1 rounded-full font-medium"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] leading-tight mb-3">
              {title}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              {description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
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

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-10">
          <article className="prose prose-blue prose-lg max-w-none prose-headings:text-[#1E3A8A] prose-a:text-[#22C55E] prose-strong:text-[#1E3A8A]">
            {children}
          </article>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Get Your Home Loan?
            </h3>
            <p className="text-blue-200 mb-5 text-sm">
              Compare 25+ banks and get the best rate in minutes.
            </p>
            <Link
              href="/#lead-form"
              className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-xl transition-colors"
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
