import { profile } from "@/data/profile";
import { footerNav } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <div className="footer-brand__text">
              <p className="footer-name">{profile.fullName}</p>
              <p className="footer-role">{profile.role}</p>
              <p className="footer-tagline">{profile.tagline}</p>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Navigation pied de page">
            <p className="footer-col-label">Parcourir</p>
            {footerNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-actions">
            <p className="footer-col-label">Agir</p>
            <a href={profile.cvPath} download>
              Télécharger le CV ↗
            </a>
            <a href={`mailto:${profile.email}`}>Écrire un e-mail ↗</a>
            <a href="#accueil">Retour en haut ↑</a>
            <span className="footer-location">{profile.location}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {profile.fullName}</span>
          <span>Construire. Relier. Avancer.</span>
        </div>
      </div>
    </footer>
  );
}
