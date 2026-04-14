"use client";

import { useState } from "react";

const banks = [
  { name: "SBI",             domain: "sbi.co.in" },
  { name: "HDFC Bank",       domain: "hdfcbank.com" },
  { name: "ICICI Bank",      domain: "icicibank.com" },
  { name: "Axis Bank",       domain: "axisbank.com" },
  { name: "Kotak",           domain: "kotak.com" },
  { name: "PNB",             domain: "pnbindia.in" },
  { name: "Bank of Baroda",  domain: "bankofbaroda.in" },
  { name: "Canara Bank",     domain: "canarabank.in" },
  { name: "LIC HFL",         domain: "lichousing.com" },
  { name: "Bajaj Finance",   domain: "bajajfinserv.in" },
  { name: "Tata Capital",    domain: "tatacapital.com" },
  { name: "Aavas",           domain: "aavas.in" },
  { name: "Sammaan Capital", domain: "sammaancapital.com" },
  { name: "IDFC First",      domain: "idfcfirstbank.com" },
  { name: "Bank of India",   domain: "bankofindia.co.in" },
  { name: "Union Bank",      domain: "unionbankofindia.co.in" },
];

function BankLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  return (
    /* Fixed-size cell — every logo lives in the same 120×44 px box */
    <div className="flex items-center justify-center w-[120px] h-[44px]">
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
          className="max-h-[32px] max-w-[100px] w-auto h-auto object-contain"
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

        {/* Centered logo cloud — wraps into equal rows on all screen sizes */}
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6">
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
