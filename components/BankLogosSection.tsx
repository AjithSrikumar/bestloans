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
  { name: "Indiabulls",      domain: "indiabullshomeloans.com" },
  { name: "IDFC First",      domain: "idfcfirstbank.com" },
  { name: "Bank of India",   domain: "bankofindia.co.in" },
  { name: "Union Bank",      domain: "unionbankofindia.co.in" },
];

function BankCard({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center justify-center bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-3 h-16 transition-all hover:shadow-sm">
      {failed ? (
        <span className="font-bold text-[11px] text-center leading-tight text-gray-500">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          className="max-h-8 max-w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function BankLogosSection() {
  return (
    <section id="banks" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
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

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {banks.map((bank) => (
            <BankCard key={bank.name} name={bank.name} domain={bank.domain} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          + many more. All logos are property of their respective owners.
        </p>
      </div>
    </section>
  );
}
