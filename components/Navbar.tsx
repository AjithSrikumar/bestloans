"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import BestLoansLogo from "./BestLoansLogo";

const navLinks = [
  { label: "Home Loans", href: "/#hero" },
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BestLoansLogo size="sm" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919500109337"
              className="flex items-center gap-1 text-sm font-medium text-[#1E3A8A] hover:text-[#22C55E] transition-colors"
            >
              <Phone size={15} />
              +91 95001 09337
            </a>
            <a
              href="#lead-form"
              className="bg-[#22C55E] hover:bg-[#16a34a] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-md"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#lead-form"
            onClick={() => setOpen(false)}
            className="block mt-2 bg-[#22C55E] hover:bg-[#16a34a] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors"
          >
            Apply Now – It&apos;s Free
          </a>
        </div>
      )}
    </header>
  );
}
