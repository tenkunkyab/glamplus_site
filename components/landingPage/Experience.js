import Image from "next/image";
import React from "react";

function Experience() {
  return (
    <div className="h-full py-44 max-w-[1900px] m-auto md:min-h-[600px] xl:min-h-[800px]">
      <div className="flex justify-between items-center mg:gap-16">
        <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
          <div className="relative md:w-[300px] xl:w-[450px] ">
            <Image className="rounded-[19px]" src="/LandingPageImg/exp1.png" width="450" height="530" />
            <div className="absolute top-[61.5%] left-[60%] border-4 bg-white border-white rounded-[13px] w-[200px] xl:w-[290px]">
              <Image src="/LandingPageImg/exp2.png" width="290" height="195" />
              <div className="">
                <div className="flex justify-between">
                  <h1 className="font-[600] leading-[30px] text-[20px]">Spa World</h1>
                  <div>
                    <Image src="/LandingPageImg/star.png" width="17" height="17" />
                    <Image src="/LandingPageImg/star.png" width="17" height="17" />
                    <Image src="/LandingPageImg/star.png" width="17" height="17" />
                    <Image src="/LandingPageImg/star.png" width="17" height="17" />
                    <Image src="/LandingPageImg/star.png" width="17" height="17" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-[12px] leading-[18px] font-[400]">
                    Vadodara, Gujarat,
                    <br /> 390002
                  </p>
                  <p className="text-[10px] text-[#9C9C9C]">125 Reviews</p>
                </div>
                <button className="rounded-[9px] bg-[#ADE7FF] text-primary w-full h-[48px] mt-6">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-6 flex-col gap-10 max-w-[1900px] m-auto items-center justify-between mt-8 md:flex-1 md:flex-row">
          <div className="xl:w-[620px]">
            <h1 className="text-[12px] font-[500] text-primary sm:text-[14px] md:text-[16px] lg:text-[30px]">
              Experience
            </h1>
            <h1 className="text-[16px] font-[600] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[48px]">
              Simple, from booking to checkout
            </h1>
            <p className="text-[#6C6C6C] text-[10px] leading-[15px] font-[400] tracking-[-0.017em] sm:text-[13px] sm:leading-[20px] md:text-[15px] md:leading-[25px] xl:text-[18px] xl:leading-[30px]">
              When it comes to client service, sometimes the best way to provide a positive customer experience is to
              minimize contact.
            </p>
            <div className="flex justify-center my-8 md:hidden">
              <Image src="/LandingPageImg/expMobile.png" width="299" height="229" />
            </div>
            <ul className="list-disc pl-8 mt-6 leading-[20px] sm:leading-[25px] md:leading-[30px] xl:leading-[35px]">
              {list.map((lis) => (
                <li key={lis} className="text-[10px] font-[400] sm:text-[13px] md:text-[15px] xl:text-[18px]">
                  {lis}
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8 md:justify-start">
              <button className="free-btn text-[12px] w-[306px] h-[36px] lg:h-[66px] lg:text-[20px]">Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

const list = [
  "Collect and save payment details during appointment booking for a contactless checkout when clients visit",
  "Keep your waiting area safe by letting your AI receptionist check clients in to your salon—automatically",
];
