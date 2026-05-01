import { ArrowUpRight } from "lucide-react";

const logoItems = [
  { name: "stripe", kind: "text" },
  { name: "Notion", src: "/logos/notion.svg", kind: "image-text" },
  { name: "Dafiti", src: "/logos/dafiti.svg", kind: "image" },
  { name: "replit", src: "/logos/replit.svg", kind: "image-text" },
  { name: "Vanta", src: "/logos/vanta.svg", kind: "image" },
  { name: "Brex", src: "/logos/brex.svg", kind: "image-text" },
];

const stats = [
  ["30+", "AI products", "delivered"],
  ["98%", "Client satisfaction", "rate"],
  ["40%", "Avg. improvement in", "model performance"],
];

function BrandLogo({
  name,
  src,
  kind,
}: {
  name: string;
  src?: string;
  kind: string;
}) {
  if (kind === "image") {
    return <img className="brand-logo-img logo-img-full" src={src} alt={name} />;
  }

  if (kind === "image-text") {
    return (
      <span className="brand-logo-lockup">
        <img className="brand-logo-img" src={src} alt="" aria-hidden="true" />
        <span>{name}</span>
      </span>
    );
  }

  return <span className={`brand-logo-text ${kind}`}>{name}</span>;
}

export function TrustSection() {
  return (
    <section className="trust-section" id="work" aria-label="Trusted by innovators">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-tick trust-tick-four" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="trust-copy">
        <p className="eyebrow">TRUSTED BY INNOVATORS</p>
        <h2>
          Built with trust.
          <br />
          Backed by results.
        </h2>
        <p>
          We partner with forward-thinking teams to design and build AI products
          that create measurable impact.
        </p>
        <div className="hero-actions trust-actions" aria-label="Trust section actions">
          <a className="button button-primary" href="#">
            <span>Start a project</span>
            <span className="button-icon" aria-hidden="true">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
          <a className="button button-secondary" href="#">
            <span>View our approach</span>
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="trust-proof">
        <div className="trust-proof-label">TRUSTED BY</div>
        <div className="trust-logos" aria-label="Client logos">
          {logoItems.map((logo) => (
            <BrandLogo
              key={logo.name}
              name={logo.name}
              src={logo.src}
              kind={logo.kind}
            />
          ))}
        </div>
        <div className="trust-stats">
          {stats.map(([value, lineOne, lineTwo]) => (
            <div className="trust-stat" key={value}>
              <strong>{value}</strong>
              <span>{lineOne}</span>
              <span>{lineTwo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-two-artwork" aria-hidden="true" />
    </section>
  );
}
