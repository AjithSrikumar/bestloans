"use client";

import { useState, useEffect, useRef } from "react";
import { X, TrendingDown } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    // Only show once per session
    const alreadyShown = sessionStorage.getItem("bl_exit_shown");
    if (alreadyShown) return;

    function onMouseLeave(e: MouseEvent) {
      // Fire only when cursor moves above the viewport (exit intent)
      if (e.clientY <= 0 && !shownRef.current) {
        shownRef.current = true;
        sessionStorage.setItem("bl_exit_shown", "1");
        setOpen(true);
        trackEvent("exit_intent_shown");
      }
    }

    // Delay attaching the listener slightly to avoid false positives
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", onMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  function handleWhatsApp() {
    trackEvent("exit_intent_converted");
    window.open(
      "https://wa.me/919500109337?text=" +
        encodeURIComponent(
          "Hi BestLoans team! 👋\n\nI was just browsing your site and would like to know more about home loan options. Could you send me the best rates available?"
        ),
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
            🏠
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-[#1E3A8A] text-center mb-2">
          Wait! Don&apos;t miss out.
        </h2>
        <p className="text-gray-500 text-center text-sm mb-2">
          Get the <strong className="text-[#1E3A8A]">best home loan rates</strong> sent
          directly to your WhatsApp — free.
        </p>

        {/* Benefits */}
        <div className="bg-green-50 rounded-xl p-4 mb-5 space-y-2">
          {[
            "Compare 150+ banks instantly",
            "Rates starting from 7.10% p.a.",
            "Expert guidance, zero cost",
          ].map((b) => (
            <p key={b} className="flex items-center gap-2 text-sm text-[#1E3A8A]">
              <TrendingDown size={13} className="text-[#22C55E] shrink-0" />
              {b}
            </p>
          ))}
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold py-4 rounded-xl transition-all text-base"
        >
          <WhatsAppIcon size={22} />
          Get Best Rates on WhatsApp
        </button>

        <button
          onClick={() => setOpen(false)}
          className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 underline"
        >
          No thanks, I&apos;ll pay higher rates
        </button>
      </div>
    </div>
  );
}
