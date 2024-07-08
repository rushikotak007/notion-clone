import Image from "next/image";
const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5x1">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/document.svg"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          {" "}
          <Image
            src="/reading.svg"
            fill
            className="object-contain"
            alt="Reading"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Heros;
