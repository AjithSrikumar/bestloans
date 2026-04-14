import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    text: "BestLoans saved me ₹3.2 lakhs in interest by comparing banks! The process was seamless — applied in 10 minutes and got approval in a day.",
    loan: "₹75 Lakhs Home Loan",
    initial: "P",
  },
  {
    name: "Rajesh Kumar",
    city: "Bangalore",
    rating: 5,
    text: "I was confused between SBI and HDFC. BestLoans showed me a clear comparison and even negotiated a better rate for me. Highly recommended!",
    loan: "₹55 Lakhs Home Loan",
    initial: "R",
  },
  {
    name: "Anita Mehta",
    city: "Delhi",
    rating: 5,
    text: "The WhatsApp support was incredible. Got my doubts cleared at 11 PM! Loan was disbursed within 7 days of application.",
    loan: "₹1.2 Crore Home Loan",
    initial: "A",
  },
  {
    name: "Vikram Nair",
    city: "Hyderabad",
    rating: 5,
    text: "As a first-time home buyer, I had no idea about the process. BestLoans experts held my hand through the entire journey. 10/10!",
    loan: "₹45 Lakhs Home Loan",
    initial: "V",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider mb-2">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
            Trusted by 10,000+ Happy Customers
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.8/5</span>
            <span className="text-gray-400 text-sm">
              based on 12,000+ reviews
            </span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <Quote size={24} className="text-[#22C55E] mb-3 opacity-60" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initial}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#1E3A8A] text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {t.city} · {t.loan}
                  </div>
                  <StarRating count={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counter strip */}
        <div className="mt-14 bg-[#1E3A8A] rounded-2xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: "10,000+", label: "Loans Processed" },
            { value: "₹200 Cr+", label: "Total Loan Volume" },
            { value: "150+", label: "Partner Banks" },
            { value: "4.8★", label: "Average Rating" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-[#22C55E]">
                {value}
              </div>
              <div className="text-blue-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
