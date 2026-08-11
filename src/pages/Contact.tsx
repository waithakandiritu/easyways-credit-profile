import type { ReactNode } from "react";
import { PageHero } from "../components/PageHero";
import { Icon, type IconName } from "../components/Icon";
import { Reveal, Stagger, StaggerItem } from "../components/Motion";

const inputClass =
  "w-full rounded-md border border-border bg-white px-4 py-2.5 text-[14px] text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach a real person at Trio Complex."
        intro="Our credit officers are available six days a week, in person, on the phone and on WhatsApp."
      />
      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Stagger as="aside" className="lg:col-span-5 space-y-8">
            <ContactRow
              icon="mapPin"
              label="Head office"
              lines={["Trio Complex, Thika Road", "Behind Garden City Mall", "Nairobi, Kenya"]}
            />
            <ContactRow
              icon="phone"
              label="Phone"
              mono
              lines={["+254 734 641 449", "+254 786 189 755", "+254 100 974 188"]}
            />
            <ContactRow
              icon="whatsapp"
              label="WhatsApp"
              mono
              lines={["+254 734 641 449"]}
              action={{ label: "Open WhatsApp", href: "https://wa.me/254734641449" }}
            />
            <ContactRow
              icon="mail"
              label="Email"
              lines={["support@easywayscredit.com", "contact@easywayscredit.com"]}
            />
            <ContactRow
              icon="clock"
              label="Business hours"
              lines={["Mon – Fri · 8:00 – 18:00", "Sat · 9:00 – 14:00", "Sun · Closed"]}
            />
          </Stagger>

          <div className="lg:col-span-7">
            <Reveal
              as="form"
              delay={0.12}
              y={24}
              className="rounded-xl border border-border bg-white p-8 sm:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name">
                  <input className={inputClass} placeholder="Jane Wanjiku" />
                </Field>
                <Field label="Phone">
                  <input className={inputClass} placeholder="+254 7..." />
                </Field>
              </div>
              <Field label="Email">
                <input type="email" className={inputClass} placeholder="you@example.com" />
              </Field>
              <Field label="What can we help with?">
                <select className={inputClass} defaultValue="General enquiry">
                  <option>General enquiry</option>
                  <option>Loan application</option>
                  <option>Repayment</option>
                  <option>Complaint</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us a bit about what you need."
                />
              </Field>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-[13.5px] font-medium text-white hover:bg-navy-deep"
              >
                Send message
              </button>
            </Reveal>
          </div>
        </div>

        <Reveal y={24} className="mt-20 overflow-hidden rounded-xl border border-border">
          <iframe
            title="EasyWays Credit office location — Trio Complex, Thika Road, behind Garden City Mall"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.8780%2C-1.2350%2C36.9000%2C-1.2200&layer=mapnik&marker=-1.2275%2C36.8890"
            className="w-full h-[420px] border-0"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  lines,
  mono,
  action,
}: {
  icon: IconName;
  label: string;
  lines: string[];
  mono?: boolean;
  action?: { label: string; href: string };
}) {
  return (
    <StaggerItem y={12}>
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy text-gold-soft">
          <Icon name={icon} className="h-4 w-4" />
        </span>
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate">{label}</div>
      </div>
      <div className={`mt-3 space-y-1 text-[14.5px] text-navy ${mono ? "font-mono" : ""}`}>
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
      {action && (
        <a
          href={action.href}
          className="mt-3 inline-flex items-center gap-2 text-[13px] text-navy hover:text-gold"
        >
          {action.label}
          <Icon name="arrowRight" className="h-3.5 w-3.5" />
        </a>
      )}
    </StaggerItem>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.14em] text-slate">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
