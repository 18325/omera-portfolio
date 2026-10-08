import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="quote-section" aria-label="Citation">
      <Reveal>
        <div className="quote-mark" aria-hidden="true">
          “
        </div>
        <blockquote>{profile.quote}</blockquote>
        <p>{profile.quoteSupport}</p>
      </Reveal>
    </section>
  );
}
