import Image from "next/image";

export default function MarketingHero() {
  return (
    <div className="w-full min-h-screen bg-[#80184e] rounded-[2rem]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen p-6 lg:p-12">
          {/* Left column with illustration */}
          <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:mx-0">
            <Image
              src="/assets/marketing-hero.svg"
              alt="Business concept illustration showing profile with flowing dollar signs"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right column with content */}
          <div className="space-y-6 lg:space-y-8 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              EMPOWER YOUR BUSINESS WITH TAILORED MARKETING SOLUTIONS
            </h1>

            <p className="text-xl md:text-2xl font-light opacity-90">
              No Standard Approach. No Generic Advice. No Fluff.
            </p>

            <div className="space-y-6 text-lg md:text-xl">
              <p>
                As a <span className="font-semibold">BUSINESS OWNER</span>, you
                pour your heart and soul into your company. You believe in your
                product or service, and you know it can make a difference in{" "}
                <span className="font-semibold">PEOPLE&apos;S LIVES</span>.
              </p>

              <p>
                Instead of doing what you love, you spend hours perfecting
                social media content, managing cash flow, and doing a million
                administrative tasks on top of{" "}
                <span className="font-semibold">RUNNING YOUR BUSINESS</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
