import React from "react";

function Learn() {
  return (
    <div className="h-[200px] bg-[#E6F2F7] rounded-[10px] mx-8 mb-8 flex flex-col gap-8 items-center justify-center md:h-[280px] md:gap-16 lg:h-[350px] xl:h-[400px]">
      <h1 className="text-[20px] font-[600] text-center leading-[30px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[74px]">
        Want to learn more about us? <br /> Let’s get you started!
      </h1>
      <button className="free-btn text-[14px] w-[85%] sm:w-[280px] h-[33px] md:h-[40px] lg:h-[66px]">
        Schedule a Demo
      </button>
    </div>
  );
}

export default Learn;
