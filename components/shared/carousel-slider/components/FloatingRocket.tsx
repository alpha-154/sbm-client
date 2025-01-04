'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import rocket from "@/public/assets/pinkrocket.png"

export function FloatingRocket() {
  return (
    <motion.div
      className="absolute max-sm:-right-5 md:-right-2 lg:right-0 top-20 w-24 h-24 md:w-32 md:h-32"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image
        src={rocket.src}
        alt="Floating rocket illustration"
        className="max-w-[80px] max-h-[80px]: object-contain"
        width={80}
        height={80}
      />
    </motion.div>
  )
}

