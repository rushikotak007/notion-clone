"use client";

import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Spinner";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion Clone</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="lg">Get Jotion for Free
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter to Notion Clone <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Heading;
