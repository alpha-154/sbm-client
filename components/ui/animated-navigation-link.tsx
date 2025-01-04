import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedNavigationLinkProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuLink> {
  children: React.ReactNode;
}

const AnimatedNavigationLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuLink>,
  AnimatedNavigationLinkProps
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuLink
      ref={ref}
      className={cn(
        "group relative inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs font-bold transition-colors  hover:text-primary focus:bg-background focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-background text-primary",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out",
        "hover:after:scale-x-100 focus:after:scale-x-100 active:after:scale-x-100",
        className
      )}
      {...props}
    >
      {children}
    </NavigationMenuLink>
  );
});

AnimatedNavigationLink.displayName = "AnimatedNavigationLink";

export default AnimatedNavigationLink;
