import Link from "next/link";
import BestLoansLogo from "./BestLoansLogo";
import CTASection from "./CTASection";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home Loans", href: "/#hero" },
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <>
      <CTASection />
      <footer className="bg-[#0f2057] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <BestLoansLogo size="sm" className="invert brightness-200" />
            <p className="text-gray-300 text-sm leading-relaxed">
              India&apos;s trusted home loan comparison platform. Compare 150+
              banks and get the best deal in minutes.
            </p>
            <div className="flex gap-3 mt-2">
              {["f", "in", "t", "yt"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#22C55E] flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label={icon}
                >
                  {icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-300 hover:text-[#22C55E] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Loan Types
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Home Purchase Loan",
                "Home Construction Loan",
                "Home Renovation Loan",
                "Balance Transfer",
                "Plot Loan",
                "Top-up Loan",
              ].map((item) => (
                <li key={item} className="hover:text-[#22C55E] cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#22C55E]" />
                <a href="tel:+919500109337" className="hover:text-white transition-colors">
                  +91 95001 09337
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#22C55E]" />
                <a href="mailto:hello@bestloans.in" className="hover:text-white transition-colors">
                  hello@bestloans.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#22C55E]" />
                <span>Chennai, Tamil Nadu, 600 006</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} BestLoans. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-gray-200 text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 text-gray-500 text-xs text-center">
          BestLoans is a loan comparison platform. We are not a bank or NBFC.
          Loan approval is subject to bank&apos;s terms and conditions.
          Interest rates shown are indicative and may vary.
        </p>
      </div>
    </footer>
    </>
  );
}
