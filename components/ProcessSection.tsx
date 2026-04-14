import { ClipboardList, GitCompareArrows, Home, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Apply Online",
    description:
      "Fill our simple 2-minute form with your basic details. No documents needed at this stage.",
    color: "bg-[#1E3A8A]",
  },
  {
    number: "02",
    icon: GitCompareArrows,
    title: "Compare & Choose",
    description:
      "Our algorithm fetches live rates from 150+ banks. Your loan expert calls you with the best options.",
    color: "bg-[#22C55E]",
  },
  {
    number: "03",
    icon: Home,
    title: "Get Your Loan",
    description:
      "Submit documents digitally. We handle the rest. Loan disbursed in 3–7 working days.",
    color: "bg-[#1E3A8A]",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
            Get Your Home Loan in 3 Easy Steps
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            No complicated paperwork. No bank visits. Just a seamless,
            end-to-end digital experience.
          </p>
        </div>

        <div className="relative">
          {/* Connector line – desktop */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#1E3A8A] via-[#22C55E] to-[#1E3A8A] z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div
                  className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-5 relative`}
                >
                  <step.icon size={24} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-black text-[#1E3A8A]">
                    {idx + 1}
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow">
                  <div className="text-4xl font-black text-gray-100 mb-1">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-4">
                    <ArrowRight
                      size={20}
                      className="text-[#22C55E] rotate-90"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-green-200 hover:shadow-green-300"
          >
            Start Your Application
            <ArrowRight size={18} />
          </a>
          <p className="text-gray-400 text-xs mt-3">
            Free · No hidden charges · 2-min application
          </p>
        </div>
      </div>
    </section>
  );
}
