import type { ContactFieldErrors, ContactPayload } from "@/types/portfolio";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(
  payload: ContactPayload,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!payload.name.trim()) {
    errors.name = "Le nom est requis.";
  }

  if (!payload.email.trim()) {
    errors.email = "L’e-mail est requis.";
  } else if (!EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = "L’e-mail n’est pas valide.";
  }

  if (!payload.subject.trim()) {
    errors.subject = "L’objet est requis.";
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildMailtoHref(
  to: string,
  payload: ContactPayload,
): string {
  const bodyLines = [
    `Nom : ${payload.name.trim()}`,
    `E-mail : ${payload.email.trim()}`,
    "",
    payload.message?.trim() || "(Aucun message)",
  ];

  const params = new URLSearchParams({
    subject: payload.subject.trim(),
    body: bodyLines.join("\n"),
  });

  return `mailto:${to}?${params.toString()}`;
}
