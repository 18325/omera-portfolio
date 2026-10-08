import { profile } from "@/data/profile";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Domaines d’intervention">
      {profile.proofPoints.map((point) => (
        <div key={point.number}>
          <strong>{point.number}</strong>
          <span>{point.label}</span>
        </div>
      ))}
      <div className="proof-statement">{profile.proofStatement}</div>
    </section>
  );
}
