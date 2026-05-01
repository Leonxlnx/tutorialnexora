import { ArrowUpRight } from "lucide-react";

const resultMetrics = [
  {
    label: "TIME TO VALUE",
    value: "3.2x",
    caption: "faster",
  },
  {
    label: "MODEL ACCURACY",
    value: "+21%",
    caption: "average lift",
  },
];

const testimonials = [
  {
    quote:
      "Nexora helped us go from prototype to production in record time. The results speak for themselves.",
    name: "Emily Park",
    role: "Head of Product, Altura",
  },
  {
    quote:
      "Their team combines deep AI expertise with a product mindset. A true partner.",
    name: "Daniel Kim",
    role: "CTO, Veridian",
  },
];

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials" aria-label="Testimonials and results">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-tick trust-tick-four" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="testimonials-copy">
        <p className="eyebrow">TESTIMONIALS / RESULTS</p>
        <h2>
          Real impact.
          <br />
          Trusted by builders.
        </h2>
        <p>
          We partner with forward-thinking teams to deliver AI products that
          perform.
        </p>

        <div className="results-metrics" aria-label="Results metrics">
          {resultMetrics.map((metric) => (
            <div className="result-metric" key={metric.label}>
              <span className="result-label">
                <i aria-hidden="true" />
                {metric.label}
              </span>
              <strong>{metric.value}</strong>
              <span>{metric.caption}</span>
            </div>
          ))}
        </div>

        <a className="case-more-link" href="#case-study">
          <span aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={2} />
          </span>
          View more case studies
        </a>
      </div>

      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <blockquote className="testimonial-quote" key={testimonial.name}>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <p>{testimonial.quote}</p>
            <span className="quote-rule" aria-hidden="true" />
            <cite>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </cite>
          </blockquote>
        ))}
      </div>

      <div className="testimonial-visual" aria-hidden="true">
        <img src="/images/section6.png" alt="" />
      </div>
    </section>
  );
}
