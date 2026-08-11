import type { IconName } from "../components/Icon";

/** Compact product cards shown on the home page + home rate table. */
export type ProductPreview = {
  title: string;
  desc: string;
  img: string;
  icon: IconName;
  rate: string;
  tenure: string;
  max: string;
  featured?: boolean;
};

export const productPreviews: ProductPreview[] = [
  {
    title: "Logbook Loans",
    desc: "Unlock the value of your vehicle without parting with it.",
    img: "/assets/product-logbook.webp",
    icon: "car",
    rate: "3% – 8% / mo",
    tenure: "Up to 24 months",
    max: "KSh 3,000,000",
  },
  {
    title: "Emergency Loans",
    desc: "Same-day credit for the moments that can't wait.",
    img: "/assets/product-emergency.jpg",
    icon: "zap",
    rate: "5% – 20% / mo",
    tenure: "1 – 6 months",
    max: "KSh 100,000",
    featured: true,
  },
  {
    title: "Virtual Asset Loans",
    desc: "Borrow against your verified digital assets — no liquidation.",
    img: "/assets/product-crypto.jpg",
    icon: "bitcoin",
    rate: "3% – 7% / mo",
    tenure: "Up to 12 months",
    max: "KSh 2,000,000",
  },
  {
    title: "Phone Purchase Loans",
    desc: "Finance the smartphone you need today, pay over time.",
    img: "/assets/product-phone.jpg",
    icon: "smartphone",
    rate: "3% – 7% / mo",
    tenure: "Up to 12 months",
    max: "KSh 250,000",
  },
  {
    title: "Check-off Loans",
    desc: "Salary-anchored credit for employees of partner organisations.",
    img: "/assets/about-office.jpg",
    icon: "briefcase",
    rate: "3% – 8% / mo",
    tenure: "Up to 36 months",
    max: "KSh 2,000,000",
  },
];

/** Full product detail entries shown on the /products page. */
export type Product = {
  id: string;
  title: string;
  tagline: string;
  img: string;
  icon: IconName;
  rate: string;
  max: string;
  tenure: string;
  processing: string;
  eligibility: string[];
  requirements: string[];
  example: { principal: string; tenure: string; monthly: string; total: string };
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "logbook",
    title: "Logbook Loans",
    tagline: "Credit secured against your vehicle. You keep driving, we hold the logbook.",
    img: "/assets/product-logbook.webp",
    icon: "car",
    rate: "3% – 8% / month",
    max: "KSh 3,000,000",
    tenure: "Up to 24 months",
    processing: "5% (one-off)",
    eligibility: [
      "Kenyan citizen, 21+",
      "Vehicle registered in your name",
      "Vehicle aged 12 years or less",
      "Stable monthly income (employed or self-employed)",
    ],
    requirements: [
      "National ID",
      "KRA PIN",
      "Original logbook",
      "Comprehensive insurance cover",
      "3 months' bank or M-Pesa statements",
    ],
    example: {
      principal: "KSh 500,000",
      tenure: "12 months",
      monthly: "KSh 49,160",
      total: "KSh 589,920",
    },
  },
  {
    id: "emergency",
    title: "Emergency Loans",
    tagline: "When the bill won't wait. Same-day credit, straight to M-Pesa.",
    img: "/assets/product-emergency.jpg",
    icon: "zap",
    rate: "5% – 20% / month",
    max: "KSh 100,000",
    tenure: "1 – 6 months",
    processing: "5% (one-off)",
    eligibility: [
      "Kenyan citizen, 21+",
      "Active M-Pesa account (12+ months)",
      "Recurring income deposit",
      "Clean recent CRB record",
    ],
    requirements: ["National ID", "Active mobile number", "M-Pesa statement (last 3 months)"],
    example: {
      principal: "KSh 45,000",
      tenure: "3 months",
      monthly: "KSh 17,250",
      total: "KSh 51,750",
    },
    featured: true,
  },
  {
    id: "virtual-asset",
    title: "Virtual Asset Loans",
    tagline: "Borrow against your verified BTC, ETH or USDT — without selling your position.",
    img: "/assets/product-crypto.jpg",
    icon: "bitcoin",
    rate: "3% – 7% / month",
    max: "KSh 2,000,000",
    tenure: "Up to 12 months",
    processing: "2% (one-off)",
    eligibility: [
      "Kenyan resident, 21+",
      "Verified self-custody or exchange wallet",
      "Loan-to-value capped at 50%",
    ],
    requirements: ["National ID", "Wallet attestation (proof of holdings)", "KRA PIN"],
    example: {
      principal: "KSh 300,000",
      tenure: "6 months",
      monthly: "KSh 56,500",
      total: "KSh 339,000",
    },
  },
  {
    id: "phone",
    title: "Phone Purchase Loans",
    tagline: "Walk out with the phone today. Spread the cost over your next paychecks.",
    img: "/assets/product-phone.jpg",
    icon: "smartphone",
    rate: "3% – 7% / month",
    max: "KSh 250,000",
    tenure: "Up to 12 months",
    processing: "5% (one-off)",
    eligibility: ["Employed Kenyan, 21+", "Minimum 30% deposit", "Proof of monthly income"],
    requirements: [
      "National ID",
      "Latest payslip",
      "Phone proforma invoice from approved dealer",
    ],
    example: {
      principal: "KSh 60,000",
      tenure: "6 months",
      monthly: "KSh 10,950",
      total: "KSh 65,700",
    },
  },
  {
    id: "check-off",
    title: "Check-off Loans",
    tagline:
      "Salary-anchored credit for employees of partner organisations — repayments deducted directly at source.",
    img: "/assets/about-office.jpg",
    icon: "briefcase",
    rate: "3% – 8% / month",
    max: "KSh 2,000,000",
    tenure: "Up to 36 months",
    processing: "5% (one-off)",
    eligibility: [
      "Employed Kenyan, 21+",
      "Employer on our check-off partnership list",
      "Minimum 6 months in current employment",
      "Net salary supports the deduction",
    ],
    requirements: [
      "National ID",
      "KRA PIN",
      "Latest 3 payslips",
      "Signed employer check-off authorisation",
    ],
    example: {
      principal: "KSh 400,000",
      tenure: "24 months",
      monthly: "KSh 22,650",
      total: "KSh 543,600",
    },
  },
];
