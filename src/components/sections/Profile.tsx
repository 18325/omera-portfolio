import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Profile() {
  return (
    <section className="section-wrap profile-section" id="profil">
      <SectionHeading
        eyebrow="Le fil conducteur"
        title="Ce qui tient quand tout bouge."
      />
      <Reveal className="profile-content">
        <p className="lead-copy">{profile.profileLead}</p>
        <div className="profile-details">
          {profile.profileBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
