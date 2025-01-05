export default function MarketingStats() {
  return (
    <section className="w-full  px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-2xl font-bold uppercase tracking-tight  sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
          <span className="block">
            Our marketing agency is committed to assisting small businesses
          </span>
          <span className="block">
            like yours in navigating the constantly changing marketing
          </span>
          <span className="block">landscape with done-for-you services.</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 rounded-2xl  p-8 backdrop-blur-sm sm:grid-cols-3 md:gap-12 lg:p-12">
          <div className="text-center">
            <div className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              25<span className="text-[#8d0e57]">+</span>
            </div>
            <div className="mt-2 text-sm  sm:text-base md:text-lg">
              Satisfied Clients
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              90<span className="text-[#8d0e57]">%</span>
            </div>
            <div className="mt-2 text-sm  sm:text-base md:text-lg">
              Clients On Retainer
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              97<span className="text-[#8d0e57]">%</span>
            </div>
            <div className="mt-2 text-sm  sm:text-base md:text-lg">
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
