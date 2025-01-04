'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "./ContactForm"

export function ContactCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="w-full max-w-4xl bg-[#188FA7] text-white">
        <CardContent className="p-6 md:p-10 flex flex-col items-center text-center space-y-4">
          <h1 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-bold">
            WE HELP YOU SIMPLIFY YOUR MARKETING FOR GROWTH!
          </h1>
          
          <p className="text-md md:text-xl tracking-wide text-slate-200">
            We are as invested in your vision as you are.
          </p>
          
          <p className="text-md md:text-xl tracking-wide text-slate-200">
            We work together to bring the best by maximizing all of your marketing efforts and making them easy for you. So you can focus on what matters most – running your business.
          </p>
          
          <p className="text-md md:text-xl tracking-wide text-slate-200">
            Alone you have achieved a lot but together we can achieve what you desire!
          </p>
          
          <Button 
            className="bg-[#8D0E57] hover:bg-[#8D0E57]/90 text-white px-6 md:px-8 py-4 md:py-6 text-md md:text-lg rounded-lg tracking-wide transition-colors"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            KNOW MORE
          </Button>
        </CardContent>
      </Card>

      <ContactForm 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  )
}

