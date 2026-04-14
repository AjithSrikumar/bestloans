"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
      <a
        href="tel:+919500109337"
        className="flex-1 flex items-center justify-center gap-2 border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold py-3 rounded-xl text-sm transition-colors hover:bg-blue-50"
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href="#lead-form"
        className="flex-1 flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-md"
      >
        <MessageCircle size={16} />
        Apply Free
      </a>
    </div>
  );
}
