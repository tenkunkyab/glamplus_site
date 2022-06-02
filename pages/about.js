import Image from "next/image";

import AboutTop from "../components/AboutTop";
import Culture from "../components/Culture";
import Team from "../components/Team";
import Journey from "../components/Journey";
import Impact from "../components/Impact";

// utils
import useWindowSize from "../utils/useWindowSize";

function About() {
  const { width, height } = useWindowSize();

  return (
    <div className="w-full overflow-hidden relative">
      {/* BG images */}
      {width > 1000 ? (
        // bigScreen background view
        <>
          <div className="w-full h-[30%] lg:h-[40%] xl:h-[35%] absolute z-0">
            <Image
              src="/images/careersBG1.svg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full h-[70%] bottom-[-6%] lg:h-[80%] xl:h-[90%] xl:bottom-[-10%] absolute z-0">
            <Image
              src="/images/aboutBG2.svg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      ) : (
        // mobile background view
        <>
          <div className="w-full h-[40%] sm:h-[50%] md:h-[60%] absolute z-0">
            <Image
              src="/images/careersMobileBG1.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="top left"
            />
          </div>
          <div className="w-full h-[50%] top-[40%] sm:h-[40%] sm:top-[50%] md:h-[40%] md:top-[60%] absolute z-0">
            <Image src="/images/careersMobileBG2.svg" layout="fill" />
          </div>
        </>
      )}
      {/* componnets */}
      <div className="relative max-w-[1800px] m-auto flex flex-col items-center gap-[80px] md:gap-[120px] xl:gap-[150px] pt-[30px] pb-[40px] md:py-[50px] lg:py-[100px] xl:py-[140px]">
        <AboutTop className="px-[20px] md:px-[50px] lg:px-[20px]" />
        <Team className="px-[20px]" />
        <Culture className="px-[40px] md:px-[20px]" />
        <button className="button w-[90%] md:w-[586px] max-w-[586px] text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] lg:p-[20px]">
          Join Our Team
        </button>
        <Journey className="px-[20px]" />
        <Impact />
        <div className="px-[30px] w-full sm:w-[80%] md:w-[70%]  grid grid-cols-2  gap-[50px] xl:gap-[100px] justify-items-center">
          <button className="button w-full max-w-[453px] text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] lg:p-[20px]">
            Join Our Team
          </button>
          <button 
          className=" border-[1.5px] border-[#0BACF0] w-full max-w-[453px] rounded-[10px] text-primary font-[700] text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] lg:p-[20px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
