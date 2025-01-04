import { Button } from "@/components/ui/button";

export default function WhyChooseSbm() {
  return (
    <section className="min-h-screen  px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-[#188fa7] md:text-5xl lg:text-6xl">
          WHY CHOOSE SMALL BIZ MARKETING?
        </h1>
        <p className="mb-12 text-lg font-medium text-[#80184e] md:text-xl lg:text-2xl">
          {"We're Not Just Vendors, We're Your Marketing Partners"}
        </p>

        <h2 className="mb-12 text-xl text-gray-400 md:text-2xl lg:text-3xl">
          Our Mission Is To Make Marketing Stress-Free For Small Business Owners
          Who Want:
        </h2>

        <div className="relative mb-12">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#80184e] px-6 py-12 md:px-12">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                "MARKETING THAT WORKS",
                "EXPERT GUIDANCE",
                "PROVEN STRATEGIES",
              ].map((text, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#188fa7] md:h-32 md:w-32">
                    <span className="text-4xl text-[#188fa7]">{index + 1}</span>
                  </div>
                  <p className="text-lg font-medium text-white md:text-xl">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mb-12 max-w-4xl text-lg text-gray-400 md:text-xl">
          {
            "At small biz marketing, we understand the passion it takes to build a business from scratch, that's why our services align with your energy and lifestyle to transform your digital presence with expert strategy, design, and marketing."
          }
        </p>

        <Button className=" bg-[#188fa7] px-8 py-6 text-lg font-bold text-white hover:bg-[#188fa7]/90 md:text-xl">
          CONNECT WITH US
        </Button>
      </div>
    </section>
  );
}
