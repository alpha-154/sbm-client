'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { CarouselCardProps } from "../types/carousel"
import { CarouselCard } from "./CarouselCard"
import { cn } from "@/lib/utils"

interface ServiceCarouselProps {
  cards: CarouselCardProps[]
}

export function Carousel({ cards }: ServiceCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSelect = () => {
    setSelectedIndex(emblaApi!.selectedScrollSnap())
  }
  
  React.useEffect(() => {
    if (!emblaApi) return
  
    emblaApi.on("select", handleSelect)
  
    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
  
    return () => {
      clearInterval(interval)
      emblaApi.off("select", handleSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-[768px]:flex-[0_0_50%] min-[1024px]:flex-[0_0_33.33%] pl-4"
            >
              <CarouselCard {...card} className="h-[400px]" />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft className="h-4 w-4 text-neutral-950" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight className="h-4 w-4 text-neutral-950" />
      </Button>

      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              selectedIndex === index ? "bg-primary" : "bg-muted"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

