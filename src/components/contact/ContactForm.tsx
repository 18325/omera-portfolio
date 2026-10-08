"use client";

import { useState, type FormEvent } from "react";
import {
  buildMailtoHref,
  hasContactErrors,
  validateContactPayload,
} from "@/lib/contact";
import type { ContactFieldErrors, ContactPayload } from "@/types/portfolio";
import { profile } from "@/data/profile";

const initialValues: ContactPayload = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof ContactPayload>(
    key: K,
    value: ContactPayload[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactPayload(values);
    setErrors(nextErrors);

    if (hasContactErrors(nextErrors)) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok: boolean;
        mailto?: string;
        errors?: ContactFieldErrors;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }

      const mailto =
        data.mailto ?? buildMailtoHref(profile.email, values);
      window.location.href = mailto;
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">
        Nom complet
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Votre nom"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          required
        />
        {errors.name ? <span className="field-error">{errors.name}</span> : null}
      </label>

      <label htmlFor="email">
        Adresse e-mail
        <input
          id="email"
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          required
        />
        {errors.email ? (
          <span className="field-error">{errors.email}</span>
        ) : null}
      </label>

      <label htmlFor="subject">
        Objet
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Parlons de votre projet"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          required
        />
        {errors.subject ? (
          <span className="field-error">{errors.subject}</span>
        ) : null}
      </label>

      <label htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Quelques mots sur votre besoin…"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>

      <button
        className="button button-dark"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi…" : "Envoyer le message"}
        <span aria-hidden="true">→</span>
      </button>

      {status === "success" ? (
        <p className="form-status form-status--success" role="status">
          Votre client e-mail va s’ouvrir pour finaliser l’envoi.
        </p>
      ) : null}
      {status === "error" && !hasContactErrors(errors) ? (
        <p className="form-status form-status--error" role="alert">
          Une erreur est survenue. Réessayez ou écrivez directement à{" "}
          {profile.email}.
        </p>
      ) : null}
    </form>
  );
}
