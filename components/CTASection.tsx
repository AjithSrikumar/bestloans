import MultiStepForm from "./MultiStepForm";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "100% Free Service",
  "No Credit Score Impact",
  "Compare 50+ Banks",
  "Expert Guidance",
  "Fast Disbursement",
  "Zero Hidden Fees",
];

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #1e40af 50%, #1d4ed8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Your Dream Home is{" "}
              <span className="text-[#22C55E]">One Step Away</span>
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              Join 10,000+ Indians who got their best home loan deal through
              BestLoans. Our experts negotiate on your behalf — at zero cost.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle2 size={16} className="text-[#22C55E] shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="text-blue-300 text-sm">
                📞 Call us: <strong className="text-white">+91 95001 09337</strong>
              </p>
              <p className="text-blue-300 text-sm mt-1">
                Available 9 AM – 9 PM, Monday to Saturday
              </p>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </section>
  );
}
