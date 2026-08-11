export type FaqGroup = {
  title: string;
  items: { q: string; a: string }[];
};

export const faqGroups: FaqGroup[] = [
  {
    title: "Eligibility",
    items: [
      {
        q: "Who can borrow from EasyWays?",
        a: "Any Kenyan citizen aged 21 or above with a verifiable income source and an active M-Pesa account. Specific products have additional requirements — see the product page for details.",
      },
      {
        q: "Do I need a payslip?",
        a: "Only if you are in employment and your banking activity supports our lending credit score criteria. Self-employed applicants can use M-Pesa or bank statements as proof of income.",
      },
      {
        q: "Will you check my CRB?",
        a: "Yes. We pull a CRB report as part of every application, in line with CBK requirements. A negative listing does not automatically disqualify you — context matters.",
      },
    ],
  },
  {
    title: "Loans & rates",
    items: [
      {
        q: "How much can I borrow?",
        a: "From KSh 5,000 on an Emergency Loan, up to KSh 3,000,000 on a Logbook Loan. The exact amount depends on your product, income and credit profile.",
      },
      {
        q: "What is the interest rate?",
        a: "Indicative monthly rates start at 3% for Logbook, 3% for Phone Purchase, 5% for Emergency and 3% for Virtual Asset loans. The exact rate is disclosed in your offer letter.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. Our processing fee is disclosed up-front and capped per product. We do not charge insurance commissions, account maintenance fees or rolling overdue penalties.",
      },
    ],
  },
  {
    title: "Repayment",
    items: [
      {
        q: "How do I repay?",
        a: "Via NCBA Bank Paybill 880100 (account: 448181), via Safaricom Lipa na M-Pesa Paybill 4188425 (account: your National ID number), via STK push from the EasyWays portal, or by standing instruction from your bank.",
      },
      {
        q: "Can I repay early?",
        a: "Yes — at any time, with no penalty. You only pay interest accrued up to the repayment date.",
      },
      {
        q: "What happens if I miss a payment?",
        a: "We will contact you on the day a payment is missed. Late payment interest applies as disclosed in your offer letter. We will never harass you or your contacts.",
      },
    ],
  },
  {
    title: "Regulation & data",
    items: [
      {
        q: "Are you really licensed?",
        a: "Yes. EasyWays Credit Limited operates under a Digital Credit Provider licence issued by the Central Bank of Kenya under the CBK (Amendment) Act, 2021.",
      },
      {
        q: "Is my data safe?",
        a: "Your personal data is encrypted in transit and at rest. We process it strictly under the Data Protection Act, 2019. You may request a copy or deletion at any time.",
      },
      {
        q: "Will you share my data with third parties?",
        a: "Only with credit reference bureaus (as legally required), with payment processors who facilitate disbursement and collection, and with regulators upon lawful request.",
      },
    ],
  },
];
