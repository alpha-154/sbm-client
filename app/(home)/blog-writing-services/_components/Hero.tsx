"use client";

import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import globe from "@/public/assets/globe.json";

export default function HeroSectionBlog() {
  return (
    <section className="h-fit w-full relative overflow-hidden">
      

      <div className="container mx-auto px-4 py-4 md:py-8 lg:py-10 flex flex-col items-center justify-center text-center">
        {/* Title with two-tone color */}
        <h1 className="text-primary max-w-xl font-extrabold text-[30px] lg:text-[40px] leading-[30px] lg:leading-[40px] tracking-[0.02em] lg:tracking-[0.05em] text-center">
          <span className="text-secondary">BLOG SERVICES TO </span>RANK ON
          GOOGLE
          <span className="text-secondary"> SEARCH</span>
        </h1>

        <div className="w-full max-w-[400px] my-8">
          {/* <Lottie animationData={globe} loop={true} /> */}
        </div>

        {/* Subtitle */}
        <h2 className="text-md md:text-lg lg:text-xl text-gray-500 font-medium mb-8 max-w-xl">
          Making Search Engine Optimization easy with our SEO blogs
        </h2>

        {/* CTA Button */}
        <Button className="bg-secondary hover:bg-secondary/90 text-white text-md md:text-lg tracking-wide px-4 py-2 h-auto">
          EXPLORE
        </Button>
      </div>
    </section>
  );
}

