"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the minimum salary required for a home loan?",
    a: "Most banks require a minimum monthly income of ₹25,000 for salaried individuals and ₹2 lakhs annual income for self-employed applicants. BestLoans helps you find banks that best match your income profile.",
  },
  {
    q: "What is the current home loan interest rate in India?",
    a: "Home loan interest rates in India currently range from 8.5% to 10.5% p.a. depending on the bank, loan amount, credit score, and property type. BestLoans helps you get the lowest rate available for your profile.",
  },
  {
    q: "How long does home loan approval take?",
    a: "With BestLoans, you can get an in-principle approval within 30 minutes. Full sanction letter takes 3–5 business days, and disbursement happens within 7–10 business days after all documents are submitted.",
  },
  {
    q: "What documents are needed for a home loan?",
    a: "Basic documents include: KYC (Aadhaar, PAN), income proof (salary slips / ITR), bank statements (last 6 months), and property documents. Our team will give you a customized checklist based on your profile.",
  },
  {
    q: "Can I get a home loan with a CIBIL score below 700?",
    a: "Most banks require a CIBIL score of 700+. However, some NBFCs and cooperative banks offer home loans for scores as low as 650. BestLoans matches you with the right lender for your credit profile.",
  },
  {
    q: "Is BestLoans service free for customers?",
    a: "Yes! Our loan comparison and consultation service is completely free for customers. We earn a referral fee from the bank only after your loan is successfully disbursed. No hidden charges, ever.",
  },
  {
    q: "Can I transfer my existing home loan to a lower rate?",
    a: "Yes. Balance transfer (BT) is a great way to reduce your EMI. If your current rate is above 9.5%, you could save significantly. BestLoans will calculate your exact savings and handle the transfer process.",
  },
  {
    q: "What is the maximum loan amount I can get?",
    a: "Banks typically offer up to 75–90% of the property value (LTV ratio). The actual amount also depends on your income, existing liabilities, and repayment capacity. Use our eligibility checker to know your exact limit.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about home loans in India.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === i
                  ? "border-[#22C55E]/40 shadow-sm"
                  : "border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className={`font-semibold text-sm ${
                    open === i ? "text-[#1E3A8A]" : "text-gray-800"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#22C55E] transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-[#F0FDF4] border border-green-200 rounded-2xl p-6">
          <p className="text-[#1E3A8A] font-semibold mb-2">
            Still have questions?
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Our loan experts are available 7 days a week, 9 AM – 9 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#1e40af] transition-colors"
            >
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#1fb855] transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
