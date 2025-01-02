"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import AnimatedNavigationLink from "../ui/animated-navigation-link";

interface ServiceItem {
  title: string;
  href: string;
  subCategories?: { title: string; href: string }[];
}

const services: ServiceItem[] = [
  {
    title: "SEO",
    href: "/services/seo",
    subCategories: [
      { title: "On-Page SEO", href: "/services/seo/on-page" },
      { title: "Technical SEO", href: "/services/seo/technical" },
      { title: "Local SEO", href: "/services/seo/local" },
    ],
  },
  {
    title: "BLOG WRITING",
    href: "/services/blog-writing",
    subCategories: [
      { title: "Content Strategy", href: "/services/blog-writing/strategy" },
      { title: "SEO Writing", href: "/services/blog-writing/seo" },
    ],
  },
  {
    title: "EMAIL MARKETING",
    href: "/services/email-marketing",
    subCategories: [
      {
        title: "Campaign Management",
        href: "/services/email-marketing/campaigns",
      },
      { title: "Newsletter Design", href: "/services/email-marketing/design" },
    ],
  },
  {
    title: "STRATEGIC MARKETING",
    href: "/services/strategic-marketing",
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    href: "/services/social-media",
    subCategories: [
      { title: "Content Creation", href: "/services/social-media/content" },
      {
        title: "Community Management",
        href: "/services/social-media/community",
      },
    ],
  },
  {
    title: "WEB DESIGN AND DEVELOPMENT",
    href: "/services/web-design",
  },
  {
    title: "FACEBOOK MANAGEMENT",
    href: "/services/facebook",
  },
  {
    title: "INSTAGRAM MANAGEMENT",
    href: "/services/instagram",
  },
  {
    title: "LINKEDIN MANAGEMENT",
    href: "/services/linkedin",
  },
  {
    title: "PINTEREST MANAGEMENT",
    href: "/services/pinterest",
  },
];

function ServiceItem({ service }: { service: ServiceItem }) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!service.subCategories) {
    return (
      <Link
        href={service.href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-xs"
      >
        {service.title}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className="flex w-full items-center justify-between rounded-md p-3 text-left hover:bg-accent hover:text-accent-foreground text-xs"
        onMouseEnter={() => setIsOpen(true)}
      >
        {service.title}
        <ChevronRight
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-6">
        {service.subCategories.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-xs"
          >
            {sub.title}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

function MobileServiceItem({
  service,
  onSelect,
}: {
  service: ServiceItem;
  onSelect?: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!service.subCategories) {
    return (
      <Link
        href={service.href}
        className="block py-2 hover:text-primary"
        onClick={onSelect}
      >
        {service.title}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left">
        {service.title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        {service.subCategories.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className="block py-2 hover:text-primary"
            onClick={onSelect}
          >
            {sub.title}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full h-full">
      <div className="w-full mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex flex-1 items-center justify-between lg:justify-between">
          <Link href="/" className="text-lg font-bold text-primary">
            Logo 1
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  {/* <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs font-bold transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 text-primary">
                    HOME
                  </NavigationMenuLink> */}
                  <AnimatedNavigationLink>HOME</AnimatedNavigationLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <AnimatedNavigationLink>ABOUT</AnimatedNavigationLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xs  font-bold transition-colors text-primary hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-primary data-[state=open]:text-primary">
                  SERVICES
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-1 p-4 ">
                    {services.map((service) => (
                      <ServiceItem key={service.href} service={service} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <AnimatedNavigationLink>RESOURCES</AnimatedNavigationLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <AnimatedNavigationLink>CONTACT</AnimatedNavigationLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/"
            className="text-lg font-bold text-primary hidden lg:block"
          >
            Logo 2
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                ABOUT
              </Link>
              <div className="flex flex-col gap-2">
                <div className="font-medium">SERVICES</div>
                <div className="ml-4 flex flex-col gap-2">
                  {services.map((service) => (
                    <MobileServiceItem
                      key={service.href}
                      service={service}
                      onSelect={() => setIsOpen(false)}
                    />
                  ))}
                </div>
              </div>
              <Link href="/resources" onClick={() => setIsOpen(false)}>
                RESOURCES
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                CONTACT
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="text-lg font-bold text-primary block lg:hidden"
        >
          Logo 2
        </Link>
      </div>
    </header>
  );
}
