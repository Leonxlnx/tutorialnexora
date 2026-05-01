"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".hero-copy",
  ".hero-copy .eyebrow",
  ".hero-copy h1",
  ".hero-copy .intro",
  ".hero-copy .button",
  ".hero-visual",
  ".purpose-note",
  ".trust-copy",
  ".trust-copy .eyebrow",
  ".trust-copy h2",
  ".trust-copy > p:not(.eyebrow)",
  ".trust-actions .button",
  ".trust-proof",
  ".brand-logo-lockup",
  ".brand-logo-text",
  ".trust-stat",
  ".section-two-artwork",
  ".solutions-copy",
  ".solution-card",
  ".solution-card-content > span",
  ".solution-card h3",
  ".solution-card p",
  ".solution-card a",
  ".case-copy",
  ".case-label",
  ".case-copy h2",
  ".case-copy > p:not(.case-label)",
  ".case-stat",
  ".case-actions > *",
  ".case-visual",
  ".case-pager",
  ".process-copy",
  ".process-step",
  ".process-visual",
  ".testimonials-copy",
  ".result-metric",
  ".case-more-link",
  ".testimonial-quote",
  ".testimonial-visual",
  ".pricing-copy",
  ".pricing-card",
  ".pricing-card h3",
  ".pricing-value",
  ".pricing-card li",
  ".pricing-button",
  ".pricing-visual",
  ".final-copy",
  ".final-actions > *",
  ".final-visual",
  ".footer-brand",
  ".footer-nav a",
  ".footer-legal > *",
  ".footer-bar",
];

const activeSections = [
  "work",
  "expertise",
  "approach",
  "pricing",
  "contact",
];

export function SiteEffects() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".main-nav a"));

    const setHeaderState = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });

    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    );

    document.body.classList.add("motion-ready");

    revealNodes.forEach((node, index) => {
      node.classList.add("reveal-on-scroll");
      const section = node.closest("section");
      const siblings = section
        ? revealNodes.filter((candidate) => candidate.closest("section") === section)
        : revealNodes;
      const localIndex = siblings.indexOf(node);
      node.style.setProperty("--reveal-delay", `${Math.min(localIndex, 8) * 82}ms`);
    });

    const heroNodes = revealNodes.filter((node) => node.closest(".hero"));
    const heroVisibleOnLoad = window.scrollY < window.innerHeight * 0.72;
    if (heroVisibleOnLoad) {
      heroNodes.forEach((node, index) => {
        window.setTimeout(() => node.classList.add("is-visible"), 120 + index * 95);
      });
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealNodes.forEach((node) => {
      if (!heroVisibleOnLoad || !node.closest(".hero")) {
        revealObserver.observe(node);
      }
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
        });
      },
      { rootMargin: "-34% 0px -52% 0px", threshold: [0.18, 0.35, 0.6] },
    );

    activeSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", setHeaderState);
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
