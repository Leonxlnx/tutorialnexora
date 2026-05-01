import { ArrowUpRight } from "lucide-react";

const navItems = ["Work", "Expertise", "Approach", "About", "Insights"];

export function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="Nexora home">
        <span>NEXORA</span>
        <i aria-hidden="true" />
      </a>

      <nav className="main-nav" aria-label="Main menu">
        {navItems.map((item) => (
          <a
            key={item}
            href={
              item === "Work"
                ? "#work"
                : item === "Expertise"
                  ? "#expertise"
                  : item === "Approach"
                    ? "#approach"
                    : "#"
            }
          >
            {item}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#">
        <span>Start a project</span>
        <span className="round-icon" aria-hidden="true">
          <ArrowUpRight size={17} strokeWidth={2} />
        </span>
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="page-shell hero" aria-label="Nexora hero section">
      <div className="hero-rail" aria-hidden="true">
        <span className="rail-tick tick-one" />
        <span className="rail-tick tick-two" />
        <span className="rail-tick tick-three" />
        <span className="rail-tick tick-four" />
        <span className="rail-active" />
      </div>

      <section className="hero-copy">
        <p className="eyebrow">AI PRODUCT STUDIO</p>
        <h1>AI products. Beautifully engineered.</h1>
        <p className="intro">
          We design and build AI products and experiences that people love to
          use.
        </p>

        <div className="hero-actions" aria-label="Hero actions">
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
      </section>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-artwork" />
      </div>

      <div className="purpose-note" aria-hidden="true">
        <span />
        <p>AI with purpose.</p>
      </div>
    </section>
  );
}
