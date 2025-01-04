'use client'

import { CarouselSectionProps } from "../types/carousel"
import { AnimatedText } from "./AnimatedText"
import { FloatingRocket } from "./FloatingRocket"
import { Carousel } from "./Carousel"

export function CarouselSection({
  mainTitle,
  subTitle,
  sectionTitle,
  cards
}: CarouselSectionProps) {
  return (
    <section className="relative bg-[#188FA7] py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl  text-white">
        <AnimatedText className="text-2xl md:text-4xl tracking-wide font-bold text-center mb-6">
          {mainTitle}
        </AnimatedText>
        
        <AnimatedText 
          className="text-md lg:text-lg tracking-wide text-center mb-12 max-w-3xl mx-auto"
          delay={0.2}
        >
          {subTitle}
        </AnimatedText>

        <AnimatedText 
          className="text-2xl md:text-3xl tracking-wide font-bold text-center mb-12"
          delay={0.4}
        >
          {sectionTitle}
        </AnimatedText>

        <Carousel cards={cards} />
      </div>
      
      <FloatingRocket />
    </section>
  )
}

