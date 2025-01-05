import { Users, Target, TrendingUp } from "lucide-react";

export default function BusinessSection() {
  return (
    <section className="bg-pink-50 max-w-4xl mx-auto px-6 md:px-8 pt-12 md:pt-16 lg:pt-20 border rounded-xl relative mt-10">
      <div className="">
        {/* Main Heading */}
        <h2 className="text-[20px] lg:text-[30px]  leading-[25px] lg:leading-[40px] tracking-[0.02em] lg:tracking-[0.05em] font-bold text-center lg:text-left mb-8 md:mb-12 max-w-4xl mx-auto ">
          <span className="text-[#80184E]">
            YOUR BUSINESS IS NOT JUST ABOUT TACTICS AND NUMBERS TO US. WE CARE
            ABOUT YOUR{" "}
          </span>
          <span className="text-[#188FA7]">UNIQUE JOURNEY</span>
          <span className="text-[#80184E]">, YOUR VISION, AND THE </span>
          <span className="text-[#188FA7]">PERSONAL TOUCH</span>
          <span className="text-[#80184E]">
            {" "}
            YOU BRING TO EVERYTHING YOU DO!
          </span>
        </h2>

        {/* Body Text */}
        <div className="space-y-6 max-w-4xl mx-auto text-center lg:text-left mb-12 md:mb-16">
          <p className="text-gray-700 text-[16px] md:text-[18px]">
            We take the time to get to know you and{" "}
            <span className="text-primary">your business</span> on a personal
            level. Align our{" "}
            <span className="text-primary">marketing strategies</span> with
            your energy and lifestyle, ensuring that every campaign reflects
            your <span className="text-primary">authenticity</span>.
          </p>
          <p className="text-[#626262] text-[16px] md:text-[18px]">
            We strive to create a{" "}
            <span className="text-primary">genuine partnership</span> with
            you, always doing what&apos;s best for your business. Your success
            is our success, and we&apos;re committed to going the extra mile to
            help you <span className="text-primary">achieve your goals</span>
            .
          </p>
        </div>

        {/* Feature Grid with Gradient Background */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-full max-w-5xl mx-auto w-full">
            <div className="h-full w-full bg-gradient-to-b from-pink-100 to-pink-200 rounded-t-[40px]" />
          </div>

          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[#626262] text-md">
                Get tailored solutions aligned with your energy and lifestyle
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[#626262] text-md">
                Experience the expertise of a fully dedicated team
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[#626262] text-md">
                Achieve business growth and time freedom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
