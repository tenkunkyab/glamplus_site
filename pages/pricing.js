import Image from "next/image";
import React from "react";
import ContactForm from "../components/ContactForm";
import CompareFeatures from "../components/pricingPage/CompareFeatures";
import Faq from "../components/pricingPage/FAQ";

function pricing() {
  return (
    <div className="font-poppins pb-20 relative">
      <h1 className="font-[600] mt-8 text-[20px] leading-[25px] mb-4 text-center sm:text-[28px] sm:leading-[34px] md:text-[34px] md:leading-[40px] md:mb-8 lg:text-[60px] lg:leading-[74px]">
        Amazing Plans to Boost your <br /> Customer Experience
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10">
        {pricings.map((pricing) => {
          return (
            <div
              key={pricing.title}
              className={`w-[300px] rounded-[17px] pricing-shadow bg-white border-t-[19px] p-4 lg:w-[385px]`}
              style={{ borderColor: pricing.color }}
            >
              <h1 className={`text-[#C56A4E] text-[20px]`} style={{ color: pricing.color }}>
                {pricing.title}
              </h1>
              <h1 className="font-bold text-[30px] lg:text-[48px]">&#8377; {pricing.price}</h1>
              <p className="text-[#9D9D9D] text-[12px] mb-2">{pricing.duration} Days </p>
              <ul className="list-disc pl-4 mb-8 lg:leading-[30px]">
                {pricing.list.map((lis, index) => (
                  <li key={index} style={{ color: pricing.color }}>
                    <span className="text-black text-[14px] lg:text-[18px]">{lis}</span>
                  </li>
                ))}
              </ul>
              <button
                style={{ backgroundColor: pricing.color }}
                className="text-white w-full h-[33px] rounded-[10px] text-[14px] mt-4 lg:h-[66px] lg:text-[20px] lg:mt-6"
              >
                Get It Now
              </button>
            </div>
          );
        })}
      </div>
      <div className="h-[200px] bg-[#E6F2F7] rounded-[10px] lg:mx-8 mb-8 flex flex-col gap-8 items-center justify-center md:h-[280px] md:gap-16 lg:h-[350px] xl:h-[400px]">
        <h1 className="text-[20px] px-2 font-[600] text-center leading-[30px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[74px]">
          Try it out for free. You will get to use all the <br /> features for 14 days.
        </h1>
        <button className="free-btn text-[14px] w-[85%] sm:w-[280px] h-[33px] md:h-[40px] lg:h-[66px]">
          Try It Out
        </button>
      </div>
      <div className="absolute bottom-0">
        <Image src="/images/pricingBg2.svg" layout="fill" />
      </div>
      <div className="relative right-0">
        <CompareFeatures />
        <Faq />
        <ContactForm className="px-[15px] md:px-[30px] lg:px-[50px]" />
      </div>
    </div>
  );
}

export default pricing;

const pricings = [
  {
    title: "BRONZE",
    color: "#C56A4E",
    duration: "14",
    price: "4,000",
    list: [
      "Reminder notification",
      "Expense Management",
      "Bulk Promotion",
      "6000 WhatsApp Promotion",
      "15,000 Promotional SMS",
      "Own Logo",
    ],
  },
  {
    title: "SILVER",
    color: "#B9B9B9",
    duration: "14",
    price: "7,000",
    list: [
      "Reminder notification",
      "Expense Management",
      "Bulk Promotion",
      "6000 WhatsApp Promotion",
      "15,000 Promotional SMS",
      "Own Logo",
    ],
  },
  {
    title: "GOLD",
    color: "#FF9900",
    duration: "14",
    price: "7,000",
    list: [
      "Reminder notification",
      "Expense Management",
      "Bulk Promotion",
      "6000 WhatsApp Promotion",
      "15,000 Promotional SMS",
      "Own Logo",
    ],
  },
];
