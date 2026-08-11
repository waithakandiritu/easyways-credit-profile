import { PageHero } from "../components/PageHero";
import { Icon } from "../components/Icon";

export function Opportunities() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Build the future of fair credit in Kenya."
        intro="We are an equal opportunity provider where the right teams matter."
      />
      <section className="container-page py-24">
        <div className="grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-2">
          <div className="bg-white p-10">
            <Icon name="users" className="h-5 w-5 text-gold" />
            <h3 className="mt-5 font-serif text-2xl text-navy">Equal opportunity</h3>
            <p className="mt-3 text-[14.5px] text-slate leading-relaxed">
              We hire on merit, character and contribution. Background, gender, faith, ability or
              tribe never factor into our decisions — only the strength of the team you help us
              build.
            </p>
          </div>
          <div className="bg-white p-10">
            <Icon name="calendar" className="h-5 w-5 text-gold" />
            <h3 className="mt-5 font-serif text-2xl text-navy">Coming up</h3>
            <p className="mt-3 text-[14.5px] text-slate leading-relaxed">
              Upcoming opportunities shall be communicated soon. In the meantime, send your CV and a
              short note about how you'd add value — we keep a live pipeline.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-border bg-navy text-white p-10 sm:p-14 text-center">
          <Icon name="sparkles" className="h-6 w-6 text-gold-soft mx-auto" />
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">Reach our People &amp; Culture team</h2>
          <p className="mt-3 text-[15px] text-white/70">
            All applications and expressions of interest go to:
          </p>
          <a
            href="mailto:hr@easywayscredit.com"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[14px] font-medium text-navy hover:bg-gold-soft"
          >
            hr@easywayscredit.com
          </a>
        </div>
      </section>
    </>
  );
}
