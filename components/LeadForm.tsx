"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface FormData {
  name: string;
  phone: string;
  email: string;
  loan_amount: string;
  income: string;
  city: string;
}

const initialData: FormData = {
  name: "",
  phone: "",
  email: "",
  loan_amount: "",
  income: "",
  city: "",
};

const loanAmounts = [
  "Under ₹20 Lakhs",
  "₹20–50 Lakhs",
  "₹50 Lakhs–1 Crore",
  "₹1–2 Crore",
  "Above ₹2 Crore",
];

const incomeRanges = [
  "Under ₹25,000/month",
  "₹25,000–50,000/month",
  "₹50,000–1 Lakh/month",
  "₹1–2 Lakhs/month",
  "Above ₹2 Lakhs/month",
];

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Other",
];

function generateWhatsAppMessage(data: FormData): string {
  return `Hi BestLoans team,

I just applied for a home loan. Please assist me.

Details:
Name: ${data.name}
Phone: ${data.phone}
Loan Amount: ${data.loan_amount || "Not specified"}
Income: ${data.income || "Not specified"}
City: ${data.city || "Not specified"}

Please get in touch with me at your earliest convenience. Thank you!`;
}

interface Props {
  compact?: boolean;
}

export default function LeadForm({ compact = false }: Props) {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Fire-and-forget — don't block on the API response
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "lead_form_submit", {
        event_category: "Lead",
        event_label: form.city,
      });
    }

    const msg = generateWhatsAppMessage(form);
    window.open(
      `https://wa.me/919500109337?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setLoading(false);
    setSubmitted(true);
  }

  function openWhatsApp() {
    const msg = generateWhatsAppMessage(form);
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919500109337?text=${encoded}`, "_blank", "noopener,noreferrer");
  }

  // Success state
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center space-y-5 animate-fade-in">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-[#22C55E]" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">
            Opening WhatsApp...
          </h3>
          <p className="text-gray-600 text-sm">
            Your details are being sent to our loan expert on WhatsApp.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            If WhatsApp didn&apos;t open automatically, tap the button below.
          </p>
        </div>
        <button
          onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold py-3.5 rounded-xl transition-all animate-pulse-green"
        >
          <WhatsAppIcon size={22} />
          Open WhatsApp
        </button>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-gray-400 hover:text-gray-600 underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="lead-form"
      className={`bg-white rounded-2xl shadow-xl ${
        compact ? "p-5" : "p-6 md:p-8"
      } space-y-4`}
    >
      {!compact && (
        <div className="mb-2">
          <h3 className="text-lg font-bold text-[#1E3A8A]">
            Check Your Eligibility
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">Free • No spam • Instant response</p>
        </div>
      )}

      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 transition-all ${
            errors.name ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <div className="flex">
          <span className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-500">
            +91
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Mobile Number *"
            maxLength={10}
            className={`flex-1 border rounded-r-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 transition-all ${
              errors.phone ? "border-red-400" : "border-gray-200"
            }`}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address (optional)"
          className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 transition-all ${
            errors.email ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Loan Amount */}
      <div>
        <select
          name="loan_amount"
          value={form.loan_amount}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 transition-all text-gray-700 bg-white"
        >
          <option value="">Loan Amount Required</option>
          {loanAmounts.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Monthly Income */}
      <div>
        <select
          name="income"
          value={form.income}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 transition-all text-gray-700 bg-white"
        >
          <option value="">Monthly Income</option>
          {incomeRanges.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 transition-all text-gray-700 bg-white"
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] disabled:bg-green-300 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-green-200 hover:shadow-green-300"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Checking Eligibility...
          </>
        ) : (
          "Check Eligibility – Free"
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        🔒 Your data is safe. No spam, ever.
      </p>
    </form>
  );
}
