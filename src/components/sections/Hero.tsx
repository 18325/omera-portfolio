import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="hero section-wrap" id="accueil">
      <Reveal className="hero-copy">
        <p className="eyebrow">{profile.tagline}</p>
        <h1 className="hero-brand">{profile.heroHeadline}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.heroSubline}</p>
        <p className="hero-support">{profile.heroSupport}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            Parlons de votre projet <span aria-hidden="true">→</span>
          </a>
          <a className="text-link" href="#experiences">
            Découvrir mon parcours <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href={profile.cvPath} download>
            Télécharger le CV
          </a>
        </div>
        <div className="hero-note">
          <span className="status-dot" />
          {profile.availability}
        </div>
      </Reveal>

      <Reveal className="hero-portrait" delayMs={120}>
        <div className="portrait-plane" aria-hidden="true" />
        <div className="portrait-initials">{profile.initials}</div>
        <div className="portrait-caption">
          <span>{profile.age} ans</span>
          <span>{profile.location}</span>
        </div>
      </Reveal>
    </section>
  );
}
