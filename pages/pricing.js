import Image from "next/image";
import React from "react";
import ContactForm from "../components/ContactForm";
import CompareFeatures from "../components/pricingPage/CompareFeatures";

function pricing() {
  return (
    <>
      <div className="w-full h-full absolute z-0">
        <Image src="/images/big_background.png" layout="fill" objectFit="cover" />
      </div>
      <div className="font-poppins py-20 relative">
        <h1 className="font-[600] mb-4 text-center sm:text-[28px] sm:leading-[34px] md:mb-8 text-[24px] px-2 leading-[24px] md:text-[30px] md:leading-[30px] lg:text-[34px] lg:leading-[34px] xl:text-[40px] xl:leading-[48px]">
          Amazing Plans to Boost your <br /> Customer Experience
        </h1>
        <div className="flex flex-wrap items-center justify-center px-4 gap-10 md:gap-16 lg:gap-18 xl:gap-22 py-20">
          {pricings.map((pricing) => {
            return (
              <div
                key={pricing.title}
                className={`w-[300px] rounded-[17px] pricing-shadow bg-white border-t-[19px] px-4 py-8 lg:w-[385px]`}
                style={{ borderColor: pricing.color }}
              >
                <h1 className={`text-[#C56A4E] text-[20px]`} style={{ color: pricing.color }}>
                  {pricing.title}
                </h1>
                <h1 className="font-bold text-[30px] lg:text-[48px]">&#8377; {pricing.price}</h1>
                <p className="text-[#9D9D9D] text-[12px] mb-2">{pricing.duration} Days </p>
                <ul className="list-disc pl-4 mb-8 lg:leading-[36px]">
                  {pricing.list.map((lis, index) => (
                    <li key={index} style={{ color: pricing.color }}>
                      <span className="text-gray-600 text-[14px] lg:text-[18px]">{lis}</span>
                    </li>
                  ))}
                </ul>
                <form action="mailto:cx@glamplus.in">
                  <input type="hidden" name="subject" value={`${pricing.title} Package Purchase`} />
                  <button
                    style={{ backgroundColor: pricing.color }}
                    className="text-white w-full h-[33px] rounded-[10px] text-[18px] mt-4 lg:h-[66px] lg:text-[20px] lg:mt-6"
                  >
                    Get It Now
                  </button>
                </form>
              </div>
            );
          })}
        </div>
        <div className="h-[350px] bg-[#E6F2F7] rounded-[10px] lg:mx-8 mb-8 flex flex-col gap-8 items-center justify-center md:h-[280px] md:gap-16 lg:h-[350px] xl:h-[400px] py-20">
          <h1 className="text-[24px] px-2 font-[600] text-center leading-[24px] md:text-[30px] md:leading-[30px] lg:text-[34px] lg:leading-[34px] xl:text-[40px] xl:leading-[48px]">
            Try it out for free. You will get to use all the <br /> features for 14 days.
          </h1>
          <form action="mailto:cx@glamplus.in">
            <input type="hidden" name="subject" value="New Customer Demo" />
            <button className="free-btn  w-[85%] text-[18px] lg:text-[20px] 2xl:text-[32px] sm:w-[280px] h-[33px] md:h-[40px] lg:h-[66px]">
              Try It Out
            </button>
          </form>
        </div>
        <div className="absolute bottom-0">
          <Image src="/images/pricingBg2.svg" layout="fill" />
        </div>
        <div className="relative right-0">
          <CompareFeatures />
          {/* <Faq /> */}
          <ContactForm className="px-[15px] md:px-[30px] lg:px-[50px] py-10 lg:py-20" />
        </div>
      </div>
    </>
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
