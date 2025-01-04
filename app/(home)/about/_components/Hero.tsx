import { Button } from "@/components/ui/button";
import Image from "next/image";
import BannerHand from "@/public/assets/about-us-banner-hand.png";

export default function HeroSection() {
  return (
    <div
      className="w-full flex flex-col items-center p-6"
      style={{
        backgroundImage: "url('/assets/about-us-hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
      }}
    >
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-primary max-w-md font-bold text-[30px] lg:text-[40px]  leading-[30px] lg:leading-[40px] tracking-[0.02em] lg:tracking-[0.05em] text-center lg:text-left">
              THE <span className="text-secondary">MARKETING AGENCY </span>
              THAT CARES ABOUT YOU & YOUR BUSINESS
            </h1>
          </div>
          <div className="">
            <Image src={BannerHand} alt="about" width={350} height={350} />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4 lg:-mt-6">
          <p className="text-[#626262] max-w-sm text-[16px] lg:text-[20px] font-[500] leading-[20px] tracking-[0.02em] text-center lg:text-left">
            A global team of experts with a vision of making marketing
            stress-free for small business owners!
          </p>
          <Button className="bg-secondary font-[500] text-white text-lg tracking-[0.02em] mt-4">
            Meet The Team
          </Button>
        </div>
      </div>
    </div>
  );
}
