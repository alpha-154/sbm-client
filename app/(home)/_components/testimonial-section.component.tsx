import Image from "next/image";

const marqueeStyles = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`;

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Wade Warren",
      title: "Card title",
      image: "/assets/people.jpeg",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
    {
      name: "Jane Doe",
      title: "Happy Customer",
      image: "/assets/people.jpeg",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
    {
      name: "John Smith",
      title: "Satisfied Client",
      image: "/assets/people.jpeg",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
    {
      name: "Emily Brown",
      title: "Loyal Customer",
      image: "/assets/people.jpeg",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f3f7] to-[#dbeff6] px-4 py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/testimonial-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "32px",
      }}
    >
      <style jsx global>
        {marqueeStyles}
      </style>

      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-32 w-32 rounded-full bg-[#188fa7]/10" />
        <div className="absolute -right-8 bottom-1/4 h-48 w-48 rounded-full bg-[#188fa7]/10" />
        <div className="absolute left-1/4 top-1/2 h-4 w-4 rotate-45 transform bg-[#188fa7]/20" />
        <div className="absolute right-1/3 top-1/4 h-3 w-3 rotate-45 transform bg-[#188fa7]/20" />
      </div> */}

      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#188fa7] sm:text-4xl md:text-5xl">
            WE DELIVER EXPERIENCES THAT OUR CLIENTS LOVE
          </h2>
          <p className="text-xl font-semibold text-[#80184e]">
            Here Is What They Say
          </p>
        </div>

        <div className="w-full overflow-hidden mb-16">
          <div className="animate-marquee flex gap-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[400px] rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#626262]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-[#626262]">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
