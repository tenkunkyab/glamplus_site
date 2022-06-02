import React from "react";

function pricing() {
  return (
    <div className="font-poppins">
      <h1 className="text-[20px] font-[600] text-center mt-6">
        Amazing Plans to Boost your <br /> Customer Experience
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10">
        {pricings.map((pricing) => {
          return (
            <div
              key={pricing.title}
              className={`w-[300px] rounded-[17px] pricing-shadow bg-white border-t-[19px] p-4`}
              style={{ borderColor: pricing.color }}
            >
              <h1 className={`text-[#C56A4E] text-[20px]`} style={{ color: pricing.color }}>
                {pricing.title}
              </h1>
              <h1 className="font-bold text-[30px]">&#8377; {pricing.price}</h1>
              <p className="text-[#9D9D9D] text-[12px] mb-2">{pricing.duration} Days </p>
              <ul className="list-disc pl-4 mb-8">
                {pricing.list.map((lis, index) => (
                  <li key={index} style={{ color: pricing.color }}>
                    <span className="text-black text-[14px]">{lis}</span>
                  </li>
                ))}
              </ul>
              <button
                style={{ backgroundColor: pricing.color }}
                className="text-white w-full h-[33px] rounded-[10px] text-[14px] mt-4"
              >
                Get It Now
              </button>
            </div>
          );
        })}
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
