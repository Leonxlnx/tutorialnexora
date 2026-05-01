import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const caseStats = [
  ["+28%", "Early intervention", "rate"],
  ["-18%", "30-day readmission", "rate"],
  ["$3.2M", "Annual impact", "estimated"],
];

export function CaseStudySection() {
  return (
    <section className="case-section" id="case-study" aria-label="Case study">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-tick trust-tick-four" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="case-copy">
        <p className="case-label">
          <span />
          CASE STUDY
        </p>
        <h2>
          Predict. Prioritize.
          <br />
          <em>Perform.</em>
        </h2>
        <p>
          We partnered with a healthcare network to build an AI platform that
          predicts patient deterioration 48 hours in advance-so care teams can
          act earlier and save more lives.
        </p>

        <div className="case-stats">
          {caseStats.map(([value, lineOne, lineTwo]) => (
            <div className="case-stat" key={value}>
              <strong>{value}</strong>
              <span>{lineOne}</span>
              <span>{lineTwo}</span>
            </div>
          ))}
        </div>

        <div className="case-actions" aria-label="Case study actions">
          <a className="button button-primary" href="#">
            <span>View case study</span>
            <span className="button-icon" aria-hidden="true">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
          <a className="case-link" href="#work">
            <span>See all work</span>
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="case-visual" aria-hidden="true">
        <img src="/images/section4.png" alt="" />
      </div>

      <div className="case-pager" aria-hidden="true">
        <button type="button">
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <span>1 / 6</span>
        <button className="case-pager-next" type="button">
          <ArrowRight size={22} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
