import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepForm from "@/components/MultiStepForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { CheckCircle2, TrendingDown, FileCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Home Loan for Salaried Employees 2026 – Compare Top Banks",
  description:
    "Find the best home loan for salaried employees in India. Compare interest rates, eligibility, and benefits from top banks. Special offers for corporate salary accounts.",
};

const banks = [
  { name: "SBI", rate: "8.50%", note: "Best for PSU employees" },
  { name: "HDFC Bank", rate: "8.75%", note: "Fastest digital process" },
  { name: "ICICI Bank", rate: "8.75%", note: "Good balance of rate + speed" },
  { name: "LIC Housing", rate: "8.50%", note: "Best for life insurance holders" },
  { name: "Kotak Mahindra", rate: "8.75%", note: "High income applicants" },
  { name: "Axis Bank", rate: "8.75%", note: "Corporate salary advantage" },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower Rates for Salaried",
    desc: "Banks offer 0.25–0.5% lower rates to salaried employees vs self-employed due to stable income.",
  },
  {
    icon: CheckCircle2,
    title: "Higher Loan Eligibility",
    desc: "Salaried income is predictable — banks extend up to 60x your monthly salary as loan eligibility.",
  },
  {
    icon: FileCheck,
    title: "Simpler Documentation",
    desc: "Salary slips, Form 16, and bank statements are all you need. No complex business proof required.",
  },
  {
    icon: Clock,
    title: "Faster Approval",
    desc: "Salaried profiles are processed faster. In-principle approval within 4–8 hours for eligible profiles.",
  },
];

export default function SalariedLoanPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section
          className="py-16 md:py-20"
          style={{
            background: "linear-gradient(135deg, #EEF2FF 0%, #F0FDF4 50%, #F8FAFC 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-semibold px-3 py-1.5 rounded-full">
                  💼 For Salaried Professionals
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E3A8A] leading-tight">
                  Best Home Loan for{" "}
                  <span className="text-[#22C55E]">Salaried Employees</span>{" "}
                  2026
                </h1>
                <p className="text-gray-600 text-lg">
                  As a salaried employee, you get preferential rates from all major
                  banks. BestLoans finds you the best deal from{" "}
                  <strong>150+ banks</strong> — instantly, free.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {["Rates from 7.10% p.a.", "Up to 30-year tenure", "90% LTV financing", "Zero prepayment charges"].map(
                    (b) => (
                      <div
                        key={b}
                        className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-gray-100 shadow-sm text-sm font-medium text-[#1E3A8A]"
                      >
                        <CheckCircle2 size={14} className="text-[#22C55E] shrink-0" />
                        {b}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <MultiStepForm />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1E3A8A] text-center mb-8">
              Why Salaried Employees Get Better Home Loans
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={18} className="text-[#1E3A8A]" />
                  </div>
                  <h3 className="font-bold text-[#1E3A8A] text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bank rates */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Best Rates for Salaried (2026)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {banks.map((b) => (
                <div
                  key={b.name}
                  className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-[#22C55E]/40 transition-colors"
                >
                  <div className="font-bold text-[#1E3A8A] text-base">{b.name}</div>
                  <div className="text-2xl font-black text-[#22C55E] my-1">{b.rate}</div>
                  <div className="text-xs text-gray-400">{b.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents needed */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Documents Required for Salaried Applicants
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { cat: "Identity Proof", docs: ["PAN Card (mandatory)", "Aadhaar Card", "Passport / Driving License"] },
                { cat: "Income Proof", docs: ["Last 3 months salary slips", "Form 16 (2 years)", "Appointment letter"] },
                { cat: "Bank Statements", docs: ["Last 6 months statements", "Salary credit account preferred"] },
                { cat: "Property Documents", docs: ["Sale agreement", "Property map / plan", "NOC from builder/society"] },
              ].map(({ cat, docs }) => (
                <div key={cat} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-[#1E3A8A] mb-3">{cat}</h3>
                  <ul className="space-y-1.5">
                    {docs.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-base font-bold text-[#1E3A8A] mb-4">
              Also Read
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Home Loan Interest Rates 2026", href: "/home-loan-interest-rates-2026" },
                { label: "Home Loans in Bangalore", href: "/home-loan-in-bangalore" },
                { label: "Home Loans in Mumbai", href: "/home-loan-in-mumbai" },
                { label: "How to Improve CIBIL Score", href: "/blog/improve-cibil-score-home-loan" },
                { label: "SBI vs HDFC Comparison", href: "/blog/compare-sbi-hdfc-home-loan" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm border border-[#22C55E]/40 text-[#1E3A8A] hover:bg-green-50 px-4 py-2 rounded-full transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
