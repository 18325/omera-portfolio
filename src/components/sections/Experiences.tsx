import { experiences, internships } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";

export function Experiences() {
  return (
    <section className="experiences-section" id="experiences">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Expériences professionnelles"
          title="Un parcours construit dans l’action."
        />
        <ExperienceTimeline items={experiences} />

        <div className="internships-block" id="stages">
          <h3 className="subsection-title">Stages académiques</h3>
          <ExperienceTimeline items={internships} />
        </div>
      </div>
    </section>
  );
}
