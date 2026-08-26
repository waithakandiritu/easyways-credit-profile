import { PageHero } from "../components/PageHero";
import { Stagger, StaggerItem } from "../components/Motion";
import {
  privacyEffectiveDate,
  privacySections,
  termsSections,
  type LegalSection,
} from "../data/legal";

function SectionTable({ table }: { table: NonNullable<LegalSection["table"]> }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-[var(--radius)] border border-border">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[14px]">
        <thead>
          <tr className="bg-mist">
            {table.headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-[12px] uppercase tracking-[0.12em] text-navy font-medium"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("|")} className="border-t border-border align-top">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 leading-relaxed ${
                    i === 0 ? "text-navy font-medium" : "text-slate"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

              {section.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[15px] text-slate leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && <SectionTable table={section.table} />}

              {section.footnote && (
                <p className="mt-4 text-[15px] text-navy leading-relaxed">{section.footnote}</p>
              )}
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
      intro={`Effective from ${privacyEffectiveDate}. This policy explains how EasyWays Credit collects, uses, discloses and protects your personal data under the Kenya Data Protection Act, 2019.`}
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
