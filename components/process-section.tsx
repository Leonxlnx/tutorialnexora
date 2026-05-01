const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We learn your goals, users, and challenges.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "We define the right AI solution and roadmap.",
  },
  {
    number: "03",
    title: "Build",
    text: "We design, train, and build with precision.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We measure, refine, and continuously improve.",
  },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="approach" aria-label="Our process">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-tick trust-tick-four" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="process-copy">
        <p className="eyebrow">OUR PROCESS</p>
        <h2>
          From insight
          <br />
          to impact.
        </h2>
        <p>A human-centered process powered by AI.</p>
      </div>

      <div className="process-steps" aria-label="Process steps">
        {processSteps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>
            <span className="process-marker" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>

      <div className="process-visual" aria-hidden="true">
        <img src="/images/section5.png" alt="" />
      </div>

      <div className="process-note" aria-hidden="true">
        <span />
        <p>Collaborative. Transparent. Results-driven.</p>
      </div>
    </section>
  );
}
