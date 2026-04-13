import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepForm from "@/components/MultiStepForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Loan Interest Rates 2026 – Compare All Banks",
  description:
    "Updated home loan interest rates from all major banks in India for 2026. Compare SBI, HDFC, ICICI, Axis, Kotak and get the lowest EMI. Free comparison tool.",
};

const rates = [
  { bank: "SBI", min: "8.50", max: "9.85", processing: "Nil–0.35%", special: "Best for govt employees" },
  { bank: "HDFC Bank", min: "8.75", max: "9.65", processing: "0.50%", special: "Fastest digital process" },
  { bank: "ICICI Bank", min: "8.75", max: "9.80", processing: "0.50%", special: "Good for NRI" },
  { bank: "Axis Bank", min: "8.75", max: "9.90", processing: "1%", special: "Flexible tenure" },
  { bank: "Kotak Mahindra", min: "8.75", max: "9.60", processing: "0.50%", special: "Low rates for high income" },
  { bank: "PNB Housing", min: "8.99", max: "11.50", processing: "1%", special: "High LTV ratio" },
  { bank: "Bank of Baroda", min: "8.60", max: "10.65", processing: "0.25%", special: "PSU bank reliability" },
  { bank: "Canara Bank", min: "8.65", max: "10.65", processing: "0.50%", special: "Budget borrowers" },
  { bank: "LIC HFL", min: "8.50", max: "10.75", processing: "0.25%", special: "Best for salaried" },
  { bank: "IDFC First Bank", min: "8.85", max: "10.50", processing: "0.50%", special: "Excellent customer service" },
  { bank: "Bajaj Finserv", min: "8.70", max: "14.00", processing: "0.50%", special: "Self-employed friendly" },
  { bank: "Tata Capital", min: "8.75", max: "10.50", processing: "0.50%", special: "Top-up loans" },
];

export default function RatesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F0FDF4] py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              Updated April 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E3A8A] mb-4">
              Home Loan Interest Rates 2026
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Compare the latest home loan rates from all major banks. Rates
              updated regularly. Use our free eligibility checker to get
              personalised offers.
            </p>
          </div>
        </div>

        {/* Rates Table */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Bank-wise Home Loan Rates (2026)
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1E3A8A] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Bank</th>
                    <th className="text-left px-5 py-4 font-semibold">Min Rate</th>
                    <th className="text-left px-5 py-4 font-semibold">Max Rate</th>
                    <th className="text-left px-5 py-4 font-semibold hidden md:table-cell">Processing Fee</th>
                    <th className="text-left px-5 py-4 font-semibold hidden lg:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((r, i) => (
                    <tr
                      key={r.bank}
                      className={`border-t border-gray-100 hover:bg-blue-50/30 transition-colors ${
                        i === 0 ? "bg-green-50" : ""
                      }`}
                    >
                      <td className="px-5 py-3.5 font-semibold text-[#1E3A8A]">
                        {r.bank}
                        {i === 0 && (
                          <span className="ml-2 text-xs bg-[#22C55E] text-white px-1.5 py-0.5 rounded">
                            Lowest
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-[#22C55E] font-bold">
                        {r.min}%
                      </td>
                      <td className="px-5 py-3.5 text-gray-600">{r.max}%</td>
                      <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">
                        {r.processing}
                      </td>
                      <td className="px-5 py-3.5 text-gray-500 text-xs hidden lg:table-cell">
                        {r.special}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Rates are indicative and vary by borrower profile, credit score,
              and loan amount. Last updated: April 2026.
            </p>
          </div>
        </section>

        {/* EMI Calculator guide */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Sample EMI Calculations (2026)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { loan: "₹30 Lakhs", rate: "8.50%", tenure: "20 yrs", emi: "₹26,036" },
                { loan: "₹50 Lakhs", rate: "8.50%", tenure: "20 yrs", emi: "₹43,391" },
                { loan: "₹75 Lakhs", rate: "8.75%", tenure: "20 yrs", emi: "₹66,303" },
                { loan: "₹1 Crore", rate: "8.75%", tenure: "20 yrs", emi: "₹88,404" },
                { loan: "₹1.5 Crore", rate: "9.00%", tenure: "25 yrs", emi: "₹1,25,917" },
                { loan: "₹2 Crore", rate: "9.00%", tenure: "30 yrs", emi: "₹1,60,922" },
              ].map((e) => (
                <div
                  key={e.loan}
                  className="bg-white rounded-xl border border-gray-200 p-5"
                >
                  <div className="text-lg font-extrabold text-[#1E3A8A] mb-1">
                    {e.loan}
                  </div>
                  <div className="text-2xl font-black text-[#22C55E]">
                    {e.emi}/mo
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    @ {e.rate} · {e.tenure} tenure
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section className="py-16 bg-[#1E3A8A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Get Your Personalised Rate
                </h2>
                <p className="text-blue-200 mb-4">
                  Table rates are indicative. Your actual rate depends on your
                  income, credit score, and loan amount. Let us find the exact
                  best rate for your profile — free.
                </p>
                <ul className="space-y-2 text-sm text-blue-100">
                  {[
                    "Zero impact on CIBIL score",
                    "Compare 25+ banks simultaneously",
                    "Expert negotiation on your behalf",
                    "Result in 30 minutes",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="text-[#22C55E]">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <MultiStepForm />
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-lg font-bold text-[#1E3A8A] mb-4">
              Related Resources
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Best Home Loan for Salaried", href: "/best-home-loan-for-salaried" },
                { label: "Home Loans in Mumbai", href: "/home-loan-in-mumbai" },
                { label: "Home Loans in Bangalore", href: "/home-loan-in-bangalore" },
                { label: "Blog: SBI vs HDFC", href: "/blog/compare-sbi-hdfc-home-loan" },
                { label: "Blog: Improve CIBIL Score", href: "/blog/improve-cibil-score-home-loan" },
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
