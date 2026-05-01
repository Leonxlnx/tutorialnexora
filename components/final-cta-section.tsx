import { ArrowUpRight } from "lucide-react";

const footerLinks = ["Work", "Expertise", "Approach", "About", "Insights"];

export function FinalCtaSection() {
  return (
    <section className="final-section" id="contact" aria-label="Final call to action">
      <div className="section-rail" aria-hidden="true">
        <span className="rail-tick trust-tick-one" />
        <span className="rail-tick trust-tick-two" />
        <span className="rail-tick trust-tick-three" />
        <span className="rail-active trust-rail-active" />
      </div>

      <div className="final-copy">
        <p className="eyebrow">LET'S BUILD WHAT'S NEXT</p>
        <h2>
          Let's create
          <br />
          intelligence
          <br />
          that moves
          <br />
          <span className="nowrap">your business.</span>
        </h2>
        <p>
          Partner with Nexora to design and build AI products that deliver real
          impact.
        </p>
        <div className="final-actions" aria-label="Contact actions">
          <a className="button button-primary" href="#">
            <span>Start a project</span>
            <span className="button-icon" aria-hidden="true">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
          <a className="final-email" href="mailto:hello@nexora.ai">
            <span aria-hidden="true" />
            hello@nexora.ai
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="final-visual" aria-hidden="true">
        <img src="/images/section8.webp" alt="" />
      </div>

      <footer className="footer-bar" aria-label="Footer">
        <a className="brand footer-brand" href="#" aria-label="Nexora home">
          <span>NEXORA</span>
          <i aria-hidden="true" />
        </a>
        <nav className="footer-nav" aria-label="Footer menu">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={
                link === "Work"
                  ? "#work"
                  : link === "Expertise"
                    ? "#expertise"
                    : link === "Approach"
                      ? "#approach"
                      : "#"
              }
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="footer-legal">
          <p>
            © 2024 Nexora AI.
            <br />
            All rights reserved.
          </p>
          <span aria-hidden="true" />
          <a href="#">Privacy</a>
          <i aria-hidden="true" />
          <a href="#">Terms</a>
        </div>
      </footer>
    </section>
  );
}
