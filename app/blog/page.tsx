import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Loan Blog – Tips, Rates & Guides",
  description:
    "Expert articles on home loans, interest rates, eligibility tips, and bank comparisons. Your go-to resource for smart borrowing.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F0FDF4] py-14 px-4 text-center">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            Resource Center
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E3A8A] mb-4">
            Home Loan Blog
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Expert guides, tips, and insights to help you get the best home loan
            in India.
          </p>
        </div>

        {/* Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Blog posts coming soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-[#1E3A8A] text-white py-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Apply for a Home Loan?
          </h2>
          <p className="text-blue-200 mb-5 text-sm">
            Compare 150+ banks and get the lowest rate in minutes.
          </p>
          <Link
            href="/#lead-form"
            className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Check Eligibility – Free
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
