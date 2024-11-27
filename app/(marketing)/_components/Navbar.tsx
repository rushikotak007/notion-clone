"use client";

import Logo from "@/components/Logo";
import Link from "next/link";

import { SignInButton, UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "@/components/ModeToggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useConvexAuth } from "convex/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Spinner";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "fixed top-0 p-6 w-full bg-background dark:bg-[#1f1f1f] z-50 flex items-center",
        scrolled && "border-b shadow-lg"
      )}
    >
      <Logo />
      <div className="md: ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner size="default" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading &&(
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
