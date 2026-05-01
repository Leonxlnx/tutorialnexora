import { ArrowUpRight } from "lucide-react";

const solutionCards = [
  {
    number: "01",
    title: "AI Product Strategy",
    text: "Identify opportunities, define use cases, and build roadmaps that deliver impact.",
    image: "/images/section3-1.png",
    size: "large",
  },
  {
    number: "02",
    title: "AI Experience Design",
    text: "Design intuitive AI experiences that build trust and drive meaningful outcomes.",
    image: "/images/section3-2.png",
    size: "wide",
  },
  {
    number: "03",
    title: "Workflow Automation",
    text: "Automate processes and integrate AI seamlessly into your operations.",
    image: "/images/section3-3.png",
    size: "small",
  },
  {
    number: "04",
    title: "AI Prototyping & Validation",
    text: "Rapid prototypes and testing to validate ideas and reduce risk early.",
    image: "/images/section3-4.png",
    size: "small",
  },
];

export function SolutionsSection() {
  return (
    <section className="solutions-section" id="expertise" aria-label="AI solutions">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-tick trust-tick-four" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="solutions-copy">
        <p className="eyebrow">WHAT WE DO</p>
        <h2>
          AI solutions
          <br />
          that solve real
          <br />
          problems.
        </h2>
        <p>
          Strategy, design and engineering for AI products people love to use.
        </p>
        <div className="hero-actions solutions-actions" aria-label="Solutions actions">
          <a className="button button-primary" href="#">
            <span>Start a project</span>
            <span className="button-icon" aria-hidden="true">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
          <a className="button button-secondary" href="#work">
            <span>View our work</span>
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="solutions-grid" aria-label="AI service cards">
        {solutionCards.map((card) => (
          <article className={`solution-card solution-card-${card.size}`} key={card.number}>
            <img src={card.image} alt="" aria-hidden="true" />
            <div className="solution-card-content">
              <span>{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="#" aria-label={`${card.title} details`}>
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="solutions-note" aria-hidden="true">
        <span />
        <p>Human centered. AI powered.</p>
      </div>
    </section>
  );
}
