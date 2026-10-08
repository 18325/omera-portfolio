import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildMailtoHref,
  hasContactErrors,
  validateContactPayload,
} from "../src/lib/contact";
import { experiences, internships } from "../src/data/experiences";
import { profile } from "../src/data/profile";
import { spokenLanguages } from "../src/data/skills";
import { testimonials } from "../src/data/testimonials";

describe("validateContactPayload", () => {
  it("rejects empty required fields", () => {
    const errors = validateContactPayload({
      name: " ",
      email: "",
      subject: "",
    });

    assert.equal(errors.name, "Le nom est requis.");
    assert.equal(errors.email, "L’e-mail est requis.");
    assert.equal(errors.subject, "L’objet est requis.");
    assert.equal(hasContactErrors(errors), true);
  });

  it("rejects invalid email", () => {
    const errors = validateContactPayload({
      name: "Ada",
      email: "pas-un-email",
      subject: "Projet",
    });

    assert.equal(errors.email, "L’e-mail n’est pas valide.");
  });

  it("accepts a valid payload", () => {
    const errors = validateContactPayload({
      name: "Ada Lovelace",
      email: "ada@example.com",
      subject: "Collaboration",
      message: "Bonjour",
    });

    assert.deepEqual(errors, {});
    assert.equal(hasContactErrors(errors), false);
  });
});

describe("buildMailtoHref", () => {
  it("builds a mailto link with encoded subject and body", () => {
    const href = buildMailtoHref("hinsonoceane@gmail.com", {
      name: "Ada",
      email: "ada@example.com",
      subject: "Nouveau projet",
      message: "Parlons-en",
    });

    assert.match(href, /^mailto:hinsonoceane@gmail\.com\?/);
    assert.match(href, /subject=Nouveau\+projet/);
    assert.match(href, /Nom\+%3A\+Ada/);
  });
});

describe("portfolio data integrity", () => {
  it("keeps contact and CV paths consistent", () => {
    assert.equal(profile.email, "hinsonoceane@gmail.com");
    assert.equal(profile.cvPath, "/cv-oceane-hinson.pdf");
    assert.ok(profile.phones.length >= 2);
  });

  it("exposes experiences and internships with tasks", () => {
    assert.ok(experiences.length >= 5);
    assert.ok(internships.length >= 2);

    for (const item of [...experiences, ...internships]) {
      assert.ok(item.role.length > 0);
      assert.ok(item.organization.length > 0);
      assert.ok(item.tasks.length > 0);
    }
  });

  it("labels spoken languages with levels", () => {
    assert.equal(spokenLanguages.length, 4);
    for (const language of spokenLanguages) {
      assert.ok(language.name);
      assert.ok(language.level);
    }
  });

  it("includes testimonials", () => {
    assert.ok(testimonials.length >= 2);
  });
});
