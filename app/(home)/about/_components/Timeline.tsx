// import React from "react";
// import Image from "next/image";
// import image1 from "@/public/assets/abouttimeline_1.png";
// import image2 from "@/public/assets/abouttimeline_2.png";
// import image3 from "@/public/assets/abouttimeline_3.png";
// import image4 from "@/public/assets/abouttimeline_4.png";


// const Timeline: React.FC = () => {
//   return (
//     <div className="w-full px-4 py-8 bg-gray-50 font-sans text-gray-700">
//       <h2 className="text-center text-secondary text-[30px] md:text-[36px] font-bold mb-6">
//       YOUR JOURNEY WITH US
//       </h2>
//       <h1 className="text-center text-[17px] md:text-[20px] text-[#626262] mb-8">
//       We start with a four-step process:
//       </h1>

//       <div className="flex flex-col items-center relative">
//         {/* Event 1 */}
//         <div className="relative flex flex-col md:flex-row items-center mb-16 w-full max-w-4xl gap-2">
//           <div className="relative">
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full shadow-md z-10">
//               <Image
//                 src={image1.src}
//                 alt="Gamepad"
//                 width={250}
//                 height={250}
//                 className="rounded-full"
//               />
//             </div>
//             {/* <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-0 z-0"></div> */}
//             <div className="absolute max-md:hidden w-1 h-16 bg-purple-500 left-1/2 transform -translate-x-1/2 top-16"></div>
//           </div>
//           <div className="flex flex-col md:flex-row w-full">
//             <div className="bg-purple-500 text-white text-lg font-semibold py-2 px-4 rounded-t-md md:rounded-l-md  md:rounded-r-none">
//               Step 1
//             </div>
//             <div className="bg-white shadow-md p-4 rounded-t-lg md:rounded-l-none">
//               <h3 className="text-xl font-semibold text-purple-500 mb-2">
//                 Discovery Meeting
//               </h3>
//               <p>
//                 Understand your business goals through an in-depth discussion,
//                 ensuring alignment with your vision and objectives.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Event 2 */}
//         <div className="relative flex flex-col md:flex-row-reverse items-center mb-16 w-full max-w-4xl gap-2">
//           <div className="relative">
//             <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-md z-10">
//               <Image
//                 src={image2.src}
//                 alt="Calendar"
//                 width={250}
//                 height={250}
//                 className="rounded-full"
//               />
//             </div>
//             {/* <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-0 z-0"></div> */}
//             <div className="absolute max-md:hidden w-1 h-16 bg-blue-500 left-1/2 transform -translate-x-1/2 top-16"></div>
//           </div>
//           <div className="flex flex-col md:flex-row w-full">
//             <div className="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-t-md md:rounded-l-md  md:rounded-r-none">
//               Step 2
//             </div>
//             <div className="bg-white shadow-md p-4 rounded-l-md md:rounded-r-none">
//               <h3 className="text-xl font-semibold text-blue-500 mb-2">
//                 Market Research
//               </h3>
//               <p>
//                 Dive deep into your niche and analyze competitors to identify
//                 opportunities and refine strategic direction.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Event 3 */}
//         <div className="relative flex flex-col md:flex-row items-center mb-16 w-full max-w-4xl gap-2">
//           <div className="relative">
//             <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-md z-10">
//               <Image
//                 src={image3.src}
//                 alt="Star"
//                 width={250}
//                 height={250}
//                 className="rounded-full"
//               />
//             </div>
//             {/* <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-0 z-0"></div> */}
//             <div className="absolute max-md:hidden w-1 h-16 bg-green-500 left-1/2 transform -translate-x-1/2 top-16"></div>
//           </div>
//           <div className="flex flex-col md:flex-row w-full">
//             <div className="bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-t-md md:rounded-l-md  md:rounded-r-none">
//               Step 3
//             </div>
//             <div className="bg-white shadow-md p-4 rounded-r-md md:rounded-l-none">
//               <h3 className="text-xl font-semibold text-green-500 mb-2">
//                 Proposal Delivery
//               </h3>
//               <p>
//                 Present tailored solutions and options based on thorough
//                 research and your specific goals.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Event 4 */}
//         <div className="relative flex flex-col md:flex-row-reverse items-center mb-16 w-full max-w-4xl gap-2">
//           <div className="relative">
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full shadow-md z-10">
//               <Image
//                 src={image4.src}
//                 alt="Gamepad"
//                 width={250}
//                 height={250}
//                 className="rounded-full"
//               />
//             </div>
//             {/* <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-0 z-0"></div> */}
//             {/* <div className="absolute w-1 h-16 bg-purple-500 left-1/2 transform -translate-x-1/2 top-16"></div> */}
//           </div>
//           <div className="flex flex-col md:flex-row w-full">
//             <div className="bg-purple-500 text-white text-lg font-semibold py-2 px-4 rounded-t-md md:rounded-l-md  md:rounded-r-none">
//               Step 4
//             </div>
//             <div className="bg-white shadow-md p-4 rounded-l-md md:rounded-r-none">
//               <h3 className="text-xl font-semibold text-purple-500 mb-2">
//                 Execution and Evaluation
//               </h3>
//               <p>
//                 Implement a customized strategy with continuous monitoring,
//                 assessment, and iterative improvements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;


'use client'

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import image1 from "@/public/assets/abouttimeline_1.png";
import image2 from "@/public/assets/abouttimeline_2.png";
import image3 from "@/public/assets/abouttimeline_3.png";
import image4 from "@/public/assets/abouttimeline_4.png";

const Timeline: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const timelineItems = [
    {
      image: image1,
      step: "Step 1",
      title: "Discovery Meeting",
      color: "bg-purple-500",
      textColor: "text-purple-500",
      description: "Understand your business goals through an in-depth discussion, ensuring alignment with your vision and objectives.",
      slideFrom: "right"
    },
    {
      image: image2,
      step: "Step 2",
      title: "Market Research",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      description: "Dive deep into your niche and analyze competitors to identify opportunities and refine strategic direction.",
      slideFrom: "left"
    },
    {
      image: image3,
      step: "Step 3",
      title: "Proposal Delivery",
      color: "bg-green-500",
      textColor: "text-green-500",
      description: "Present tailored solutions and options based on thorough research and your specific goals.",
      slideFrom: "right"
    },
    {
      image: image4,
      step: "Step 4",
      title: "Execution and Evaluation",
      color: "bg-purple-500",
      textColor: "text-purple-500",
      description: "Implement a customized strategy with continuous monitoring, assessment, and iterative improvements.",
      slideFrom: "left"
    }
  ];

  return (
    <div ref={ref} className="w-full px-4 py-8 bg-gray-50 font-sans text-gray-700">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-center text-secondary text-[30px] md:text-[36px] font-bold mb-6">
          YOUR JOURNEY WITH US
        </h2>
        <h1 className="text-center text-[17px] md:text-[20px] text-[#626262] mb-8">
          We start with a four-step process:
        </h1>
      </motion.div>

      <div className="flex flex-col items-center relative">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center mb-16 w-full max-w-4xl gap-2`}
            initial={{ 
              x: item.slideFrom === "right" ? 100 : -100, 
              opacity: 0 
            }}
            animate={isInView ? { 
              x: 0, 
              opacity: 1 
            } : {}}
            transition={{ 
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut"
            }}
          >
            <div className="relative">
              <div className={`flex items-center justify-center w-16 h-16 ${item.color} text-white rounded-full shadow-md z-10`}>
                <Image
                  src={item.image.src}
                  alt={item.title}
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </div>
              {index !== timelineItems.length - 1 && (
                <div className={`absolute max-md:hidden w-1 h-16 ${item.color} left-1/2 transform -translate-x-1/2 top-16`}></div>
              )}
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <div className={`${item.color} text-white text-lg font-semibold py-2 px-4 rounded-t-md md:rounded-l-md md:rounded-r-none`}>
                {item.step}
              </div>
              <div className="bg-white shadow-md p-4 rounded-b-lg md:rounded-l-none">
                <h3 className={`text-xl font-semibold ${item.textColor} mb-2`}>
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;