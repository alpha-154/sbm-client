'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CarouselCardProps } from "../types/carousel"

interface ServiceCardProps extends CarouselCardProps {
  className?: string;
}

export function CarouselCard({ title, description, buttonText, buttonHref, className = "" }: ServiceCardProps) {
  return (
    <Card className={`flex flex-col ${className}`}>
      <CardContent className="flex-grow p-6">
        <h3 className="text-2xl font-bold text-[#188FA7] mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {buttonText && buttonHref && (
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button asChild variant="default"  className="w-fit bg-[#188FA7] hover:bg-[#188FA7]/90">
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

