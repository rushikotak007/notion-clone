"use client";

import { Spinner } from "@/components/Spinner";
import Navigation from "./_components/Navigation";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation/>
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
