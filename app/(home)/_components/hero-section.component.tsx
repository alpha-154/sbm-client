export default function HeroSection() {
  return (
    <section className="min-h-[50vh] w-full flex items-center justify-start px-4 py-16 md:py-24">
      <div className="max-w-[80%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 min-w-fit">
          <span className="text-primary">INTEGRATED </span>
          <span className="text-secondary">MARKETING</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-primary">SOLUTIONS </span>
          <span className="text-secondary">FOR </span>
          <span className="text-primary">SMALL</span>
          <br className="hidden sm:block" />
          <span className="text-primary">BUSINESS </span>
          <span className="text-secondary">OWNERS</span>
        </h1>
        <p className="text-gray text-base sm:text-lg md:text-xl lg:text-2xl  leading-tight max-w-[80%]">
          Say goodbye to marketing overwhelm with a team 100% invested in your
          success.
        </p>

        <div
          style={{
            backgroundImage: "url('/assets/cloud-button.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "center",
            height: "5rem",
            // borderRadius: "32px",
          }}
          className="text-center text-primary font-bold text-sm flex justify-center items-center py-4 px-8 my-8 cursor-pointer hover:scale-105 transition-transform min-w-fit h-auto w-40 uppercase object-cover bg-opacity-90"
        >
          <span className="mt-3">explore</span>
        </div>
      </div>
    </section>
  );
}
