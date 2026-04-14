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

function BankLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  return (
    /*
     * Every logo lives in an identical 128 × 48 px box.
     * The image is rendered at exactly those dimensions with object-contain,
     * so wide logos (SBI) and square icons (Jio) all occupy the same area.
     */
    <div className="w-32 h-12 flex items-center justify-center p-1.5">
      {failed ? (
        <span className="text-[10px] font-semibold text-gray-500 text-center leading-tight">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logos.hunter.io/${domain}`}
          alt={name}
          title={name}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function BankLogosSection() {
  return (
    <section id="banks" className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            Our Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A]">
            Compare Loans from 150+ Banks
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            We partner with all major banks and NBFCs in India
          </p>
        </div>

        {/* 5 per row on desktop, 3 on mobile — uniform cells */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 justify-items-center">
          {banks.map((bank) => (
            <BankLogo key={bank.name} name={bank.name} domain={bank.domain} />
          ))}
        </div>

        <p className="text-center text-gray-300 text-xs mt-8">
          + many more · All logos are property of their respective owners.
        </p>
      </div>
    </section>
  );
}
