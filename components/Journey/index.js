import Image from "next/image";

function Journey() {
  return (
    <div className="w-[100%] flex flex-col items-center gap-[20px] lg:gap-[50px]">
      {/* heading */}
      <div
        className={`m-auto w-[90%] lg:w-[70%] flex flex-col items-center`}
      >
        <span className="componentTitle">OUR JOURNEY</span>
        <span className="bigText text-center">We Have Come a Long Way...</span>
      </div>
      {/*  */}
      <div className="w-[100%] h-[40vw] xl:h-[30vw] relative">
        <Image
          src="/images/journey.svg"
          layout="fill"
          objectFit="contain"
          alt="Our Journey"
        />
      </div>
    </div>
  );
}

export default Journey;
