import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="h-fit flex items-center justify-center bg-[#188FA7]/10 px-2 md:px-4 py-10 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[#188FA7] text-[25px] md:text-[30px] md:leading-[30px] md:tracking-[0.02em]  font-bold mb-2 md:mb-4">
          OUR STORY
        </h1>

        <h2 className="text-[#188FA7] text-[18px] tracking-wide md:text-[25px] md:leading-[25px] md:tracking-[0.02em] font-semibold mb-8">
          SBM - Makes Marketing Stress-Free For Small Business Owners
        </h2>

        <div className="space-y-6 text-[#626262] text-[15px] md:text-[17px] md:leading-[17px] md:tracking-[0.02em]">
          <p>
            Small Biz Marketing is the brainchild of Prati Kaufman, a passionate
            marketer and energy coach. It&apos;s a full-service marketing agency
            committed to making marketing stress-free for small business owners.
          </p>

          <p>
            Prati is a non-native English speaker from a small town in India who
            comes from an entrepreneurial community. She grew up surrounded by
            hardworking and determined small business owners, many of whom she
            considers to be great contributors to the local economy. She draws
            inspiration from her father, who is her reason for having a powerful
            mindset.
          </p>
        </div>
        <Link
          href="https://www.pratikaufman.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-5 md:mt-10 bg-[#188FA7] hover:bg-[#3d7d8d] text-white px-6 md:px-8 py-4 md:py-6 text-md md:text-lg rounded-md tracking-[0.02em] transition-colors">
            LEARN MORE
          </Button>
        </Link>
      </div>
    </section>
  );
}
