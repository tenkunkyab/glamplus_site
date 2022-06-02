import Image from "next/image";
import React from "react";

function Manage() {
  return (
    <div id="features" className="bg-[#F5F7FA] h-full py-32 lg:min-h-[0px]">
      <div className="pb-10">
        <h1 className="font-[600] text-[20px] leading-[25px] text-center sm:text-[28px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[60px] lg:leading-[74px]">
          A Complete Solution for your <br /> Business Needs
        </h1>
      </div>
      <div className="flex flex-col gap-10 max-w-[1900px] m-auto items-center justify-between mt-8 md:flex-row">
        <div className="px-4 lg:w-[800px]">
          <p className="text-[12px] font-[500] text-primary sm:text-[14px] md:text-[16px] lg:text-[30px]">MANAGE</p>
          <h1 className="text-[16px] font-[600] sm:text-[20px] md:text-[24px] lg:text-[48px]">Focus on your client</h1>
          <p className="text-[#6C6C6C] text-[10px] leading-[15px] font-[400] tracking-[-0.017em] sm:text-[13px] sm:leading-[20px] md:text-[15px] md:leading-[25px] lg:text-[18px] lg:leading-[30px]">
            We get it. Running a salon is hard. You&apos;re always on the go, you have a million things to do, and your
            clients have so many questions, but they don&apos;t come with instruction manuals!
          </p>
          <div className="m-auto relative w-full max-w-[400px] h-[200px] my-8 md:hidden">
            <Image src="/LandingPageImg/bookingMobile.png" layout="fill" />
          </div>
          <ul className="list-disc pl-8 mt-6 leading-[20px] sm:leading-[25px] md:leading-[30px] lg:leading-[35px]">
            {list.map((lis) => (
              <li key={lis} className="text-[10px] font-[400] sm:text-[13px] md:text-[15px] lg:text-[18px]">
                {lis}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-8 md:justify-start">
            <button className="free-btn text-[12px] w-[306px] h-[36px] lg:h-[66px] lg:text-[20px]">
              Start Managing Now
            </button>
          </div>
        </div>
        <div className="hidden md:inline">
          <Image src="/LandingPageImg/booking.png" width="900" height="609" />
        </div>
      </div>
    </div>
  );
}

export default Manage;

const list = [
  "Keep track of your appointments and client data",
  "Create custom treatments for every client (and keep them consistent!)",
  "Build loyalty with memberships and rewards programs",
];
