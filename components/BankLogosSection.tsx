const banks = [
  { name: "SBI", color: "#1a56db" },
  { name: "HDFC", color: "#c0392b" },
  { name: "ICICI", color: "#e67e22" },
  { name: "Axis", color: "#8e44ad" },
  { name: "Kotak", color: "#e74c3c" },
  { name: "PNB", color: "#2563EB" },
  { name: "Bank of Baroda", color: "#f97316" },
  { name: "Canara", color: "#047857" },
  { name: "LIC HFL", color: "#1E3A8A" },
  { name: "LICHFL", color: "#1E3A8A" },
  { name: "Bajaj", color: "#3b82f6" },
  { name: "Tata Capital", color: "#0f172a" },
  { name: "Aavas", color: "#7c3aed" },
  { name: "Indiabulls", color: "#d97706" },
  { name: "IDFC First", color: "#0284c7" },
  { name: "Bank of India", color: "#1d4ed8" },
];

export default function BankLogosSection() {
  return (
    <section id="banks" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            Our Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A]">
            Compare Loans from 25+ Banks
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            We partner with all major banks and NBFCs in India
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl p-3 h-16 transition-all hover:shadow-sm group"
            >
              <div
                className="font-bold text-[11px] text-center leading-tight"
                style={{ color: bank.color }}
              >
                {bank.name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          + many more. All logos are property of their respective owners.
        </p>
      </div>
    </section>
  );
}
