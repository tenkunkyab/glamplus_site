import Image from "next/image";
import React from "react";

function Main() {
  return (
    <div className="relative h-full pb-10 md:min-h-[400px] lg:landing1-height lg:pb-10">
      <Image src="/LandingPageImg/bg1.jpg" layout="fill" priority />
      <div className="max-w-[1500px] m-auto">
        <div className="flex justify-center items-center flex-col relative h-full pt-2 md:flex-row md:text-left md:min-h-[400px] lg:min-h-[600px]">
          <div className="w-full pt-10 flex flex-col justify-center gap-2 text-center items-center md:text-left md:items-start md:pl-6 xl:pl-16">
            <h1 className="font-semibold text-[24px] leading-[28px] sm:text-[35px] sm:leading-[45px] lg:text-[50px] lg:leading-[60px]">
              All-in-One Software for <br />
              Salon Management
            </h1>
            <h2 className="text-primary font-[400] text-[16px] sm:text-[24px] lg:text-[38px]">
              Easy. Automated. Scalable
            </h2>
            <p className="text-[#6C6C6C] font-[500] text-[8px] leading-[12px] w-[250px] tracking-[-0.017em] sm:text-[16px] sm:leading-[20px] sm:w-[500px] lg:text-[20px] lg:w-[600px] lg:leading-[30px]">
              Simplify operations, personalize communications, and grow your business with Glamplus’s ultimate platform.
            </p>
            <button className="free-btn text-[12px] mt-4 w-[186px] h-[33px] sm:w-[225px] sm:h-[48px] sm:text-[16px] lg:w-[306px] lg:h-[66px] lg:text-[20px]">
              Get Started For Free
            </button>
          </div>
          <div className="pl-10 sm:pl-16 md:pl-0">
            <Image src="/LandingPageImg/img1.png" width="1000" height="700" />
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end lg:pr-10">
          <div className="absolute flex gap-2 sm:gap-6 lg:relative">
            {data.map(({ title, value }) => {
              return (
                <div
                  key={value}
                  className="w-[79px] h-[72px] box-shadow rounded-[7px] flex flex-col items-center justify-center bg-white sm:w-[110px] sm:h-[82px] lg:w-[213px] lg:h-[178px] lg:rounded-[19px]"
                >
                  <h1 className="font-bold text-[24px] text-primary sm:text-[28px] lg:text-[64px]">{value}</h1>
                  <p className="text-[6px] sm:text-[8px] lg:text-[20px]">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

const data = [
  {
    title: "Customers",
    value: "50k+",
  },
  {
    title: "Parnters",
    value: "4k+",
  },
  {
    title: "Staff",
    value: "6.5k+",
  },
  {
    title: "Cities Operational",
    value: "6",
  },
];
