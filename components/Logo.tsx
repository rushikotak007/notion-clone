import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 w-max">
      <Image src="/logo.svg" width={40} height={40} alt="logo" />
      <h1
        className={cn(
          "text-2xl font-bold min-w-max",
          "text-primary tracking-tight",
          "dark:text-primary-dark"
        )}
      >
        Notion Clone
      </h1>
    </div>
  );
};

export default Logo;
