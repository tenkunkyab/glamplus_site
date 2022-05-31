import Image from "next/image";

function CareersTop({ className }) {
  return (
    <div className={`w-full flex flex-col-reverse gap-[20px] items-center p-[20px]  lg:flex-row  ${className}`}>
      {/* left */}
      <div className="lg:flex-1 w-full h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto  relative">
        <Image
          src="/images/timeHand.png"
          layout="fill"
          objectFit="contain"
          alt="holding time"
        />
      </div>
      {/* right */}
      <div className="lg:flex-1 flex flex-col items-center lg:items-start lg:justify-center gap-[50px] md:p-[20px]">
        <div className="flex flex-col gap-[10px] items-center lg:items-start">
          <h1 className="bigText text-center">Let’s Grow Together</h1>
          <h1 className="text-[#5A5A5A] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-center lg:text-left">
            Glamplus is hiring! If you're interested in helping to build SaaS
            software to change the way service businesses operate, we want to
            hear from you. We are a small and fast growing team.
          </h1>
        </div>
        <div className=" w-full sm:w-[70%] lg:w-[50%]">
          <button className="button w-[100%] mx-auto text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] lg:p-[20px]">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default CareersTop;
