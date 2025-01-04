import { Button } from "@/components/ui/button";
import Image from "next/image";
import astronaut from "@/public/assets/astronaut.png";
export default function ConnectSection() {
  return (
    <div className="relative max-w-4xl bg-primary mx-auto flex flex-col md:flex-row md:justify-between gap-6 border rounded-xl p-10 mb-20">
      <div className="flex flex-col items-center md:items-start gap-6">
        <h1 className="text-white font-[Averta-ExtraBold] text-[30px] lg:text-[40px] font-[700] leading-[30px] md:leading-[40px] tracking-[0.05em] md:tracking-[0.05em] text-center md:text-left">
          We succeed by making you{" "}
          <span className="text-[#FF0084]">successful!</span>
        </h1>
        <p className="max-w-xs text-white  text-md text-center md:text-left">
          In this journey, you&apos;ve likely come across countless marketing
          agencies promising fancy websites, improved SEO, and compelling ads.
          They may have even provided a marketing funnel and posting schedule.
        </p>
        <Button className="bg-white hover:bg-white/90 text-primary font-[400] text-md tracking-[0.01em]">
          Let&apos;s Connect
        </Button>
      </div>
      <div>
        <Image src={astronaut} alt="image" height={500} width={450} />
      </div>
    </div>
  );
}
