import Heading from "./_components/Heading";
import Heros from "./_components/Heros";
import Footer from "@/components/Footer";

export default function MarketingPage() {
  return (
    <div className="flex min-h-full flex-col">
        <div className="flex flex-col justify-center items-center md:justify-start gap-y-8 text-center px-6 pb-10 flex-1">
          <Heading/>
          <Heros/>
        </div>
        <Footer/>
      </div>
  );
}
