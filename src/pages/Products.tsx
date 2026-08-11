import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Icon } from "../components/Icon";
import { Reveal, Stagger, StaggerItem } from "../components/Motion";
import { products, type Product } from "../data/products";
import { APPLY_URL } from "../data/nav";

export function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Five products, one underwriting standard."
        intro="Whether you need overnight liquidity or a multi-year facility, our credit policies are built around real Kenyan cash flows — and disclosed in full before you sign."
      />
      <div className="container-page py-24 space-y-28">
        {products.map((product, i) => (
          <ProductBlock key={product.id} product={product} reversed={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}

function ProductBlock({ product, reversed }: { product: Product; reversed: boolean }) {
  const stats = [
    { label: "From", value: product.rate },
    { label: "Max", value: product.max },
    { label: "Tenure", value: product.tenure },
    { label: "Processing", value: product.processing },
  ];

  return (
    <section id={product.id} className="scroll-mt-24">
      <div
        className={`grid gap-12 lg:grid-cols-12 lg:gap-16 items-center ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal y={24} className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={product.img}
              alt={product.title}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            {product.featured && (
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[10px] uppercase tracking-wider text-navy font-medium">
                Featured product
              </div>
            )}
          </div>
        </Reveal>

        <Stagger delay={0.1} className="lg:col-span-6">
          <StaggerItem className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy text-gold-soft">
              <Icon name={product.icon} className="h-[18px] w-[18px]" />
            </span>
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate">Product</div>
          </StaggerItem>
          <StaggerItem as="h2" className="mt-4 font-serif text-3xl sm:text-4xl text-navy">
            {product.title}
          </StaggerItem>
          <StaggerItem as="p" className="mt-3 text-[15px] text-slate leading-relaxed">
            {product.tagline}
          </StaggerItem>

          <StaggerItem className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-4">
                <div className="text-[10.5px] uppercase tracking-wider text-slate">{stat.label}</div>
                <div className="mt-1 font-mono text-[13px] text-navy">{stat.value}</div>
              </div>
            ))}
          </StaggerItem>

          <StaggerItem className="mt-8 grid gap-8 sm:grid-cols-2">
            <RequirementList title="Eligibility" items={product.eligibility} />
            <RequirementList title="What you'll need" items={product.requirements} />
          </StaggerItem>

          <StaggerItem className="mt-8 rounded-lg border border-border bg-mist/40 p-5">
            <div className="text-[10.5px] uppercase tracking-wider text-slate">
              Repayment example
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[13px]">
              <ExampleStat k="Principal" v={product.example.principal} />
              <ExampleStat k="Tenure" v={product.example.tenure} />
              <ExampleStat k="Per month" v={product.example.monthly} />
              <ExampleStat k="Total payable" v={product.example.total} highlight />
            </div>
          </StaggerItem>

          <StaggerItem className="mt-8 flex flex-wrap gap-3">
            <a
              href={APPLY_URL}
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-[13.5px] font-medium text-white hover:bg-navy-deep"
            >
              Apply for this product
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-[13.5px] font-medium text-navy hover:bg-mist"
            >
              Talk to an officer
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function RequirementList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.18em] text-navy">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate">
            <Icon name="check" className="mt-0.5 h-4 w-4 text-gold flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExampleStat({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-wider text-slate">{k}</div>
      <div className={`mt-1 font-mono ${highlight ? "text-gold" : "text-navy"}`}>{v}</div>
    </div>
  );
}
