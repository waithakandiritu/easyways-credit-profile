import { PageHero } from "../components/PageHero";
import { Stagger, StaggerItem } from "../components/Motion";
import { privacySections, termsSections, type LegalSection } from "../data/legal";

function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} />
      <section className="container-page py-24">
        <Stagger stagger={0.06} className="max-w-3xl mx-auto space-y-10">
          {sections.map((section) => (
            <StaggerItem as="article" key={section.title} y={12}>
              <h2 className="font-serif text-2xl text-navy">{section.title}</h2>
              <p className="mt-3 text-[15px] text-slate leading-relaxed">{section.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Effective from 1 January 2026. This policy explains how we collect, use, store and protect your personal data."
      sections={privacySections}
    />
  );
}

export function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Effective from 1 January 2026. These terms govern your use of EasyWays Credit services."
      sections={termsSections}
    />
  );
}
