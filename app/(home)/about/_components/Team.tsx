import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Prati Kaufman",
    role: "Founder",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
  {
    name: "Bharti Khatri",
    role: "Head of Content",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
  {
    name: "Jagseer Singh",
    role: "Head Of Graphic Designing",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
  {
    name: "Riza Manansala",
    role: "Project Manager",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
  {
    name: "Soniya Grover",
    role: "SEO Specialist",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
  {
    name: "Amna Zaka",
    role: "Sr.Graphic Designer",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
  {
    name: "Fathima Kunhoo",
    role: "Email Marketing Expert",
    image:
      "https://smallbizmarketing.agency/wp-content/uploads/2024/05/Prati-image-1-scaled-1-1366x2048.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full mx-auto px-1 md:px-4 py-4 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8D0E57] text-center mb-8">
          MEET OUR TEAM OF EXPERTS
        </h2>

        <p className="text-[#626262] text-md md:text-lg text-center max-w-4xl mx-auto mb-16 tracking-wide">
          Every team member of SBM has an entrepreneurial mindset, just like our
          founder Prati. We started as a small team that has now grown into a
          full-service digital marketing company with amazing talented employees
          from across the globe who are passionate about helping small business
          owners succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Card className="border-none shadow-lg w-full max-w-[300px]">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 300px, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#8B1B5D] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
