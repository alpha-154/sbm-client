import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NewsLetter({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter signup logic here
  };
  return (
    <div className={cn("bg-secondary-foreground px-6 py-12 ", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl">
            Join our exclusive newsletter community and unlock insider secrets,
            growth hacks, and proven strategies to skyrocket your business to
            new heights
          </p>
          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white rounded-md px-4 py-2 min-w-[300px]"
                required
              />
              <Button
                type="submit"
                className="bg-[#80184e] hover:bg-[#80184e]/90 text-white px-8"
              >
                Subscribe
              </Button>
            </div>
            {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
            <p className="text-white/80 text-xs mt-2">
              We value your privacy and will never share or sell your data.
              Please read our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
