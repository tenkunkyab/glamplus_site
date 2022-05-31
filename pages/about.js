import Image from "next/image";

import AboutTop from "../components/AboutTop";
import Culture from "../components/Culture";
import Team from "../components/Team";
import Journey from "../components/Journey";
import Impact from "../components/Impact";

// utils
import useWindowSize from "../utils/useWindowSize";

function Careers() {
  const { width, height } = useWindowSize();

  return (
    <div className="w-full overflow-hidden max-w-[2000px] relative">
      {/* BG images */}
      {width > 1000 ? (
        // bigScreen background view
        <>
          <div className="w-full absolute z-0">
            <Image
              src="/images/careersBG1.svg"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className="w-full bottom-0 absolute z-0">
            <Image
              src="/images/careersBG2.svg"
              width={3}
              height={width>1500?2:width>1300?2.3:3}
              layout="responsive"
            />
          </div>
        </>
      ) : (
        // mobile background view
        <>
          <div className="w-full h-[50%] absolute z-0">
            <Image
              src="/images/careersMobileBG1.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
            />
          </div>
          <div className="w-full h-[50%] bottom-0 absolute z-0">
            <Image src="/images/careersMobileBG2.svg" layout="fill" />
          </div>{" "}
        </>
      )}
      {/* componnets */}
      <div className="relative md:w-[90%] m-auto flex flex-col  items-center gap-[50px] md-gap-[100px] px-[20px] py-[30px] md:py-[100px] ">
        <AboutTop />
        <Team/>
        <Culture />
        <button className="button min-w-[250px] max-w-[400px] ">
          Join Our Team
        </button>
        <Journey />
        <Impact />
      </div>
    </div>
  );
}

export default Careers;
