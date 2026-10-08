import { education } from "@/data/education";
import { formations } from "@/data/formations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickyScroll } from "@/components/ui/StickyScroll";
import type { StickyScrollItem } from "@/components/ui/StickyScroll";

const panelThemes = [
  "panel-ink",
  "panel-accent",
  "panel-signal",
  "panel-soft",
  "panel-forest",
  "panel-mist",
] as const;

function buildPathwayItems(): StickyScrollItem[] {
  const educationItems: StickyScrollItem[] = education.map((item, index) => ({
    id: item.id,
    title: item.title,
    meta: `${item.period} · Éducation`,
    description: item.institution,
    panel: (
      <div className={`pathway-panel ${panelThemes[index % panelThemes.length]}`}>
        <span className="pathway-panel__kind">Éducation</span>
        <strong>{item.period}</strong>
        <p>{item.title}</p>
      </div>
    ),
  }));

  const formationItems: StickyScrollItem[] = formations.map((item, index) => ({
    id: item.id,
    title: item.title,
    meta: `${item.period}${item.ongoing ? " · En cours" : ""} · Formation`,
    description: item.provider
      ? `${item.provider}. Une étape qui renforce son agilité et sa capacité à créer du lien.`
      : "Une formation choisie pour élargir ses outils et affiner sa présence professionnelle.",
    panel: (
      <div
        className={`pathway-panel ${
          panelThemes[(index + educationItems.length) % panelThemes.length]
        }`}
      >
        <span className="pathway-panel__kind">
          {item.ongoing ? "En cours" : "Formation"}
        </span>
        <strong>{item.period}</strong>
        <p>{item.title}</p>
        {item.provider ? (
          <span className="pathway-panel__provider">{item.provider}</span>
        ) : null}
      </div>
    ),
  }));

  return [...educationItems, ...formationItems];
}

export function Pathway() {
  const items = buildPathwayItems();

  return (
    <section className="pathway-section" id="parcours">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Formation & éducation"
          title="Des bases solides, une curiosité continue."
        />
        <StickyScroll items={items} />
      </div>
    </section>
  );
}
