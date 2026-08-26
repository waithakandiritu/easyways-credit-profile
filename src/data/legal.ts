export type LegalTable = { headers: string[]; rows: string[][] };

export type LegalSection = {
  title: string;
  body: string;
  bullets?: string[];
  table?: LegalTable;
  footnote?: string;
};

export const privacyEffectiveDate = "6 April 2026";

export const privacySections: LegalSection[] = [
  {
    title: "1. Introduction",
    body: 'This Privacy Policy explains how EasyWays Credit Limited ("EasyWays", "we", "us", "our"), operating the EasyWays digital lending platform, collects, uses, discloses and protects your personal data in compliance with the Kenya Data Protection Act, 2019 (the "Act") and the regulations made thereunder. By using our mobile application or web portal you consent to the practices described herein.',
  },
  {
    title: "2. Data Controller",
    body: "EasyWays Credit Limited is the data controller for the personal data described in this policy. Our registered office is at Trio Complex, Thika Road, behind Garden City Mall, Nairobi.",
    bullets: [
      "Data Controller: EasyWays Credit Limited",
      "Contact: support@easywayscredit.com / +254 734 641 449",
      "Data Protection Officer: support@easywayscredit.com",
      "Office of the Data Protection Commissioner (ODPC), P.O. Box 93476-10101, Nairobi, Kenya — complaints@odpc.go.ke",
    ],
  },
  {
    title: "3. Personal Data We Collect",
    body: "We collect the following categories of personal data:",
    table: {
      headers: ["Category", "Examples"],
      rows: [
        [
          "Identity data",
          "Full name, national ID / passport number, date of birth, gender, photograph",
        ],
        ["Contact data", "Phone number, email address, postal address"],
        [
          "Financial data",
          "Loan account details, repayment history, savings balances, M-Pesa transaction records",
        ],
        [
          "Device data",
          "Device model, OS version, push notification token, IP address",
        ],
        ["Usage data", "App usage patterns, login timestamps, pages visited"],
        [
          "Biometric data",
          "Fingerprint templates (stored locally on your device only — never transmitted to our servers)",
        ],
      ],
    },
  },
  {
    title: "4. Legal Basis for Processing",
    body: "In line with section 30 of the Data Protection Act, 2019, we process your personal data on the following lawful bases:",
    bullets: [
      "Consent (s.30(1)(a)) — you provide explicit consent when you register and accept these terms.",
      "Performance of a contract (s.30(1)(b)) — processing is necessary to administer your loan and savings accounts.",
      "Legal obligation (s.30(1)(c)) — we are required by the Central Bank of Kenya (CBK) and other regulators to maintain records.",
      "Legitimate interest (s.30(1)(f)) — fraud prevention, credit risk assessment and service improvement.",
    ],
  },
  {
    title: "5. How We Use Your Data",
    body: "Your personal data is used to:",
    bullets: [
      "Open and manage loan and savings accounts",
      "Process loan disbursements and repayments via M-Pesa",
      "Send transactional SMS and push notifications (payment reminders, receipts)",
      "Perform credit scoring and affordability assessments",
      "Comply with regulatory reporting requirements (CBK, ODPC)",
      "Detect and prevent fraud or money laundering",
      "Improve our services and app experience",
    ],
  },
  {
    title: "6. Data Sharing and Disclosure",
    body: "We may share your data with:",
    table: {
      headers: ["Recipient", "Purpose", "Safeguard"],
      rows: [
        [
          "Safaricom (M-Pesa)",
          "Payment processing",
          "Data processing agreement",
        ],
        [
          "Credit reference bureaus (CRBs)",
          "Credit reporting as required by the Banking Act",
          "Regulatory mandate",
        ],
        [
          "Cloud service providers",
          "Data hosting and storage",
          "Encryption at rest and in transit",
        ],
        [
          "Regulatory bodies (CBK, ODPC, FRC)",
          "Statutory compliance",
          "Legal obligation",
        ],
        [
          "Law enforcement",
          "Court orders, lawful investigations",
          "Only upon valid legal process",
        ],
      ],
    },
    footnote: "We do not sell your personal data to third parties.",
  },
  {
    title: "7. Cross-Border Data Transfers",
    body: "Your data may be processed on servers located outside Kenya. Where this occurs, we ensure adequate safeguards are in place in accordance with section 48 of the Act, including:",
    bullets: [
      "Standard contractual clauses",
      "Adequacy determination by the Data Commissioner",
      "Your explicit consent",
    ],
  },
  {
    title: "8. Data Retention",
    body: "We retain your personal data for the following periods:",
    table: {
      headers: ["Data type", "Retention period"],
      rows: [
        ["Active account data", "Duration of relationship + 7 years"],
        ["Loan records", "7 years after loan closure (CBK requirement)"],
        [
          "Transaction records",
          "7 years (Proceeds of Crime and Anti-Money Laundering Act)",
        ],
        ["Consent records", "Indefinitely (audit trail)"],
        [
          "Device tokens",
          "Until the device is deregistered or the token expires",
        ],
      ],
    },
    footnote:
      "After the retention period, data is securely deleted or anonymised.",
  },
  {
    title: "9. Your Rights",
    body: "Under Part IV of the Data Protection Act, 2019, you have the right to:",
    bullets: [
      "Access your personal data (s.26(a))",
      "Rectification of inaccurate data (s.26(b))",
      "Deletion of data no longer necessary (s.26(c)), subject to legal retention requirements",
      "Restrict or object to processing (s.26(d))",
      "Data portability — receive your data in a structured format (s.26(e))",
      "Withdraw consent at any time (s.32), without affecting the lawfulness of prior processing",
      "Lodge a complaint with the ODPC",
    ],
    footnote:
      "To exercise your rights, contact us using the details in Section 2.",
  },
  {
    title: "10. Data Security",
    body: "In line with section 41 of the Act, we implement appropriate technical and organisational measures including:",
    bullets: [
      "TLS 1.3 encryption for data in transit",
      "AES-256 encryption for data at rest",
      "PIN and optional biometric authentication",
      "Role-based access controls (RBAC)",
      "Regular security audits and penetration testing",
      "Incident response procedures with 72-hour breach notification to the ODPC",
    ],
  },
  {
    title: "11. Children's Data",
    body: "Our services are not directed at persons under 18 years. We do not knowingly collect data from minors. If we discover that such data has been collected, it will be deleted promptly.",
  },
  {
    title: "12. Automated Decision-Making",
    body: "We may use automated credit scoring to assess loan eligibility. You have the right to:",
    bullets: [
      "Request human review of any automated decision",
      "Be informed of the logic, significance and consequences of such processing",
    ],
  },
  {
    title: "13. Cookies and Tracking",
    body: "Our web portal uses essential cookies for session management. We do not use advertising or tracking cookies. See our Cookie Notice for details.",
  },
  {
    title: "14. Changes to This Policy",
    body: "We may update this policy periodically. Material changes will be communicated via in-app notification, and the updated policy will be published with a new effective date.",
  },
  {
    title: "15. Contact & Complaints",
    body: "If you have questions or complaints about this policy, contact:",
    bullets: [
      "EasyWays Credit Limited: support@easywayscredit.com / +254 734 641 449",
      "EasyWays privacy team: support@easywayscredit.com",
      "Office of the Data Protection Commissioner: complaints@odpc.go.ke | www.odpc.go.ke",
    ],
    footnote: "This policy was last updated on 6 April 2026.",
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
