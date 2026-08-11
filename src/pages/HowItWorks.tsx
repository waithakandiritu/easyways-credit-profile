import { PageHero } from "../components/PageHero";
import { Icon } from "../components/Icon";

const steps = [
  {
    n: "01",
    title: "Apply online — 6 minutes",
    body: "Tell us who you are, what you do for work, and what you need. Our application uses progressive verification, so you only enter what's relevant to the product you've chosen.",
    items: ["Choose product and amount", "Enter ID and employment details", "Upload required documents"],
  },
  {
    n: "02",
    title: "We verify, in real time",
    body: "We run your ID against IPRS, request a CRB report, and assess affordability based on your declared and observed cash flows. Most decisions are returned within minutes.",
    items: ["IPRS identity check", "CRB enquiry", "Affordability scoring"],
  },
  {
    n: "03",
    title: "Offer, sign, disburse",
    body: "If approved, you'll see a clear offer — interest, fees, total payable, repayment schedule. Sign digitally, and funds are sent to your M-Pesa wallet immediately.",
    items: ["Transparent offer letter", "Digital signature", "M-Pesa disbursement"],
  },
  {
    n: "04",
    title: "Repay your way",
    body: "Repay via NCBA Bank Paybill 880100 (account: 448181), via Safaricom Lipa na M-Pesa Paybill 4188425 (account: your National ID number), via M-Pesa STK push from our portal, or via standing instruction from your bank. Early repayment is always free.",
    items: [
      "NCBA Bank Paybill 880100 — Account 448181",
      "Safaricom Lipa na M-Pesa Paybill 4188425 — Account: National ID Number",
      "STK push from portal",
      "No early repayment penalty",
    ],
  },
];

export function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A regulated lending process, designed to feel effortless."
        intro="No paper forms. No branch visits. No surprises. Here is exactly what happens from the moment you tap apply, to the moment you repay."
      />
      <section className="container-page py-24">
        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.n} className="grid gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-4 flex items-center gap-5">
                <div className="font-mono text-4xl text-gold">{step.n}</div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy">{step.title}</h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[15px] text-slate leading-relaxed max-w-2xl">{step.body}</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-mist/50 px-4 py-2 text-[13px] text-navy"
                    >
                      <Icon name="check" className="h-3.5 w-3.5 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
