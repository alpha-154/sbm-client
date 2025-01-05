// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import BannerHand from "@/public/assets/about-us-banner-hand.png";

// export default function HeroSection() {
//   return (
//     <div
//       className="w-full flex flex-col items-center p-6"
//       style={{
//         backgroundImage: "url('/assets/about-us-hero-bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         borderRadius: "20px",
//       }}
//     >
//       <div className="flex flex-col  gap-4">
//         <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
//           <div>
//             <h1 className="text-primary max-w-md font-bold text-[30px] lg:text-[40px]  leading-[30px] lg:leading-[40px] tracking-[0.02em] lg:tracking-[0.05em] text-center lg:text-left">
//               THE <span className="text-secondary">MARKETING AGENCY </span>
//               THAT CARES ABOUT YOU & YOUR BUSINESS
//             </h1>
//           </div>
//           <div className="">
//             <Image src={BannerHand} alt="about" width={350} height={350} />
//           </div>
//         </div>
//         <div className="flex flex-col items-center lg:items-start gap-4 lg:-mt-6">
//           <p className="text-[#626262] max-w-sm text-[16px] lg:text-[20px] font-[500] leading-[20px] tracking-[0.02em] text-center lg:text-left">
//             A global team of experts with a vision of making marketing
//             stress-free for small business owners!
//           </p>
//           <Button className="bg-secondary font-[500] text-white text-[18px] tracking-[0.02em] mt-4">
//             Meet The Team
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import BannerHand from "@/public/assets/about-us-banner-hand.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  const leftContentVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
          <motion.div
            variants={leftContentVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-primary max-w-md font-bold text-[30px] lg:text-[40px] leading-[30px] lg:leading-[40px] tracking-[0.02em] lg:tracking-[0.05em] text-center lg:text-left">
              THE <span className="text-secondary">MARKETING AGENCY </span>
              THAT CARES ABOUT YOU & YOUR BUSINESS
            </h1>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <Image src={BannerHand} alt="about" width={350} height={350} />
          </motion.div>
        </div>
        <motion.div
          variants={leftContentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start gap-4 lg:-mt-6"
        >
          <p className="text-[#626262] max-w-sm text-[16px] lg:text-[20px] font-[500] leading-[20px] tracking-[0.02em] text-center lg:text-left">
            A global team of experts with a vision of making marketing
            stress-free for small business owners!
          </p>
          <Button className="bg-secondary font-[500] text-white text-[18px] tracking-[0.02em] mt-4">
            Meet The Team
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
