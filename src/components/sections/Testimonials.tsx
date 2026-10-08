import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="section-wrap testimonials-section" id="temoignages">
      <SectionHeading
        eyebrow="Témoignages"
        title="Une présence qui rassure et fait avancer."
      />
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delayMs={index * 70}>
            <figure>
              <blockquote>« {item.quote} »</blockquote>
              <figcaption>
                {item.author}
                <span> · {item.context}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
