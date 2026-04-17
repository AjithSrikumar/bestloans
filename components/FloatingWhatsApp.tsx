"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  function handleClick() {
    trackEvent("whatsapp_clicked", { source: "floating_button" });
    window.open(
      "https://wa.me/919500109337?text=" +
        encodeURIComponent(
          "Hi BestLoans team! 👋\n\nI'm interested in a home loan. Could you please help me find the best deal?"
        ),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {tooltipOpen && (
        <div className="relative bg-white text-gray-700 text-sm rounded-2xl shadow-xl px-4 py-3 max-w-[200px] border border-gray-100 animate-fade-in">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
            aria-label="Close"
          >
            <X size={11} />
          </button>
          <p className="font-semibold text-[#1E3A8A] text-xs leading-tight">
            Chat with a loan expert
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Instant replies · Free advice
          </p>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={tooltipOpen ? handleClick : () => setTooltipOpen(true)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-pulse-green"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </button>
    </div>
  );
}
