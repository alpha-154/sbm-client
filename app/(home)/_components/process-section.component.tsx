import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-[#8B104E] mb-16">
        HOW WE DO IT
      </h1>
      <div className="border-t border-[#8B104E] w-48 mx-auto mb-16"></div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative md:col-start-1 md:row-start-1 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8B104E] mb-4">
              DISCOVERY MEETING
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We discuss your business, where it is now, your revenue stream,
              and your short-term and long-term goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8B104E] mb-4">
              MARKET RESEARCH
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We dig deep into your market, research your niche, and study
              competitors and customers to craft a strategy that fits you best.
            </p>
          </section>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1 flex justify-center">
          <Image
            src="/assets/astronaut-on-rocket.svg"
            alt="Astronaut riding a rocket"
            width={400}
            height={600}
            className="w-auto h-auto"
            priority
          />
        </div>

        <div className="md:col-start-1 md:row-start-2 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8B104E] mb-4">
              PROPOSAL
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Based on our research and your business goals, we&apos;ll deliver
              suggestions and discuss potential options with you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8B104E] mb-4">
              EXECUTION & EVALUATION
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We implement a strategy tailored to your business goals. We
              monitor your progress and revise our approach as needed.
            </p>
          </section>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button className="bg-[#19919C] hover:bg-[#147880] text-white  px-8 py-6 text-lg font-medium">
          GET IN TOUCH
        </Button>
      </div>
    </div>
  );
}
