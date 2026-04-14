"use client";

import { useState } from "react";

const banks = [
  { name: "Aadhar Housing Finance", domain: "aadharhousing.com" },
  { name: "Agrim Housing Finance",  domain: "agrimhfc.com" },
  { name: "Bajaj Housing Finance",  domain: "bajajhousingfinance.in" },
  { name: "Bank of India",          domain: "bankofindia.bank.in" },
  { name: "Bank of Baroda",         domain: "bankofbaroda.bank.in" },
];

function BankLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center justify-center w-[140px] h-[52px]">
      {failed ? (
        <span className="text-[11px] font-semibold text-gray-500 text-center leading-tight px-2">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logos.hunter.io/${domain}`}
          alt={name}
          title={name}
          className="max-h-[36px] max-w-[120px] w-auto h-auto object-contain"
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

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
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
