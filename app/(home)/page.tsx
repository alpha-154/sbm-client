"use client";

import NewsLetter from "@/components/shared/news-letter.component";
import Banner from "./_components/banner.component";
import DidYouKnow from "./_components/did-you-know.component";
import HeroSection from "./_components/hero-section.component";
import InsightsSection from "./_components/insights-section.component";
import MarketingHero from "./_components/marketing-hero.component";
import MarketingStats from "./_components/marketing-stats.component";
import MarketingSubHero from "./_components/marketing-sub-hero.component";
import MarketingToolkit from "./_components/marketing-toolkit.component";
import ProcessSection from "./_components/process-section.component";
import ServicesSection from "./_components/service-section.component";
import TeamSection from "./_components/team-section.component";
import TestimonialSection from "./_components/testimonial-section.component";
import WhyChooseSbm from "./_components/why-choose-sbm.component";

export default function Home() {
  return (
    <div className="w-full h-full space-y-6">
      <HeroSection />
      <MarketingHero />
      <MarketingSubHero />
      <MarketingToolkit />
      <MarketingStats />
      <DidYouKnow />
      <ServicesSection />
      <Banner />
      <ProcessSection />
      <WhyChooseSbm />
      <TestimonialSection />
      <TeamSection />
      <InsightsSection />
      <NewsLetter />
    </div>
  );
}
