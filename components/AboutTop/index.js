import Image from "next/image";
import useWindowSize from "../../utils/useWindowSize";

function AboutTop({ className }) {
  const { width } = useWindowSize();

  return (
    <div
      className={`w-full flex flex-col gap-[20px] items-center p-[20px]  lg:flex-row  ${className}`}
    >
      {/* left or top*/}
      <div className="lg:flex-1 flex flex-col gap-[10px] items-center lg:items-start md:p-[20px]">
        <h1 className="bigText  text-center lg:text-left">
          Manage. Experience. Grow.
        </h1>
        <h1 className="text-[#5A5A5A] text-[16px] md:text-[18px] lg:text-[20px] text-center lg:text-left">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. write the mission and purpose
        </h1>
      </div>
      {/* right or bottom*/}
      <div className="lg:flex-1 w-full h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto  relative">
        <Image
          src="/images/handsGroup.png"
          layout="fill"
          objectFit="contain"
          objectPosition={width >= 1100 ? "center" : "top"}
          alt="holding time"
        />
      </div>
    </div>
  );
}

export default AboutTop;
