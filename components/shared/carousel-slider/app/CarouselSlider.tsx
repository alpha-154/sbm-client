import { CarouselSection } from "../components/CarouselSection"

const demoCards = [
  {
    title: "Social Media Marketing Management",
    description: "We provide end-to-end social media marketing services that keep your audience engaged with the right messaging.",
    buttonText: "Learn More",
    buttonHref: "#"
  },
  {
    title: "Email Marketing",
    description: "We see emails as love letters to your audience. We make sure they are infused with your energy and personality to foster deep connections with your email subscribers.",
    buttonText: "Learn More",
    buttonHref: "#"
  },
  {
    title: "Blog Writing",
    description: "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#"
  },
  {
    title: "Blog Writing",
    description: "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#"
  },
  {
    title: "Blog Writing",
    description: "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#"
  },
  {
    title: "Blog Writing",
    description: "Our expert team writes SEO-optimized blogs that engage your audience and drive organic traffic to your site.",
    buttonText: "Learn More",
    buttonHref: "#"
  },
  
]

export default function CarouselSlider() {
  return (
    <main>
      <CarouselSection
        mainTitle="YOUR BUSINESS. YOUR SUCCESS. OUR PASSION."
        subTitle="We're a customer-obsessive marketing agency dedicated to growing your business by creating a marketing ecosystem that is fully integrated, strategically sound, and sustainable."
        sectionTitle="We offer Services based on your Goals"
        cards={demoCards}
      />
    </main>
  )
}