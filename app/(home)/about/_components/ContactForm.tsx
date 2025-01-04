'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

interface ContactFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const services = [
  { id: "seo", label: "SEO" },
  { id: "email", label: "Email Marketing" },
  { id: "blog", label: "Blog Writing Service" },
  { id: "strategic", label: "Strategic Marketing" },
  { id: "social", label: "Social Media Management" },
  { id: "web", label: "Web design and Development" },
]

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-sm:max-w-[350px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-normal text-center">
            CONTACT INFORMATION
          </DialogTitle>
          <DialogDescription className="text-sm text-center">
            Fill out the form below and we&apos;ll get back to you shortly.
          </DialogDescription>
          {/* <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button> */}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <Input placeholder="First Name" required />
            </div>
            <div>
              <Input placeholder="Last Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" required />
            </div>
            <div>
              <Input type="tel" placeholder="Phone" required />
            </div>
            <div>
              <Input placeholder="Company Name" required />
            </div>
            <div>
              <Input type="url" placeholder="Website" required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">I&apos;M INTRESTED IN</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={(checked) => {
                      setSelectedServices(checked
                        ? [...selectedServices, service.id]
                        : selectedServices.filter((id) => id !== service.id)
                      )
                    }}
                  />
                  <Label htmlFor={service.id} className="text-sm">{service.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm">Please verify your request.*</p>
            <div id="recaptcha" className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#8D0E57] hover:bg-[#8D0E57]/90 text-white"
          >
            SUBMIT
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

