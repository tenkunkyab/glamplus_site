/** @format */

import Image from "next/image";

import Culture from "../components/Culture";
import Benefits from "../components/Benefits";
import ContactForm from "../components/ContactForm";
import CareersTop from "../components/CareersTop";

// utils
import useWindowSize from "../utils/useWindowSize";

function Careers() {
  const { width, height } = useWindowSize();



  return (
    <div className="w-full overflow-hidden relative mx-auto">
      {/* BG images */}
      {width > 1000 ? (
        // bigScreen background view
        <>
          <div className="w-[1600px] md:w-full lg:w-full  absolute z-0 ">
            <Image
              src="/images/careersBG1.svg"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className="w-[1600px] md:w-full lg:w-full  absolute bottom-0 z-0 ">
            <Image
              src="/images/careersBG2.svg"
              width={10}
              height={width > 1000? 8 : 6}
              layout="responsive"
            />
          </div>
        </>
      ) : (
        // mobile background view
        <>
          <div className="w-full h-[40%] sm:h-[50%] md:h-[50%] absolute z-0">
            <Image
              src="/images/careersMobileBG1.svg"
              layout="fill"
              objectFit="cover"
            // objectPosition="top left"
            />
          </div>
          <div className="w-full h-[50%] top-[20%] sm:h-[40%] sm:top-[50%] md:h-[50%] md:top-[50%] absolute z-0">
            <Image src="/images/careersMobileBG2.svg" layout="fill" />
          </div>
        </>
      )}
      {/* componnets */}
      <div className="relative  max-w-[1800px] m-auto flex flex-col items-center gap-[80px] md:gap-[120px] xl:gap-[150px] px-[30px] py-[30px] md:py-[100px] ">
        <CareersTop />
        <Culture className="px-[20px] md:px-[10px]" />
        <button className="button w-full md:w-[586px] max-w-[586px] text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] lg:p-[20px]">
          Join Our Team
        </button>
        <Benefits className="lg:px-[100px]" />
        <ContactForm className="lg:px-[50px]" />
      </div>
    </div>
  );
}

export default Careers;
