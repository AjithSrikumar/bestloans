import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geist = localFont({
  src: [
    { path: "../public/fonts/geist-latin-ext.woff2", weight: "100 900", style: "normal" },
    { path: "../public/fonts/geist-latin.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BestLoans – Get the Best Home Loan in India",
    template: "%s | BestLoans",
  },
  description:
    "Compare home loans from 50+ banks. Fast approval, lowest interest rates. Apply online in minutes with BestLoans.",
  keywords: [
    "home loan",
    "best home loan",
    "compare home loans",
    "low interest home loan",
    "home loan India",
    "BestLoans",
  ],
  authors: [{ name: "BestLoans" }],
  creator: "BestLoans",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bestloans.in",
    siteName: "BestLoans",
    title: "BestLoans – Get the Best Home Loan in India",
    description:
      "Compare home loans from 50+ banks. Fast approval, lowest interest rates.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BestLoans – Get the Best Home Loan in India",
    description:
      "Compare home loans from 50+ banks. Fast approval, lowest interest rates.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
