"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";
import { X } from "lucide-react";

export default function StickySideForm() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed right-6 bottom-6 z-40 hidden lg:block w-80 shadow-2xl rounded-2xl overflow-hidden animate-fade-in-up">
      <div className="bg-[#1E3A8A] text-white px-4 py-3 flex items-center justify-between">
        <div>
          <p className="font-bold text-sm">Get Free Eligibility Check</p>
          <p className="text-blue-200 text-xs">Takes only 2 minutes</p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-blue-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
      <LeadForm compact />
    </div>
  );
}
