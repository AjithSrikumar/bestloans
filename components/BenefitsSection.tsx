import {
  GitCompareArrows,
  TrendingDown,
  Zap,
  FileCheck,
  HeadphonesIcon,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: GitCompareArrows,
    title: "Compare 50+ Banks",
    description:
      "See side-by-side comparison of interest rates, EMIs, and fees from all major banks and NBFCs in India.",
    color: "bg-blue-50 text-[#1E3A8A]",
  },
  {
    icon: TrendingDown,
    title: "Lowest Interest Rates",
    description:
      "Get exclusive bank-beating rates starting from 7.10% p.a. Our volume ensures you always get the best deal.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Zap,
    title: "Fast Approval",
    description:
      "Get in-principle approval within 48 hours. Full loan sanction within 3-7 days — industry-fastest.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: FileCheck,
    title: "Minimal Paperwork",
    description:
      "Upload documents digitally. No trips to the bank. Our team handles all the back-and-forth for you.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Loan Expert",
    description:
      "A personal loan manager guides you from application to disbursement. Available 7 days a week.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Zero Hidden Charges",
    description:
      "Our service is 100% free for you. No processing fee markups. Transparent costs, always.",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            Why BestLoans?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
            The Smarter Way to Get a Home Loan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We&apos;ve helped 10,000+ families get the home of their dreams.
            Here&apos;s what makes us different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group relative bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#22C55E]/30 hover:shadow-lg transition-all cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-[#1E3A8A] text-base mb-2">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#22C55E]/10 group-hover:bg-[#22C55E]/20 rounded-full flex items-center justify-center transition-colors">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
