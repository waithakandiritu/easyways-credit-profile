import { PageHero } from "../components/PageHero";
import { Icon, type IconName } from "../components/Icon";
import { team } from "../data/team";

const stats = [
  { value: "KSh 180M+", label: "Disbursed since 2021" },
  { value: "4,500+", label: "Active borrowers" },
  { value: "98.6%", label: "Customer-rated trust score" },
  { value: "KSh 40,000", label: "Average loan size" },
];

const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "target",
    title: "Our mission",
    body: "To give every credit-worthy Kenyan access to fast, fair, regulated credit — disbursed in minutes, not days.",
  },
  {
    icon: "heart",
    title: "Our values",
    body: "Honest pricing. Plain language. Recovery practices we'd be comfortable explaining to our own mothers.",
  },
  {
    icon: "shield",
    title: "Our promise",
    body: "If we cannot lend to you responsibly, we will tell you why — and what to do next.",
  },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A licensed Kenyan lender, built by Kenyans, for Kenyans."
        intro="EasyWays Credit Limited is a digital credit provider regulated by the Central Bank of Kenya. We exist to give working Kenyans, entrepreneurs and digital asset holders access to fair, transparent credit — without paperwork queues or hidden fees."
      />

      {/* Story */}
      <section className="container-page py-24">
        <div className="grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <img
              src="/assets/about-office.jpg"
              alt="EasyWays Nairobi office"
              loading="lazy"
              className="rounded-xl w-full aspect-[4/3] object-cover border border-border"
            />
          </div>
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate">Our story</div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
              From a Thika Road office, to KSh 180 million disbursed.
            </h2>
            <div className="mt-5 space-y-4 text-[15px] text-slate leading-relaxed">
              <p>
                EasyWays was founded by a team of former bankers and engineers who watched too many
                qualified Kenyans get turned away by traditional lenders. We started with a single
                product — emergency loans — operating from a small office at Trio Complex on Thika
                Road, behind Garden City Mall.
              </p>
              <p>
                Today we serve over 4,500+ customers across five credit products, with a credit team
                and a customer operations group based in Nairobi, audited quarterly under the Central
                Bank of Kenya's Digital Credit Provider framework.
              </p>
              <p>
                We're still based at Trio Complex — now in a bigger space, 2nd Floor, Room 2-01. We
                still answer the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / values / promise */}
      <section className="bg-mist/50 border-y border-border">
        <div className="container-page py-24 grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-10">
              <Icon name={value.icon} className="h-5 w-5 text-gold" />
              <h3 className="mt-5 font-serif text-2xl text-navy">{value.title}</h3>
              <p className="mt-3 text-[14px] text-slate leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate">Leadership</div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
            The people accountable for your money.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-lg border border-border bg-white p-6">
              <div className="text-[15px] font-semibold tracking-tight text-navy">
                {member.name}
              </div>
              <div className="mt-1 text-[12px] uppercase tracking-[0.14em] text-gold">
                {member.role}
              </div>
              <p className="mt-3 text-[13px] text-slate leading-relaxed">{member.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy text-white">
        <div className="container-page py-20 grid gap-8 lg:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-2xl text-gold-soft">{stat.value}</div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.16em] text-white/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
