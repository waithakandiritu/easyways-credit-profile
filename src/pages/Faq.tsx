import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { PageHero } from "../components/PageHero";
import { Icon } from "../components/Icon";
import { Reveal, Stagger, StaggerItem } from "../components/Motion";
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
              <Reveal className="lg:col-span-3">
                <h2 className="font-serif text-2xl text-navy">{group.title}</h2>
              </Reveal>
              <Stagger
                delay={0.08}
                stagger={0.06}
                className="lg:col-span-9 divide-y divide-border border-y border-border"
              >
                {group.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </Stagger>
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
    <StaggerItem y={10}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-[15px] font-medium text-navy">{q}</span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-navy flex-shrink-0">
          <Icon name={open ? "minus" : "plus"} className="h-3.5 w-3.5" />
        </span>
      </button>
      {/* Animating to `height: auto` measures the real content, so long answers
          are never clipped the way a fixed max-height would clip them. */}
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] text-slate leading-relaxed max-w-3xl">{a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </StaggerItem>
  );
}
