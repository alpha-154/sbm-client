import { HeroSection } from './_components/HeroSection'
import { ContactForm } from './_components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen max-w-[1400px] flex flex-col gap-5 mx-auto px-4 py-4">
      <HeroSection />
      <ContactForm />
    </div>
  )
}
