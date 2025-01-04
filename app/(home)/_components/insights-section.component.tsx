import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  timestamp: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
    description: "An OFBian is characterized by a term called H&H",
    author: {
      name: "Sebastian",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "Just now",
  },
  // Additional posts with the same structure
];

export default function InsightsSection() {
  return (
    <section className="w-full min-h-screen  px-[20px] py-[60px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading Section with exact spacing and typography */}
        <h1 className="font-['Outfit'] text-[42px] md:text-[64px] lg:text-[80px] leading-[1.1] font-bold text-[#188FA7] text-center mb-[16px]">
          INSIGHTS
        </h1>
        <h2 className="font-['Outfit'] text-[24px] md:text-[32px] lg:text-[36px] leading-[1.2] font-medium text-[#FF7CC0] text-center mb-[48px] max-w-[800px] mx-auto">
          Stay Ahead Of The Curve With Our Expert Insights!
        </h2>

        {/* Grid with exact spacing and responsive behavior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-[20px] aspect-[1/1.2]"
            >
              {/* Image container with exact gradient overlay */}
              <div className="absolute inset-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90" />
              </div>

              {/* Content with exact positioning and spacing */}
              <div className="absolute inset-0 flex flex-col justify-end p-[24px]">
                {/* Author section with exact spacing */}
                <div className="flex items-center space-x-[12px] mb-[16px]">
                  <Avatar className="h-[40px] w-[40px] border-2 border-white">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-[14px] text-white font-['Outfit']">
                        BY :{" "}
                      </span>
                      <span className="text-[14px] text-white font-['Outfit'] font-medium ml-[4px]">
                        {post.author.name}
                      </span>
                    </div>
                    <span className="text-[14px] text-[#FF7CC0] font-['Outfit']">
                      {post.timestamp}
                    </span>
                  </div>
                </div>

                {/* Title and description with exact typography */}
                <h3 className="text-[20px] leading-[1.2] font-bold text-white font-['Outfit'] mb-[8px]">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[#ACACAC] font-['Outfit']">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
