import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Contact"
          title="Écrivons-nous pour avancer ensemble."
        />

        <div className="contact-layout">
          <Reveal className="contact-copy">
            <p className="contact-intro">
              Vous cherchez une personne fiable pour coordonner, représenter ou
              développer un projet ? Laissez un message — je vous répondrai avec
              attention.
            </p>

            <div className="contact-info">
              <div>
                <span className="contact-label">E-mail</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span className="contact-label">Téléphone</span>
                {profile.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.display}
                  </a>
                ))}
              </div>
              <div>
                <span className="contact-label">Adresse</span>
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="social-links">
              <span className="contact-label">Réseaux</span>
              <div className="social-links__row">
                {socialLinks
                  .filter((link) => link.id !== "email")
                  .map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
