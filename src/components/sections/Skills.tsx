import {
  interests,
  spokenLanguages,
  technicalSkills,
} from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section className="section-wrap skills-section" id="competences">
      <SectionHeading
        eyebrow="Compétences"
        title="Des outils concrets, une vraie adaptabilité."
      />

      <div className="skills-cards">
        <Reveal className="skill-card">
          <span className="skill-number">01</span>
          <h3>{technicalSkills.title}</h3>
          <ul className="skill-list">
            {technicalSkills.items.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="skill-card" delayMs={80}>
          <span className="skill-number">02</span>
          <h3>Langues parlées</h3>
          <ul className="language-list">
            {spokenLanguages.map((lang) => (
              <li key={lang.name}>
                <span>{lang.name}</span>
                <strong>{lang.level}</strong>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="skill-card" delayMs={140}>
          <span className="skill-number">03</span>
          <h3>Centres d’intérêt</h3>
          <ul className="skill-list">
            {interests.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
