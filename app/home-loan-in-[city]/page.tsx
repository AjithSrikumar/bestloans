import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, cityBySlug } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepForm from "@/components/MultiStepForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  CheckCircle2,
  TrendingDown,
  Zap,
  Phone,
} from "lucide-react";

interface Params {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cityBySlug[slug];
  if (!city) return {};

  return {
    title: `Best Home Loan in ${city.name} 2026 – Compare ${city.topBanks.length}+ Banks`,
    description: `Get the lowest home loan interest rates in ${city.name}, ${city.state}. Compare ${city.topBanks.join(", ")} and more. Instant eligibility check. Free service.`,
    openGraph: {
      title: `Best Home Loan in ${city.name} 2026`,
      description: city.description,
    },
  };
}

export default async function CityLoanPage({ params }: Params) {
  const { city: slug } = await params;
  const city = cityBySlug[slug];
  if (!city) notFound();

  const faqs = [
    {
      q: `What is the minimum income required for a home loan in ${city.name}?`,
      a: `Most banks require a minimum income of ₹25,000–30,000/month for salaried applicants in ${city.name}. Self-employed individuals need at least ₹2–3 lakhs annual income.`,
    },
    {
      q: `Which bank offers the best home loan rate in ${city.name}?`,
      a: `${city.topBanks[0]} and ${city.topBanks[1]} are among the top lenders in ${city.name}. BestLoans compares real-time offers from all banks to get you the lowest rate.`,
    },
    {
      q: `What is the average property price in ${city.name}?`,
      a: `Property prices in ${city.name}, ${city.state} typically range from ${city.avgPropertyPrice}. Location, property type, and age of construction influence the price significantly.`,
    },
    {
      q: `How long does home loan approval take in ${city.name}?`,
      a: `With BestLoans, you can get in-principle approval within 30 minutes. Final sanction typically takes 3–5 business days and disbursement within 7–10 days.`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section
          className="py-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, #EEF2FF 0%, #F0FDF4 50%, #F8FAFC 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                  {city.name}, {city.state}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E3A8A] leading-tight">
                  Best Home Loan in{" "}
                  <span className="text-[#22C55E]">{city.name}</span> 2026
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {city.description} Compare rates from{" "}
                  <strong>{city.topBanks.join(", ")}</strong> and get the
                  lowest EMI today.
                </p>

                {/* City highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {city.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                    >
                      <CheckCircle2 size={15} className="text-[#22C55E] mt-0.5 shrink-0" />
                      <span className="text-xs text-gray-700 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="flex gap-6">
                  <div>
                    <div className="text-2xl font-extrabold text-[#1E3A8A]">
                      {city.avgPropertyPrice}
                    </div>
                    <div className="text-xs text-gray-500">Avg Property Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#22C55E]">8.5%</div>
                    <div className="text-xs text-gray-500">Rates From (p.a.)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#1E3A8A]">
                      {city.topBanks.length}+
                    </div>
                    <div className="text-xs text-gray-500">Partner Banks</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <MultiStepForm />
              </div>
            </div>
          </div>
        </section>

        {/* Partner Banks */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-4">
              Top Banks for Home Loans in {city.name}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city.topBanks.map((bank) => (
                <span
                  key={bank}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-[#1E3A8A]"
                >
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why BestLoans */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A] text-center mb-10">
              Why Get Your {city.name} Home Loan Through BestLoans?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingDown,
                  title: "Lowest Rates Guaranteed",
                  desc: `We negotiate exclusively with banks operating in ${city.name} to get you rates unavailable elsewhere.`,
                },
                {
                  icon: Zap,
                  title: "Same-Day Approval",
                  desc: `Our local bank network in ${city.name} ensures faster processing and in-principle approval within hours.`,
                },
                {
                  icon: Phone,
                  title: "Local Expert Support",
                  desc: `Our ${city.name}-based loan managers understand the local real estate and can guide you end-to-end.`,
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#1E3A8A]" />
                  </div>
                  <h3 className="font-bold text-[#1E3A8A] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-[#1E3A8A] text-center mb-8">
              Home Loan FAQ – {city.name}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border border-gray-200 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-[#1E3A8A] text-sm mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#1E3A8A] py-12 px-4 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Get Your Home Loan in {city.name}?
          </h2>
          <p className="text-blue-200 mb-6 text-sm">
            Free consultation · Compare {city.topBanks.length}+ banks · Get best
            rates in 30 minutes
          </p>
          <a
            href="#lead-form"
            className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Check Eligibility – Free
          </a>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
