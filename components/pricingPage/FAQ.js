import Image from "next/image";
import React from "react";

function Faq() {
  return (
    <div className="font-poppins mb-10">
      <h1 className="font-[600] text-[20px] leading-[25px] text-center sm:text-[28px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[60px] lg:leading-[74px]">
        FAQs
      </h1>
      <div className="p-4 max-w-[1600px] m-auto">
        {lists.map((list, index) => {
          return (
            <div className="group py-2 border-b-2 outline-none accordion-section" tabindex={index}>
              <div className="group flex justify-between px-4 py-3 items-center transition ease duration-300 cursor-pointer pr-10 relative">
                <div className="text-[14px] transition ease duration-300 md:text-[18px] lg:text-[40px]">
                  {list.title}{" "}
                </div>
                <div className="items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <Image src="/icons/downArrow.svg" width="36" height="36" />
                </div>
              </div>
              <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-300">
                <p className="text-[10px] p-2 text-justify md:text-[16px] lg:text-[24px]">{list.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;

const lists = [
  {
    title: "Is there a free trial available?",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Is there a free trial available?",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Is there a free trial available?",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Is there a free trial available?",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
