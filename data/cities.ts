export interface CityData {
  slug: string;
  name: string;
  state: string;
  avgPropertyPrice: string;
  topBanks: string[];
  description: string;
  highlights: string[];
}

export const cities: CityData[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    avgPropertyPrice: "₹1.2–3.5 Crore",
    topBanks: ["SBI", "HDFC", "ICICI", "Axis", "Kotak"],
    description:
      "Mumbai is India's financial capital with high property values. Home loans here typically range from ₹75 Lakhs to ₹5 Crore+.",
    highlights: [
      "India's highest property appreciation",
      "RERA registered projects",
      "Strong rental yields",
      "Infrastructure boom",
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    avgPropertyPrice: "₹60L–2.5 Crore",
    topBanks: ["HDFC", "SBI", "ICICI", "Axis", "Canara"],
    description:
      "India's IT hub with booming real estate. Bengaluru offers excellent home loan options for IT professionals with high incomes.",
    highlights: [
      "High IT salary profiles qualify easily",
      "Fastest growing real estate market",
      "Strong developer projects",
      "Metro connectivity boost",
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    avgPropertyPrice: "₹80L–4 Crore",
    topBanks: ["SBI", "PNB", "HDFC", "ICICI", "Bank of Baroda"],
    description:
      "Delhi NCR covers Noida, Gurgaon, and Faridabad. Government employees get special rates from SBI and PNB in this region.",
    highlights: [
      "Special rates for govt employees",
      "Large 2/3/4 BHK inventory",
      "Metro connectivity advantage",
      "DDA flats eligible",
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    avgPropertyPrice: "₹50L–2 Crore",
    topBanks: ["SBI", "HDFC", "ICICI", "Axis", "Kotak"],
    description:
      "Hyderabad is one of India's fastest-growing cities with affordable property prices compared to Mumbai or Delhi.",
    highlights: [
      "Most affordable metro real estate",
      "IT sector boom driving demand",
      "Zero stamp duty for women",
      "GHMC approved projects",
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    avgPropertyPrice: "₹55L–2.5 Crore",
    topBanks: ["Indian Bank", "SBI", "HDFC", "ICICI", "Canara"],
    description:
      "Chennai has a mature real estate market with strong demand from IT and manufacturing sector employees.",
    highlights: [
      "Strong manufacturing + IT economy",
      "Tamil Nadu housing board schemes",
      "North Chennai industrial growth",
      "Metro Phase 2 connectivity",
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    avgPropertyPrice: "₹50L–2.5 Crore",
    topBanks: ["SBI", "HDFC", "Axis", "ICICI", "Bank of Maharashtra"],
    description:
      "Pune is Maharashtra's second-largest city with a thriving IT, education, and manufacturing sector — and affordable home loans.",
    highlights: [
      "IT hub with young workforce",
      "PMC and PCMC areas booming",
      "Metro connectivity improving",
      "Affordable vs Mumbai",
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    avgPropertyPrice: "₹35L–1.5 Crore",
    topBanks: ["SBI", "UCO Bank", "United Bank", "HDFC", "ICICI"],
    description:
      "Kolkata offers the most affordable home loans among major metros with strong PSU bank presence.",
    highlights: [
      "Most affordable metro city",
      "Strong PSU bank network",
      "New Town growth corridor",
      "WBHIDCO projects",
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    avgPropertyPrice: "₹40L–1.8 Crore",
    topBanks: ["SBI", "Bank of Baroda", "HDFC", "Axis", "IDFC"],
    description:
      "Ahmedabad is Gujarat's largest city with rapidly appreciating real estate and a business-friendly environment.",
    highlights: [
      "GIFT City driving growth",
      "Textile + pharma economy",
      "Metro connectivity",
      "Affordable luxury segment",
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    avgPropertyPrice: "₹30L–1.2 Crore",
    topBanks: ["SBI", "Bank of Baroda", "HDFC", "ICICI", "PNB"],
    description:
      "Jaipur, the Pink City, is emerging as a real estate hotspot with affordable prices and rapid urbanization.",
    highlights: [
      "Rajasthan tourism economy",
      "JDA approved projects",
      "Delhi-Mumbai corridor benefit",
      "Affordable luxury villas",
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    avgPropertyPrice: "₹50L–2 Crore",
    topBanks: ["SBI", "HDFC", "ICICI", "Axis", "Kotak"],
    description:
      "Noida in Delhi NCR is a major IT hub with excellent infrastructure and high home loan demand.",
    highlights: [
      "NCR's fastest-growing hub",
      "Expressway connectivity",
      "IT sector boom",
      "Noida Extension affordable",
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    avgPropertyPrice: "₹70L–4 Crore",
    topBanks: ["HDFC", "SBI", "Axis", "ICICI", "Kotak"],
    description:
      "Gurgaon (Gurugram) is Haryana's corporate hub with premium real estate and high-value home loans.",
    highlights: [
      "Corporate hub of NCR",
      "Golf Course Road premium",
      "High rental yields",
      "Luxury segment growth",
    ],
  },
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    avgPropertyPrice: "₹30L–1.2 Crore",
    topBanks: ["SBI", "Bank of Baroda", "HDFC", "ICICI", "Axis"],
    description:
      "Surat is one of India's fastest-growing cities driven by diamond and textile trade with affordable home prices.",
    highlights: [
      "Fastest growing city in India",
      "Diamond trade wealth",
      "Smart City initiatives",
      "Affordable pricing",
    ],
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    avgPropertyPrice: "₹45L–2 Crore",
    topBanks: ["Federal Bank", "South Indian Bank", "SBI", "HDFC", "ICICI"],
    description:
      "Kochi is Kerala's commercial capital with high NRI investment and strong home loan demand from Gulf returnees.",
    highlights: [
      "High NRI investment",
      "Kerala Gulf returnee demand",
      "Metro connectivity",
      "IT park growth",
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Punjab/Haryana",
    avgPropertyPrice: "₹50L–2.5 Crore",
    topBanks: ["SBI", "PNB", "HDFC", "ICICI", "Axis"],
    description:
      "Chandigarh is India's best-planned city with stable real estate and strong demand from government employees.",
    highlights: [
      "India's best planned city",
      "Government employee demand",
      "Tri-city growth",
      "Stable appreciation",
    ],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    avgPropertyPrice: "₹30L–1.5 Crore",
    topBanks: ["SBI", "Bank of Baroda", "PNB", "HDFC", "ICICI"],
    description:
      "Lucknow, UP's capital, is experiencing rapid growth with government investment in infrastructure and housing.",
    highlights: [
      "LDA approved housing",
      "Government sector demand",
      "Expressway connectivity",
      "Affordable segment growing",
    ],
  },
];

export const cityBySlug = Object.fromEntries(
  cities.map((c) => [c.slug, c])
) as Record<string, CityData>;
