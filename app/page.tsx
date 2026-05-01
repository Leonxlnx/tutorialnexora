import { CaseStudySection } from "@/components/case-study-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Header, Hero } from "@/components/hero";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { SiteEffects } from "@/components/site-effects";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <SiteEffects />
      <Header />
      <Hero />
      <TrustSection />
      <SolutionsSection />
      <CaseStudySection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCtaSection />
    </>
  );
}
