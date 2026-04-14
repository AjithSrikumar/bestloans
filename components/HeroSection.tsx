import MultiStepForm from "./MultiStepForm";
import { Shield, Clock, Star, TrendingDown } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Most Trusted" },
  { icon: Star, label: "4.8★ Rated" },
  { icon: TrendingDown, label: "Lowest Rates" },
  { icon: Clock, label: "48hr Processing" },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "150+", label: "Partner Banks" },
  { value: "₹200 Cr+", label: "Loans Disbursed" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #EEF2FF 0%, #F0FDF4 40%, #F8FAFC 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-100/60 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Copy */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-[#16a34a] text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              India&apos;s #1 Home Loan Comparison Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#1E3A8A] leading-tight tracking-tight">
              Get Home Loan{" "}
              <span className="text-[#22C55E] relative">
                Starting 7.10%*
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                >
                  <path
                    d="M0 4C50 1 150 5 200 3"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Get a Dedicated Expert Manager who compares{" "}
              <strong className="text-[#1E3A8A]">150+ Banks &amp; NBFCs</strong>{" "}
              for you — saving hours of research and paperwork.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
                >
                  <Icon size={13} className="text-[#22C55E]" />
                  {label}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#1E3A8A]">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Lead Form */}
          <div className="animate-fade-in-up delay-200 lg:ml-8">
            <MultiStepForm />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
