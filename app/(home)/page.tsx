"use client";

import NewsLetter from "@/components/shared/news-letter.component";
import HeroSection from "./_components/hero-section.component";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <NewsLetter className="rounded-t-[2rem]" />
    </div>
  );
}
