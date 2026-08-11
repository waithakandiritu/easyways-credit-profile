import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Icon } from "../components/Icon";
import { faqGroups } from "../data/faq";

export function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Questions, answered plainly."
        intro="If your question isn't here, our credit team responds to every WhatsApp message within 15 minutes during working hours."
      />
      <section className="container-page py-24">
        <div className="space-y-16">
          {faqGroups.map((group) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <h2 className="font-serif text-2xl text-navy">{group.title}</h2>
              </div>
              <div className="lg:col-span-9 divide-y divide-border border-y border-border">
                {group.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-[15px] font-medium text-navy">{q}</span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-navy flex-shrink-0">
          <Icon name={open ? "minus" : "plus"} className="h-3.5 w-3.5" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-[14px] text-slate leading-relaxed max-w-3xl">{a}</p>
      </div>
    </div>
  );
}
