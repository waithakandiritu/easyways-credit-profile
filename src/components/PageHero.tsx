import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
};

/** Dark navy hero band reused across interior pages. */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white border-b border-white/5">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 gold-glow" />
      <div className="container-page relative py-20 lg:py-28">
        <div className="reveal text-[11px] uppercase tracking-[0.2em] text-gold-soft/85">
          {eyebrow}
        </div>
        <h1 className="reveal reveal-d1 mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl max-w-3xl text-balance">
          {title}
        </h1>
        {intro && (
          <p className="reveal reveal-d2 mt-6 max-w-2xl text-[15.5px] text-white/70 leading-relaxed">
            {intro}
          </p>
        )}
        {children && <div className="reveal reveal-d3 mt-8">{children}</div>}
      </div>
    </section>
  );
}
