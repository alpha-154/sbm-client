export default function MarketingToolkit() {
  return (
    <div className="w-full bg-[#80184e] p-4 md:p-8 lg:p-12 rounded-2xl">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          <span className="inline-block bg-[#188fa7] px-3 py-1 rounded-lg mb-2">
            FREE
          </span>{" "}
          <span className="inline-block bg-[#188fa7] px-3 py-1 rounded-lg mb-2">
            MARKETING TOOLKIT
          </span>{" "}
          FOR <span className="inline mt-2">SMALL BUSINESS OWNERS TO</span>{" "}
          <span className="inline-block bg-[#188fa7] px-3 py-1 rounded-lg">
            GENERATE
          </span>{" "}
          REVENUE.
        </h1>

        <a
          href="#download"
          className="whitespace-nowrap px-6 py-4 bg-white text-[#80184e] rounded-xl font-bold text-lg md:text-xl hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
        >
          DOWNLOAD YOUR TOOLKIT NOW
        </a>
      </div>
    </div>
  );
}
