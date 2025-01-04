// Purpose: About page component for the website.

import BusinessSection from "./_components/Business";
import CarouselSlider from "@/components/shared/carousel-slider/app/CarouselSlider";
import StorySection from "./_components/Story";
import HeroSection from "./_components/Hero";
import ConnectSection from "./_components/Connect";
import LetsTalkSection from "./_components/LetsTalk";
import TeamSection from "./_components/Team";
import ContactSection from "./_components/contact/ContactSection";
import ImageCeo from "./_components/ImageCeo";

export default function About() {
  return (
    <div className="min-h-screen w-full  flex flex-col gap-10 mx-auto py-4">
      {/* hero section */}
      <HeroSection />
      {/* connect section */}
      <ConnectSection />
      {/* business section */}
      <BusinessSection />
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
      <ContactSection/>
    </div>
  );
}
