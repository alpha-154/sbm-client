import { Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#f4dbe9] px-6 py-16 rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h2 className="text-[#80184e] text-2xl font-semibold mb-6">
            QUICK LINKS
          </h2>
          <nav className="flex flex-col space-y-3">
            {[
              "About us",
              "Works",
              "Strategic Marketing",
              "SEO Services",
              "Social Media Content Creation",
              "Website Design & Development",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#80184e] hover:text-[#80184e]/80 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-[#80184e] text-2xl font-semibold mb-6">
            WHAT WE OFFER
          </h2>
          <nav className="flex flex-col space-y-3">
            {[
              "Strategic marketing consultation",
              "Web design and development",
              "Social Media Marketing Management",
              "Email marketing",
            ].map((service) => (
              <a
                key={service}
                href="#"
                className="text-[#80184e] hover:text-[#80184e]/80 transition-colors"
              >
                {service}
              </a>
            ))}
          </nav>
        </div>

        {/* Let's Connect */}
        <div>
          <h2 className="text-[#80184e] text-2xl font-semibold mb-6">
            LET&apos;S CONNECT
          </h2>
          <p className="text-[#80184e] mb-6">
            Not sure where to start? Let&apos;s connect to learn more about each
            other and determine the right solution for your marketing.
          </p>
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="text-[#80184e] hover:text-[#80184e]/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#80184e] hover:text-[#80184e]/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <Button className="bg-[#80184e] hover:bg-[#80184e]/90 text-white px-8">
            EMAIL NOW
          </Button>
        </div>
      </div>
    </footer>
  );
}
