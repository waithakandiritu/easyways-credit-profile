import { Link } from "react-router";
import { Icon, type IconName } from "../components/Icon";
import { Logo } from "../components/Logo";
import { productPreviews, type ProductPreview } from "../data/products";
import { APPLY_URL } from "../data/nav";

export function Home() {
  return (
    <>
      <Hero />
      <RegulatedStrip />
      <ProductsPreview />
      <PricingSection />
      <ThreeSteps />
      <ComplianceGrid />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 gold-glow" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-page relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
              <Icon name="shield" className="h-3.5 w-3.5 text-gold" />
              Licensed by the Central Bank of Kenya · DCP Regulated
            </div>
            <h1 className="reveal reveal-d1 mt-7 font-serif text-[44px] leading-[1.05] sm:text-[58px] md:text-[68px] lg:text-[76px] text-balance">
              Fast credit.
              <br />
              <span className="text-gold-soft italic">Your way,</span> anytime.
            </h1>
            <p className="reveal reveal-d2 mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/70">
              From a logbook loan to keep your business moving, to an emergency top-up before salary,
              to credit secured against your digital assets — EasyWays gives employed Kenyans and
              entrepreneurs real, regulated credit, disbursed straight to M-Pesa.
            </p>
            <div className="reveal reveal-d3 mt-9 flex flex-wrap items-center gap-3">
              <a
                href={APPLY_URL}
                className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[14px] font-medium text-navy hover:bg-gold-soft transition-colors"
              >
                Apply for credit
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-[14px] font-medium text-white/90 hover:bg-white/5 transition-colors"
              >
                How it works
              </Link>
            </div>
            <div className="reveal reveal-d4 mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-xl">
              <HeroStat value="KSh 180M+" label="Disbursed to date" />
              <HeroStat value="4,500+" label="Customers served" />
              <HeroStat value="KSh 40,000" label="Avg. loan size" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="reveal reveal-d2 relative mx-auto max-w-md">
              <div className="absolute -inset-10 -z-10 bg-gold/10 blur-3xl rounded-full" />
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
                <img
                  src="/assets/hero-kenyan-notes.webp"
                  alt="EasyWays customer using the mobile experience"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              <div className="absolute -left-4 sm:-left-10 top-12 w-[230px] rounded-xl border border-white/10 bg-navy-deep/95 backdrop-blur p-4 shadow-2xl">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> Approved
                </div>
                <div className="mt-3 font-mono text-2xl text-white">KSh 45,000</div>
                <div className="mt-1 text-[11px] text-white/55">Emergency loan · 30 days</div>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-gold-soft">
                  <Icon name="check" className="h-3.5 w-3.5" /> Sent to M-Pesa
                </div>
              </div>
              <div className="absolute -right-2 sm:-right-8 bottom-10 w-[210px] rounded-xl border border-white/10 bg-white p-4 shadow-2xl">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate">Interest rate</span>
                  <span className="font-mono text-navy">5% / mo</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-slate">Tenure</span>
                  <span className="font-mono text-navy">3 months</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-slate">Repayment</span>
                  <span className="font-mono text-navy">KSh 51,750</span>
                </div>
                <div className="mt-3 h-1 w-full rounded bg-mist">
                  <div className="h-full w-2/3 rounded bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-xl sm:text-2xl text-gold-soft">{value}</div>
      <div className="mt-1 text-[11.5px] uppercase tracking-wider text-white/55">{label}</div>
    </div>
  );
}

function RegulatedStrip() {
  return (
    <section className="border-y border-border bg-mist/60">
      <div className="container-page py-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between text-[12px] text-slate">
        <div className="flex items-center gap-2">
          <Icon name="shield" className="h-4 w-4 text-success" />
          Regulated under the Central Bank of Kenya (Amendment) Act, 2021.
        </div>
        <div className="flex items-center gap-8">
          {["M-PESA", "CBK", "CRB", "DPA 2019"].map((label) => (
            <span key={label} className="font-mono text-navy/70">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section className="container-page py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-12 items-end">
        <div className="lg:col-span-7">
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate">Our products</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy text-balance">
            Credit designed for how Kenyans actually live and earn.
          </h2>
        </div>
        <p className="lg:col-span-5 text-[15px] text-slate leading-relaxed">
          Five products, one underwriting standard. Whether you're a salaried professional, a matatu
          owner, a check-off employee or a long-term crypto holder, our policies are built around
          real cash flows — not assumptions.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {productPreviews.map((product) => (
          <ProductPreviewCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductPreviewCard({ product }: { product: ProductPreview }) {
  const featured = product.featured;
  return (
    <Link
      to="/products"
      className={`group hover-lift block overflow-hidden rounded-lg border ${
        featured ? "border-gold/40 bg-navy text-white" : "border-border bg-white"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {featured && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-1 text-[10px] uppercase tracking-wider text-navy font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-navy" /> Most requested
          </div>
        )}
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2.5">
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${
              featured ? "bg-white/10 text-gold-soft" : "bg-mist text-navy"
            }`}
          >
            <Icon name={product.icon} className="h-4 w-4" />
          </span>
          <h3 className={`font-serif text-2xl ${featured ? "text-white" : "text-navy"}`}>
            {product.title}
          </h3>
        </div>
        <p
          className={`mt-3 text-[14.5px] leading-relaxed ${
            featured ? "text-white/70" : "text-slate"
          }`}
        >
          {product.desc}
        </p>
        <div
          className={`mt-6 grid grid-cols-3 gap-4 border-t pt-5 ${
            featured ? "border-white/10" : "border-border"
          }`}
        >
          <PreviewStat label="From" value={product.rate} featured={featured} />
          <PreviewStat label="Tenure" value={product.tenure} featured={featured} />
          <PreviewStat label="Max" value={product.max} featured={featured} />
        </div>
        <div
          className={`mt-6 inline-flex items-center gap-2 text-[13px] ${
            featured ? "text-gold-soft" : "text-navy"
          }`}
        >
          Learn more
          <Icon
            name="arrowRight"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}

function PreviewStat({
  label,
  value,
  featured,
}: {
  label: string;
  value: string;
  featured?: boolean;
}) {
  return (
    <div>
      <div
        className={`text-[10.5px] uppercase tracking-wider ${
          featured ? "text-white/45" : "text-slate"
        }`}
      >
        {label}
      </div>
      <div
        className={`mt-1 font-mono text-[13px] ${featured ? "text-gold-soft" : "text-navy"}`}
      >
        {value}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold-soft/80">
              Transparent pricing
            </div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-balance">
              No surprises. No hidden fees.
            </h2>
            <p className="mt-5 text-[15px] text-white/65 leading-relaxed max-w-md">
              Every quote we show is the quote you pay. Interest is disclosed monthly. Processing
              fees are capped. Early repayment carries no penalty.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 text-[13px] text-gold-soft hover:text-white"
            >
              See full rate card
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px]">
                  <thead className="bg-white/[0.04] text-[11px] uppercase tracking-[0.14em] text-white/55">
                    <tr>
                      <th className="px-6 py-4 font-medium">Product</th>
                      <th className="px-6 py-4 font-medium">Rate</th>
                      <th className="px-6 py-4 font-medium">Tenure</th>
                      <th className="px-6 py-4 font-medium text-right">Max</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {productPreviews.map((product) => (
                      <tr key={product.title}>
                        <td className="px-6 py-5">{product.title}</td>
                        <td className="px-6 py-5 font-mono text-gold-soft">{product.rate}</td>
                        <td className="px-6 py-5 font-mono text-white/80">{product.tenure}</td>
                        <td className="px-6 py-5 font-mono text-right text-white">{product.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-[11.5px] text-white/45 font-mono">
              APR varies by product and risk profile. Sample rates shown.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Apply in minutes",
    body: "Tell us who you are and what you need. Most applications take under 6 minutes.",
  },
  {
    n: "02",
    title: "Verified instantly",
    body: "We verify your identity against IPRS and pull a CRB report — no paperwork.",
  },
  {
    n: "03",
    title: "Funds to M-Pesa",
    body: "Once approved, money lands in your M-Pesa wallet within 15 minutes.",
  },
];

function ThreeSteps() {
  return (
    <section className="container-page py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate">How it works</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy text-balance">
            From application to M-Pesa in three steps.
          </h2>
        </div>
        <div className="lg:col-span-8 grid gap-px bg-border md:grid-cols-3 rounded-lg overflow-hidden">
          {steps.map((step) => (
            <div key={step.n} className="bg-white p-8">
              <div className="font-mono text-[12px] text-gold">{step.n}</div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-3 text-[14px] text-slate leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const compliance: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "CBK licensed",
    body: "Operating under the Central Bank of Kenya Digital Credit Provider framework.",
  },
  {
    icon: "lock",
    title: "Data Protection Act 2019",
    body: "Your personal data is stored encrypted, used only for credit decisioning.",
  },
  {
    icon: "scale",
    title: "Fair lending",
    body: "Caps on interest, fees and total cost of credit. No rolling overdue penalties.",
  },
  {
    icon: "recovery",
    title: "Responsible recovery",
    body: "Recovery practices governed by the CBK consumer protection guidelines.",
  },
];

function ComplianceGrid() {
  return (
    <section className="bg-mist/50 border-y border-border">
      <div className="container-page py-24 lg:py-28">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate">Built on compliance</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy text-balance">
            A licensed lender — with the policies to prove it.
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {compliance.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <Icon name={item.icon} className="h-5 w-5 text-gold" />
              <h3 className="mt-5 font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-[13.5px] text-slate leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="container-page py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-xl bg-navy text-white px-8 py-16 sm:px-16 sm:py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 gold-glow" />
        <div className="relative max-w-2xl">
          <Logo invert showWordmark={false} className="mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-balance">
            Ready when you are.
          </h2>
          <p className="mt-5 text-[15.5px] text-white/70 max-w-lg leading-relaxed">
            Apply in under 10 minutes. Get a decision in real time. Receive funds before your next
            meeting ends.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={APPLY_URL}
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[14px] font-medium text-navy hover:bg-gold-soft"
            >
              Start your application
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-[14px] font-medium text-white hover:bg-white/5"
            >
              Talk to a credit officer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
