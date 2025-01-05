export default function MarketingSubHero() {
  return (
    <div className="min-h-[50vh]  px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6 md:space-y-8">
          {/* Headline Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              IT IS EXHAUSTING!
            </h1>
            <p className="text-2xl font-semibold text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
              we get it, running a business is tough.
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg text-primary sm:text-xl md:text-2xl">
              Our founder,{" "}
              <span className="font-bold">PRATI KAUFMAN CRAFTED</span>{" "}
              <span className="text-white">
                a Marketing Toolkit To Scale Your Business Sustainable Income.
              </span>
            </p>

            <p className="text-lg sm:text-xl md:text-2xl">
              <span className="text-primary">
                In this toolkit she shares three proven{" "}
              </span>
              <span className="font-bold text-primary">MARKETING TACTICS</span>
              <span className="text-primary">
                {" "}
                that she used to scale her business to high{" "}
              </span>
              <span className="font-bold text-primary">SIX FIGURES</span>
              <span className="text-primary"> in less than 3 years.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
