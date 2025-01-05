"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import contactLottie from "@/public/lottie/contact-lottie.json";

export function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-4">
      <div className="flex flex-col items-center md:flex-row  md:justify-between md:items-center gap-5">
        <div className="flex justify-center">
          {/* <Image
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?semt=ais_hybrid"
            alt="Space themed illustration with astronaut and rocket"
            width={400}
            height={400}
            className="mx-auto aspect-square object-contain"
            priority
          /> */}
          <Lottie animationData={contactLottie} loop={true} />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[30px] max-sm:text-center md:text-[36px] font-bold text-secondary">
            Let&apos;s Connect
          </h1>
          <p className="max-w-[350px] text-secondary max-sm:text-center text-[16px] md:text-[20px]">
            We&apos;re just one click away to help you take your brand or
            product from great to incredible.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-[20px] max-sm:text-center md:text-[24px] font-700 text-secondary">
              Get In Touch
            </span>
            <Link
              href="mailto:info@smallbizmarketing.agency"
              className="text-secondary hover:underline text-lg max-sm:text-center"
            >
              info@smallbizmarketing.agency
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
