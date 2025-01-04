"use client";
import React from "react";
import Image from "next/image";
import rocket from "@/public/assets/pinkrocket.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface CarouselCardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

interface CarouselSectionProps {
  mainTitle: string;
  subTitle: string;
  sectionTitle: string;
  cards: CarouselCardProps[];
}

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

interface ServiceCarouselProps {
  cards: CarouselCardProps[];
}

interface ServiceCardProps extends CarouselCardProps {
  className?: string;
}

const demoCards = [
  {
    title: "Social Media Marketing Management",
    description:
      "We provide end-to-end social media marketing services that keep your audience engaged with the right messaging.",
    buttonText: "Learn More",
    buttonHref: "#",
  },
  {
    title: "Email Marketing",
    description:
      "We see emails as love letters to your audience. We make sure they are infused with your energy and personality to foster deep connections with your email subscribers.",
    buttonText: "Learn More",
    buttonHref: "#",
  },
  {
    title: "Blog Writing",
    description:
      "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#",
  },
  {
    title: "Blog Writing",
    description:
      "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#",
  },
  {
    title: "Blog Writing",
    description:
      "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#",
  },
  {
    title: "Blog Writing",
    description:
      "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#",
  },
];

export default function CarouselSlider() {
  return (
    <main>
      <CarouselSection
        mainTitle="YOUR BUSINESS. YOUR SUCCESS. OUR PASSION."
        subTitle="We're a customer-obsessive marketing agency dedicated to growing your business by creating a marketing ecosystem that is fully integrated, strategically sound, and sustainable."
        sectionTitle="We offer Services based on your Goals"
        cards={demoCards}
      />
    </main>
  );
}

function AnimatedText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Carousel({ cards }: ServiceCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSelect = () => {
    setSelectedIndex(emblaApi!.selectedScrollSnap());
  };

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", handleSelect);

    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

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
  );
}

function CarouselCard({
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
}: ServiceCardProps) {
  return (
    <Card className={`flex flex-col ${className}`}>
      <CardContent className="flex-grow p-6">
        <h3 className="text-2xl font-bold text-[#188FA7] mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {buttonText && buttonHref && (
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button
            asChild
            variant="default"
            className="w-fit bg-[#188FA7] hover:bg-[#188FA7]/90"
          >
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

function CarouselSection({
  mainTitle,
  subTitle,
  sectionTitle,
  cards,
}: CarouselSectionProps) {
  return (
    <section className="relative bg-[#188FA7] py-16 px-4 overflow-hidden rounded-xl">
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
  );
}

function FloatingRocket() {
  return (
    <motion.div
      className="absolute max-sm:-right-5 md:-right-2 lg:right-0 top-20 w-24 h-24 md:w-32 md:h-32"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={rocket.src}
        alt="Floating rocket illustration"
        className="max-w-[80px] max-h-[80px]: object-contain"
        width={80}
        height={80}
      />
    </motion.div>
  );
}
