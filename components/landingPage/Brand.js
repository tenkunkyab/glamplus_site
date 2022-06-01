import Image from "next/image";
import React, { useState } from "react";

function Brand() {
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const triggerAnimationPause = () => {
    setPauseAnimation(!pauseAnimation)
  }
  return (
    <div className="mt-20 mb-20 lg:mt-10">
      <h1 className="text-[20px] text-center mb-10 font-[600] md:text-[35px] lg:text-[48px]">Buy From Your Favourite Brands Here</h1>
      <div
        className={`tech-slideshow min-w-fit p-2 m-auto lg:max-w-[1200px]`}
        onMouseOver={triggerAnimationPause}
        onClick={triggerAnimationPause}
      >
        <div
          className={`mover-1 lg:relative ${pauseAnimation ? "pause-animation" : "start-animation"} lg:animation-none`}
        >
          <Image src="/LandingPageImg/brand/1.png" width="199" height="83" layout="fixed" />
          <Image src="/LandingPageImg/brand/2.png" width="85" height="70" layout="fixed" />
          <Image src="/LandingPageImg/brand/3.png" width="174" height="31" layout="fixed" />
          <Image src="/LandingPageImg/brand/4.png" width="185" height="45" layout="fixed" />
          <Image src="/LandingPageImg/brand/5.png" width="123" height="64" layout="fixed" />
          <Image src="/LandingPageImg/brand/6.png" width="134" height="57" layout="fixed" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
