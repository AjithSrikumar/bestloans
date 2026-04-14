"use client";

import { useState } from "react";

const banks = [
  { name: "LIC Housing Finance",    domain: "lichousing.com" },
  { name: "Aadhar Housing Finance", domain: "aadharhousing.com" },
  { name: "Bajaj Housing Finance",  domain: "bajajhousingfinance.in" },
  { name: "Aavas Financiers",       domain: "aavas.in" },
  { name: "Kotak Bank",             domain: "kotak.bank.in" },
  { name: "ICICI Bank",             domain: "icici.bank.in" },
  { name: "Jio Credit",             domain: "jiocredit.in" },
  { name: "Vastu HFC",              domain: "vastuhfc.com" },
  { name: "Sammaan Capital",        domain: "sammaancapital.com" },
  { name: "PNB Housing Finance",    domain: "pnbhousing.com" },
  { name: "Satin Housing Finance",  domain: "satinhousingfinance.com" },
  { name: "SBI",                    domain: "sbi.bank.in" },
  { name: "Equitas Bank",           domain: "equitas.bank.in" },
  { name: "Indian Bank",            domain: "indianbank.bank.in" },
  { name: "GIC Housing Finance",    domain: "gichfindia.com" },
  { name: "Bank of Baroda",         domain: "bankofbaroda.bank.in" },
];

function BankLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center justify-center w-[130px] h-[48px]">
      {failed ? (
        <span className="text-[10px] font-semibold text-gray-500 text-center leading-tight px-1">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logos.hunter.io/${domain}`}
          alt={name}
          title={name}
          className="max-h-[34px] max-w-[110px] w-auto h-auto object-contain"
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

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-5 sm:gap-x-8 sm:gap-y-7">
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
