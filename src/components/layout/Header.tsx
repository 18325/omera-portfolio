"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { mainNav } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <a
          className="brand"
          href="#accueil"
          aria-label="Retour à l’accueil"
          onClick={closeMenu}
        >
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.shortName}</span>
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-link" href={profile.cvPath} download>
          Télécharger le CV <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navigation mobile">
          {mainNav.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href={profile.cvPath} download onClick={closeMenu}>
            Télécharger le CV
          </a>
        </nav>
      </div>
    </header>
  );
}
