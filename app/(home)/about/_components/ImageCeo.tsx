import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function ImageCeo() {
  return (
    <div className="w-full mx-auto px-4 py-6">
      <Card className="overflow-hidden shadow-lg rounded-2xl w-full max-w-[350px] md:max-w-[800px] mx-auto">
        <div className="relative w-full">
          {/* Use aspect-ratio to maintain image proportions */}
          <div className="aspect-[350/400] md:aspect-[800/582] relative">
            <Image
              src="https://smallbizmarketing.agency/wp-content/uploads/2024/05/or1a9341-a-1-1-6658a31007d55.webp"
              alt="Professional portrait of a person in pink attire"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 350px, 800px"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

