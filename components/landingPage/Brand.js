import Image from "next/image";
import React from "react";

function Brand() {
  return (
    <div className="mt-20 mb-20 lg:mt-10">
      <h1 className="text-[20px] text-center mb-10 font-[600] md:text-[35px] lg:text-[48px]">Brands That Love Us</h1>
      <div className="flex justify-center items-center gap-8 max-w-[1200px] m-auto md:gap-20">
        <Image src="/LandingPageImg/brand/1.png" width="199" height="83" />
        <Image src="/LandingPageImg/brand/2.png" width="85px" height="70" />
        <Image src="/LandingPageImg/brand/3.png" width="174" height="31" />
        <Image src="/LandingPageImg/brand/4.png" width="185" height="45" />
        <Image src="/LandingPageImg/brand/5.png" width="123" height="64" />
        <Image src="/LandingPageImg/brand/6.png" width="134" height="57" />
      </div>
    </div>
  );
}

export default Brand;
