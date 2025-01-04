import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      className="min-h-screen bg-[#dbeff6] bg-gradient-to-br from-[#dbeff6] to-[#dbeff6]/70 px-4 py-16 md:px-8 lg:px-16"
      style={{
        backgroundImage: "url('/assets/service-we-offer-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "32px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#188fa7] md:text-5xl lg:text-6xl">
            SERVICES WE OFFER
          </h2>
          <p className="text-xl text-[#188fa7]/90 md:text-2xl">
            Marketing Services For The Modern World
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <Card className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <span className="mb-4 block text-6xl font-bold text-[#188fa7]">
              1.
            </span>
            <h3 className="text-xl font-bold text-[#188fa7]">
              Strategic
              <br />
              Marketing
              <br />
              Consultation
            </h3>
            <div className="mt-4 h-1 w-16 bg-[#188fa7]" />
          </Card>

          {/* Card 2 */}
          <Card className="relative overflow-hidden rounded-3xl bg-[#188fa7] p-6 text-white shadow-lg transition-transform hover:scale-105">
            <div className="absolute -right-2 -top-2">
              <Rocket className="h-16 w-16 -rotate-45 text-white/10" />
            </div>
            <span className="mb-4 block text-6xl font-bold">2.</span>
            <h3 className="mb-4 text-xl font-bold">
              Web Design And
              <br />
              Development
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              We Make Sure Your Website Is An Extension Of You And Your Brand.
              We Marry The Functionality With Design To Convert Visitors Into
              Customers.
            </p>
            <div className="mt-4 h-1 w-16 bg-white" />
          </Card>

          {/* Card 3 */}
          <Card className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <span className="mb-4 block text-6xl font-bold text-[#188fa7]">
              3.
            </span>
            <h3 className="text-xl font-bold text-[#188fa7]">
              Social Media
              <br />
              Marketing
              <br />
              Management
            </h3>
            <div className="mt-4 h-1 w-16 bg-[#188fa7]" />
          </Card>

          {/* Card 4 */}
          <Card className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <span className="mb-4 block text-6xl font-bold text-[#188fa7]">
              4.
            </span>
            <h3 className="text-xl font-bold text-[#188fa7]">
              Email Marketing
            </h3>
            <div className="mt-4 h-1 w-16 bg-[#188fa7]" />
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#188fa7] px-8 py-6 text-lg font-semibold text-white transition-colors hover:bg-[#188fa7]/90">
            DOWNLOAD FREE
          </Button>
        </div>
      </div>
    </section>
  );
}
