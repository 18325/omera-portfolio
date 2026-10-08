import type { NavItem } from "@/types/portfolio";

export const mainNav: NavItem[] = [
  { href: "#profil", label: "Profil" },
  { href: "#experiences", label: "Expériences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#competences", label: "Compétences" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

/** Même navigation que le header, avec Accueil en plus. */
export const footerNav: NavItem[] = [
  { href: "#accueil", label: "Accueil" },
  ...mainNav,
];
