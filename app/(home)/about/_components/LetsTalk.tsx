import { Button } from "@/components/ui/button"
import { Quote } from 'lucide-react'

export default function LetsTalkSection() {
  return (
    <section className="w-full mx-auto py-4">
      <div className="relative max-w-4xl mx-auto rounded-3xl border border-[#8D0E57] p-4 md:p-10">
        {/* Background Quote Icon */}
        <div className="absolute left-6 top-6 md:left-8 md:top-8 text-[#8B1B5D]/10 opacity-60  z-0">
          <Quote size={120} className="transform -scale-x-100" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-[17px] md:text-[30px] leading-[25px] tracking-wide md:leading-[50px] md:tracking-wider  font-bold text-[#8D0E57] mb-4 md:mb-6">
            &quot;OUR MARKETING FOCUSES ON MAKING YOUR BRAND THE MOST TRUSTED RESOURCE AND VOICE FOR YOUR AUDIENCE.&quot;
          </h2>
          
          <Button 
            className="bg-[#8D0E57] hover:bg-[#8D0E57]/90 text-white px-4 md:px-8 py-4 md:py-6 text-md md:text-lg rounded-md tracking-wide transition-colors"
            
          >
            LET&apos;S TALK
          </Button>
        </div>
      </div>
    </section>
  )
}
