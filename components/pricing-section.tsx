import { ArrowUpRight } from "lucide-react";

const plans = [
  {
    number: "01",
    title: "Pilot Sprint",
    text: "Validate your idea with speed and clarity.",
    value: "From $8k",
    valueNote: "fixed-scope sprint",
    bullets: ["2-4 week engagement", "Focused use case", "Strategy & prototype"],
    featured: false,
  },
  {
    number: "02",
    title: "Build & Scale",
    text: "End-to-end development for lasting impact.",
    value: "From $24k",
    valueNote: "production delivery",
    bullets: ["Custom AI solution", "Full-cycle delivery", "Integration & training"],
    featured: true,
  },
  {
    number: "03",
    title: "Retained Partner",
    text: "Ongoing AI innovation and continuous growth.",
    value: "Custom",
    valueNote: "monthly partnership",
    bullets: ["Monthly partnership", "Continuous optimization", "Priority support"],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="pricing-section" id="pricing" aria-label="Pricing and engagement models">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-tick trust-tick-four" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="pricing-copy">
        <p className="eyebrow">PRICING / ENGAGEMENT MODELS</p>
        <h2>
          Flexible
          <br />
          engagements.
          <br />
          Real outcomes.
        </h2>
        <p>
          Choose the model that fits your goals.
          <br />
          Scale as you grow.
        </p>
      </div>

      <div className="pricing-cards" aria-label="Engagement plans">
        {plans.map((plan) => (
          <article className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`} key={plan.title}>
            <div className="pricing-card-top">
              <span className="pricing-number">{plan.number}</span>
              {plan.featured ? <span className="pricing-badge">Recommended</span> : null}
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.text}</p>
            <div className="pricing-value">
              <strong>{plan.value}</strong>
              <span>{plan.valueNote}</span>
            </div>
            <ul>
              {plan.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a className={plan.featured ? "pricing-button pricing-button-primary" : "pricing-button"} href="#">
              <span>Learn more</span>
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className="pricing-visual" aria-hidden="true">
        <img src="/images/section7.webp" alt="" />
      </div>

      <div className="pricing-note" aria-hidden="true">
        <span />
        <p>
          All engagements include
          <br />
          strategy, design & ongoing support.
        </p>
      </div>
    </section>
  );
}
