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
     * The cell is a fixed-height flex slot for alignment only.
     * The <img> renders at its NATURAL size, capped at max-h/max-w —
     * never upscaled — so low-res logos stay crisp instead of blurry.
     */
    <div className="flex items-center justify-center h-10 w-full">
      {failed ? (
        <span className="text-[10px] font-semibold text-gray-400 text-center leading-tight px-1">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logos.hunter.io/${domain}`}
          alt={name}
          title={name}
          style={{ maxHeight: "36px", maxWidth: "100px", width: "auto", height: "auto" }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function BankLogosSection() {
  return (
    <section id="banks" className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-8 items-center justify-items-center">
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
