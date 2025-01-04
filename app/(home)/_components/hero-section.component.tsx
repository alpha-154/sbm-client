export default function HeroSection() {
  return (
    <section className="min-h-[50vh] flex items-center justify-start px-4 py-16 md:py-24">
      <div className="max-w-[1400px] ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-primary">INTEGRATED </span>
          <span className="text-secondary">MARKETING</span>
          <br className="hidden sm:block" />
          <span className="text-primary">SOLUTIONS </span>
          <span className="text-secondary">FOR </span>
          <span className="text-primary">SMALL</span>
          <br className="hidden sm:block" />
          <span className="text-primary">BUSINESS </span>
          <span className="text-secondary">OWNERS</span>
        </h1>
        <p className="text-[#626262] text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[900px] leading-tight">
          Say goodbye to marketing overwhelm with a team 100% invested in your
          success.
        </p>
      </div>
    </section>
  );
}
