"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Loader2,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Home,
  IndianRupee,
  User,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface FormData {
  loan_amount: string;
  city: string;
  employment_type: string;
  income: string;
  name: string;
  phone: string;
  email: string;
}

const initial: FormData = {
  loan_amount: "",
  city: "",
  employment_type: "",
  income: "",
  name: "",
  phone: "",
  email: "",
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
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Surat", "Jaipur",
  "Noida", "Gurgaon", "Kochi", "Chandigarh", "Lucknow", "Other",
];

// ── Lead scoring ────────────────────────────────────────────────────────────
function calculateScore(loan: string, income: string) {
  const loanMap: Record<string, number> = {
    "Under ₹20 Lakhs": 1, "₹20–50 Lakhs": 2,
    "₹50 Lakhs–1 Crore": 3, "₹1–2 Crore": 4, "Above ₹2 Crore": 5,
  };
  const incomeMap: Record<string, number> = {
    "Under ₹25,000/month": 1, "₹25,000–50,000/month": 2,
    "₹50,000–1 Lakh/month": 3, "₹1–2 Lakhs/month": 4, "Above ₹2 Lakhs/month": 5,
  };
  const score = (loanMap[loan] ?? 1) + (incomeMap[income] ?? 1);
  const intent_level = score <= 4 ? "low" : score <= 7 ? "medium" : "high";
  return { score, intent_level };
}

// ── WhatsApp message ─────────────────────────────────────────────────────────
function buildWhatsAppMessage(data: FormData): string {
  const loanFriendly = data.loan_amount || "a home loan";
  const incomeFriendly = data.income
    ? `My monthly income is ${data.income.replace("/month", "").toLowerCase()}.`
    : "";
  const cityPart = data.city ? `in ${data.city}` : "";
  const empPart = data.employment_type
    ? `I am ${data.employment_type.toLowerCase()}.`
    : "";

  return `Hi BestLoans team! 👋

I'm looking for a ${loanFriendly} home loan ${cityPart}.
${incomeFriendly} ${empPart}

My contact details:
👤 Name: ${data.name}
📞 Phone: +91 ${data.phone}${data.email ? `\n📧 Email: ${data.email}` : ""}

Could you please help me find the best deal? I'm available on this number. Thank you!`;
}

// ── Step config ───────────────────────────────────────────────────────────────
const steps = [
  { title: "Loan Details", subtitle: "What are you looking for?", icon: Home },
  { title: "Your Profile", subtitle: "Tell us about your income", icon: IndianRupee },
  { title: "Contact Info", subtitle: "How can we reach you?", icon: User },
];

interface Props { compact?: boolean; }

export default function MultiStepForm({ compact = false }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [source, setSource] = useState("direct");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setSource(
        params.get("utm_source") ||
        (document.referrer ? new URL(document.referrer).hostname : "direct")
      );
    }
    trackEvent("form_started");
  }, []);

  function set(name: keyof FormData, value: string) {
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  }

  // ── Validation per step ──────────────────────────────────────────────────
  function validateStep(): boolean {
    const e: Partial<FormData> = {};

    if (step === 0) {
      if (!form.loan_amount) e.loan_amount = "Please select a loan amount";
      if (!form.city) e.city = "Please select your city";
    }
    if (step === 1) {
      if (!form.employment_type) e.employment_type = "Please select employment type";
      if (!form.income) e.income = "Please select your income";
    }
    if (step === 2) {
      if (!form.name.trim()) e.name = "Name is required";
      if (!form.phone.trim()) {
        e.phone = "Phone is required";
      } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
        e.phone = "Enter a valid 10-digit Indian mobile number";
      }
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        e.email = "Enter a valid email address";
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    trackEvent("form_step_completed", { step: step + 1 });
    setStep((s) => Math.min(s + 1, 2));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
    setErrors({});
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    const { score, intent_level } = calculateScore(form.loan_amount, form.income);

    // Fire-and-forget — don't block on the API response
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, score, intent_level, source }),
    }).catch(() => {});

    trackEvent("form_submitted", {
      city: form.city,
      loan_amount: form.loan_amount,
      intent_level,
      score,
    });
    trackEvent("whatsapp_clicked", { source: "form_submit" });

    const msg = buildWhatsAppMessage(form);
    window.open(
      `https://wa.me/919500109337?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setLoading(false);
    setSubmitted(true);
  }

  function openWhatsApp() {
    trackEvent("whatsapp_clicked", { source: "form_success" });
    const msg = buildWhatsAppMessage(form);
    window.open(
      `https://wa.me/919500109337?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  // ── Success state ────────────────────────────────────────────────────────
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
          onClick={() => { setSubmitted(false); setStep(0); setForm(initial); }}
          className="text-xs text-gray-400 hover:text-gray-600 underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  const StepIcon = steps[step].icon;

  return (
    <form
      onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); next(); }}
      id="lead-form"
      className={`bg-white rounded-2xl shadow-xl ${compact ? "p-5" : "p-6 md:p-8"}`}
    >
      {/* Progress header */}
      <div className="mb-5">
        {/* Step dots */}
        <div className="flex items-center justify-between mb-3">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i < step
                    ? "bg-[#22C55E] text-white"
                    : i === step
                    ? "bg-[#1E3A8A] text-white ring-4 ring-[#1E3A8A]/20"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 transition-all ${
                    i < step ? "bg-[#22C55E]" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step label */}
        <div className="flex items-center gap-2">
          <StepIcon size={16} className="text-[#22C55E]" />
          <div>
            <p className="text-[#1E3A8A] font-bold text-sm leading-none">
              {steps[step].title}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">{steps[step].subtitle}</p>
          </div>
          <span className="ml-auto text-xs text-gray-400">
            Step {step + 1} of 3
          </span>
        </div>
      </div>

      {/* ── Step 1: Loan Details ── */}
      {step === 0 && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Loan Amount Required *
            </label>
            <div className="grid grid-cols-1 gap-2">
              {loanAmounts.map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => set("loan_amount", a)}
                  className={`text-left px-3 py-2.5 rounded-lg border text-sm transition-all ${
                    form.loan_amount === a
                      ? "border-[#22C55E] bg-green-50 text-[#1E3A8A] font-semibold"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-3 h-3 rounded-full border mr-2 align-middle transition-all ${
                      form.loan_amount === a
                        ? "bg-[#22C55E] border-[#22C55E]"
                        : "border-gray-300"
                    }`}
                  />
                  {a}
                </button>
              ))}
            </div>
            {errors.loan_amount && (
              <p className="text-red-500 text-xs mt-1">{errors.loan_amount}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Property City *
            </label>
            <select
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 bg-white ${
                errors.city ? "border-red-400" : "border-gray-200"
              }`}
            >
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>
        </div>
      )}

      {/* ── Step 2: Income Profile ── */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Employment Type *
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Salaried", "Self-Employed", "Business Owner", "NRI"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => set("employment_type", t)}
                  className={`px-3 py-3 rounded-lg border text-sm font-medium transition-all ${
                    form.employment_type === t
                      ? "border-[#22C55E] bg-green-50 text-[#1E3A8A]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            {errors.employment_type && (
              <p className="text-red-500 text-xs mt-1">{errors.employment_type}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Monthly Income *
            </label>
            <div className="space-y-2">
              {incomeRanges.map((i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => set("income", i)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border text-sm transition-all ${
                    form.income === i
                      ? "border-[#22C55E] bg-green-50 text-[#1E3A8A] font-semibold"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-3 h-3 rounded-full border mr-2 align-middle ${
                      form.income === i
                        ? "bg-[#22C55E] border-[#22C55E]"
                        : "border-gray-300"
                    }`}
                  />
                  {i}
                </button>
              ))}
            </div>
            {errors.income && (
              <p className="text-red-500 text-xs mt-1">{errors.income}</p>
            )}
          </div>
        </div>
      )}

      {/* ── Step 3: Contact Details ── */}
      {step === 2 && (
        <div className="space-y-3">
          <div>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Full Name *"
              className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <div className="flex">
              <span className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-500">
                +91
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="Mobile Number *"
                maxLength={10}
                className={`flex-1 border rounded-r-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 ${
                  errors.phone ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="Email Address (optional)"
              className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Summary chip */}
          <div className="bg-blue-50 rounded-xl px-4 py-3 text-xs text-[#1E3A8A] space-y-1">
            <p className="font-semibold mb-1">Your Application Summary:</p>
            {form.loan_amount && <p>🏠 Loan: {form.loan_amount} in {form.city}</p>}
            {form.income && <p>💼 Income: {form.income} · {form.employment_type}</p>}
          </div>
        </div>
      )}

      {/* ── Navigation buttons ── */}
      <div className="mt-5 flex gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-1 px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}

        {step < 2 ? (
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold py-3 rounded-xl text-sm transition-all"
          >
            Continue <ChevronRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] disabled:bg-green-300 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-green-200"
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" /> Submitting...</>
            ) : (
              <><CheckCircle2 size={16} /> Check Eligibility – Free</>
            )}
          </button>
        )}
      </div>

      <p className="text-center text-xs text-gray-400 mt-3">
        🔒 Your data is safe. No spam, ever.
      </p>
    </form>
  );
}
