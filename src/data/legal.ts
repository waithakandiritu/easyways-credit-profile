export type LegalSection = { title: string; body: string };

export const privacySections: LegalSection[] = [
  {
    title: "1. Who we are",
    body: 'EasyWays Credit Limited ("EasyWays", "we", "us") is a private limited company incorporated in Kenya and licensed by the Central Bank of Kenya as a Digital Credit Provider. Our registered office is at Trio Complex, Thika Road, behind Garden City Mall, Nairobi.',
  },
  {
    title: "2. What data we collect",
    body: "We collect personal data you provide directly (name, ID, contact, employment, income), data we collect automatically when you use our platform (device data, IP, usage), and data we receive from third parties (CRBs, IPRS, payment processors).",
  },
  {
    title: "3. Why we collect it",
    body: "To assess your loan application, comply with CBK and AML/CFT obligations, service your loan, contact you about your account, prevent fraud, and improve our products.",
  },
  {
    title: "4. Lawful basis",
    body: "We process your data on the basis of contract performance, legal obligation, and your explicit consent where required. You may withdraw consent at any time, subject to legal retention requirements.",
  },
  {
    title: "5. Sharing",
    body: "We share your data only with: credit reference bureaus, payment processors, regulators, and service providers bound by confidentiality. We do not sell your data.",
  },
  {
    title: "6. Retention",
    body: "We retain your personal data for the duration of your relationship with us, plus seven years thereafter, in line with CBK record-keeping requirements.",
  },
  {
    title: "7. Your rights",
    body: "Under the Data Protection Act, 2019, you have the right to access, correct, delete or object to the processing of your personal data. To exercise these rights, contact privacy@easywayscredit.co.ke.",
  },
  {
    title: "8. Security",
    body: "We use industry-standard encryption (TLS in transit, AES-256 at rest), least-privilege access controls and quarterly third-party security reviews.",
  },
  {
    title: "9. Contact our DPO",
    body: "Our Data Protection Officer can be reached at dpo@easywayscredit.co.ke or in person at our Nairobi office.",
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "1. Acceptance",
    body: "By accessing the EasyWays platform or applying for any credit product, you agree to be bound by these terms. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Eligibility",
    body: "You must be at least 21 years old, a Kenyan citizen or legal resident, with a verifiable source of income and an active M-Pesa account in your name.",
  },
  {
    title: "3. Loan products",
    body: "All credit products are offered subject to credit assessment, regulatory limits and product-specific eligibility. We reserve the right to decline any application without obligation to disclose reasons beyond those required by law.",
  },
  {
    title: "4. Pricing",
    body: "Interest, fees and total cost of credit are disclosed in your offer letter before drawdown. All charges are levied in line with our published rate card and within the limits set by the Central Bank of Kenya.",
  },
  {
    title: "5. Repayment",
    body: "You agree to repay all amounts due on the dates specified in your repayment schedule. Late payment attracts interest at the rate disclosed in your offer letter, subject to CBK caps on total cost of credit.",
  },
  {
    title: "6. Default",
    body: "If you default on a payment, we may report the default to credit reference bureaus, instruct recovery agents bound by the CBK Consumer Protection Guidelines, and where applicable enforce security taken over your assets.",
  },
  {
    title: "7. Communications",
    body: "You consent to receive service communications (SMS, email, WhatsApp, phone calls) about your account. You may opt out of marketing communications at any time.",
  },
  {
    title: "8. Disputes",
    body: "Any dispute will first be addressed through our internal complaints process. Unresolved matters will be referred to mediation, and if necessary, the Kenyan courts.",
  },
  {
    title: "9. Governing law",
    body: "These terms are governed by the laws of the Republic of Kenya.",
  },
  {
    title: "10. Changes",
    body: "We may update these terms from time to time. The latest version will always be available at this page, and material changes will be notified to you in advance.",
  },
];
