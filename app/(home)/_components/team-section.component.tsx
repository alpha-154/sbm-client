import { Button } from "@/components/ui/button";
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

export default function TeamSection() {
  const team = [
    {
      name: "Prati Kaufman",
      role: "Founder SBM",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Nehla Salam",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Adarsh G",
      role: "Head Of Website Project Management",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Riza Manansala",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <section className="bg-[#f8edf3] px-4 py-16 md:py-24">
      <style jsx global>
        {marqueeStyles}
      </style>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#80184e] mb-8">
          MEET OUR TEAM OF EXPERTS
        </h2>

        <p className="text-[#626262] text-center max-w-4xl mx-auto mb-16 text-base md:text-lg">
          Every sbm team member shares an entrepreneurial mindset, driven by our
          founder prati. from a small team, we&apos;ve evolved into a global
          digitaevery sbm team member shares an entrepreneurial mindset, driven
          by our founder prati. from a small team, we&apos;ve evolved into a
          global digital marketing company, dedicated to empowering small
          business owners.l marketing company, dedicated to empowering small
          business owners.
        </p>

        <div className="w-full overflow-hidden mb-16">
          <div className="animate-marquee flex gap-8">
            {[...team, ...team].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="flex-shrink-0 w-[280px] border border-[#80184e] rounded-3xl p-6"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[#80184e] text-xl font-medium mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#626262] text-center">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#188fa7] hover:bg-[#188fa7]/90 text-white rounded-full px-8 py-6 text-lg font-medium">
            KNOW MORE ABOUT US
          </Button>
        </div>
      </div>
    </section>
  );
}
