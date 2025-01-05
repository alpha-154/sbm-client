// Purpose: About page component for the website.

import BusinessSection from "./_components/Business";
import CarouselSlider from "@/components/shared/carouselslider.component";
import StorySection from "./_components/Story";
import HeroSection from "./_components/Hero";
import ConnectSection from "./_components/Connect";
import LetsTalkSection from "./_components/LetsTalk";
import TeamSection from "./_components/Team";
import ContactSection from "./_components/ContactSection";
import ImageCeo from "./_components/ImageCeo";
import Timeline from "./_components/Timeline";

export default function About() {
  return (
    <div className="min-h-screen max-w-[1400px] flex flex-col gap-10 mx-auto px-4 py-4">
      {/* hero section */}
      <HeroSection />
      {/* connect section */}
      <ConnectSection />
      {/* business section */}
      <BusinessSection />
      {/* process section */}
      <Timeline />
      {/* marketing section */}
      <CarouselSlider />
      {/* image ceo section */}
      <ImageCeo />
      {/* story section */}
      <StorySection />
      {/* lets talk section */}
      <LetsTalkSection />
      {/* team section */}
      <TeamSection />
      {/* contact section */}
      <ContactSection />

    </div>
  );
}
