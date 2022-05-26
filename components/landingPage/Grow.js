import Image from "next/image";
import React from "react";

function Grow() {
  return (
    <div className="bg-[#F5F7FA] ">
      <div className="max-w-[1600px] relative h-full m-auto">
        <div className="hidden md:inline">
          <Image src="/LandingPageImg/grow1.png" layout="fill" priority />
          <div className="rounded-[15px] w-[303px] h-[170x] p-4 bg-white border absolute bottom-10 right-10 xl:p-8 xl:w-[380px] xl:h-[205px]">
            <h1 className="text-[20px] font-[600]">Feedback</h1>
            <div className="mt-6">
              <div className="flex justify-between w-[280px] xl:w-[320px]">
                <Image src="/LandingPageImg/sadEmoj.png" width="36" height="36" />
                <Image src="/LandingPageImg/normalEmoj.png" width="36" height="36" />
                <Image src="/LandingPageImg/happyEmoj.png" width="36" height="36" />
              </div>
              <Image src="/LandingPageImg/grow2.png" width="310" height="44" />
            </div>
          </div>
        </div>
        <div className="flex relative h-full items-center justify-center p-6 md:justify-start md:min-h-[750px]">
          <div className="md:w-[500px] xl:w-[700px]">
            <h1 className="text-[12px] font-[500] text-primary sm:text-[14px] md:text-[16px] lg:text-[30px]">Grow</h1>
            <h1 className="text-[16px] font-[600] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[48px]">
              Grow your business with loyal clients
            </h1>
            <p className="text-[#6C6C6C] text-[10px] leading-[15px] font-[400] tracking-[-0.017em] sm:text-[13px] sm:leading-[20px] md:text-[15px] md:leading-[25px] xl:text-[18px] xl:leading-[30px]">
              That's why, we've built our software around making sure that you can use your salon as a marketing tool.
            </p>
            <div className="my-8 flex items-center justify-center md:hidden">
              <Image src="/LandingPageImg/growMobile.png" width="300" height="327" />
            </div>
            <ul className="list-disc pl-8 mt-6 leading-[20px] sm:leading-[25px] md:leading-[30px] xl:leading-[35px]">
              {list.map((lis) => (
                <li key={lis} className="text-[10px] font-[400] sm:text-[13px] md:text-[15px] xl:text-[18px]">
                  {lis}
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8 md:justify-start">
              <button className="free-btn text-[12px] w-[306px] h-[36px] lg:h-[66px] lg:text-[20px]">
                Start Growing Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grow;

const list = [
  "Email marketing campaigns that remind clients of their appointments and give them special offers to comeback again soon.",
  "Customizable online booking systems that help clients find you easily and remember who they've bookedwith before.",
  "A website that makes it easy for clients to book appointments online, find directions, and see the latest deals and promotions in one place.",
];
