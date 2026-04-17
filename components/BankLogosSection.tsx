"use client";

import { useState } from "react";

const banks = [
  { name: "LIC Housing Finance",    domain: "lichousing.com" },
  { name: "Aadhar Housing Finance", domain: "aadharhousing.com" },
  { name: "Bajaj Housing Finance",  domain: "bajajhousingfinance.in" },
  { name: "Aavas Financiers",       domain: "aavas.in" },
  { name: "ICICI Bank",             domain: "icicibank.com" },
  { name: "Jio Credit",             domain: "jiocredit.in" },
  { name: "Vastu HFC",              domain: "vastuhfc.com" },
  { name: "Sammaan Capital",        domain: "sammaancapital.com" },
  { name: "PNB Housing Finance",    domain: "pnbhousing.com" },
  { name: "Satin Housing Finance",  domain: "satinhousingfinance.com" },
  { name: "SBI",                    domain: "sbi.co.in" },
  { name: "Equitas Bank",           domain: "equitasbank.com" },
  { name: "Indian Bank",            domain: "indianbank.in" },
  { name: "GIC Housing Finance",    domain: "gichfindia.com" },
  { name: "Bank of Baroda",         domain: "bankofbaroda.in" },
];

function LogoCard({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group shrink-0 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm mx-3 px-6 h-16 min-w-[120px] hover:shadow-md hover:border-gray-200 hover:scale-[1.05] transition-all duration-300 cursor-default">
      {failed ? (
        <span className="text-[11px] font-semibold text-gray-400 text-center leading-tight">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logos.hunter.io/${domain}`}
          alt={name}
          title={name}
          className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          style={{ maxHeight: "36px", maxWidth: "110px", width: "auto", height: "auto" }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function BankLogosSection() {
  return (
    <section id="banks" className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-100">
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-[#22C55E]" />
          <span className="text-[#22C55E] text-xs font-bold uppercase tracking-[0.18em]">
            Lending Partners
          </span>
          <span className="h-px w-8 bg-[#22C55E]" />
        </div>

        <h2 className="text-2xl sm:text-[2rem] font-extrabold text-[#1E3A8A] leading-tight">
          Compare rates from{" "}
          <span className="text-[#22C55E]">150+ Banks &amp; NBFCs</span>
        </h2>

        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          One application. Every major lender.{" "}
          <span className="text-[#1E3A8A] font-semibold">We negotiate the best rate for you.</span>
        </p>

        {/* Trust pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["RBI-regulated lenders", "Zero spam", "100% free comparison"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

        {/* Scrolling track — two copies for seamless loop */}
        <div className="marquee-track py-3">
          {[...banks, ...banks].map((bank, i) => (
            <LogoCard key={`${bank.name}-${i}`} name={bank.name} domain={bank.domain} />
          ))}
        </div>
      </div>

      {/* ── Footer note ── */}
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-400 font-medium">
          + 135 more banks &amp; NBFCs across India
        </p>
      </div>
    </section>
  );
}
