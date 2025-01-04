import Image from "next/image";

export default function DidYouKnow() {
  return (
    <div className="w-full min-h-[600px] bg-[#fbfaf6] p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Text Content - Left Side */}
        <div className="lg:col-span-3 space-y-6">
          <h1 className="text-[#8d0e57] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            DID YOU KNOW ?
          </h1>

          <h2 className="text-[#80184e] text-2xl md:text-3xl lg:text-4xl font-semibold mt-6">
            People often make up their minds about buying before meeting you?
          </h2>

          <p className="text-[#626262] text-lg md:text-xl leading-relaxed">
            Research has shown that a person is inclined to buy from you after
            they spend{" "}
            <span className="text-[#8d0e57] font-semibold">
              7 hours around you
            </span>
            , meet you in{" "}
            <span className="text-[#8d0e57] font-semibold">4 places</span>, and
            interact with you{" "}
            <span className="text-[#8d0e57] font-semibold">11 times</span>.
            That&apos;s exactly what we help you{" "}
            <span className="text-[#8d0e57] font-semibold">achieve online</span>
            .
          </p>

          <p className="text-[#626262] text-lg md:text-xl leading-relaxed">
            Our <span className="text-[#8d0e57] font-semibold">goal</span> is to
            create a remarkable,{" "}
            <span className="text-[#8d0e57] font-semibold">
              magnetic marketing
            </span>{" "}
            ecosystem that attracts your{" "}
            <span className="text-[#8d0e57] font-semibold">
              ideal customers
            </span>{" "}
            and provides them with a cohesive{" "}
            <span className="text-[#8d0e57] font-semibold">
              brand experience
            </span>{" "}
            across all platforms.
          </p>

          <p className="text-[#626262] text-lg md:text-xl leading-relaxed">
            Let us help you tell{" "}
            <span className="text-[#8d0e57] font-semibold">your story</span> and
            connect with your{" "}
            <span className="text-[#8d0e57] font-semibold">audience</span> in a
            way that{" "}
            <span className="text-[#8d0e57] font-semibold">
              truly resonates
            </span>
            .
          </p>
        </div>

        {/* SVG Illustration - Right Side */}
        <div className="lg:col-span-2 relative h-[300px] lg:h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/did-you-know.svg"
              alt="Magnetic marketing illustration showing people being attracted"
              fill
              className="object-contain"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1))",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
