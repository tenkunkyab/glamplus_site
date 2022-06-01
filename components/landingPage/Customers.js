import Image from "next/image";
import React, { useState } from "react";

function Customers() {
  const [pauseAnimation, setPauseAnimation] = useState(false);
  return (
    <div className="min-h-[600px] h-full py-10 max-w-[1800px] m-auto xl:min-h-[800px]">
      <h1 className="font-[600] text-[24px] leading-[25px] mb-10 text-center sm:text-[28px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[60px] lg:leading-[74px]">
        See why 50k+ Customers <br /> Love Us?
      </h1>
      <div
        className={`tech-slideshow min-w-fit min-h-[350px] p-2 m-auto xl:min-h-[500px] xl:w-[1540px]`}
        onClick={() => setPauseAnimation(!pauseAnimation)}
      >
        <div
          className={`mover-1 lg:relative ${pauseAnimation ? "pause-animation" : "start-animation"} xl:animation-none`}
        >
          {reviews.map((review, index) => {
            return (
              <div
                key={index}
                // key={review.imageUrl}
                className="w-[402px] rounded-[20px] customer-review-shadow p-6 xxl:w-[462px] xl:p-10"
              >
                <div className="pb-6">
                  <Image src="/LandingPageImg/comma.png" className="" width="60" height="40" />
                </div>
                <p className="text-[12px] md:text-[14px] xl:text-[18px]">{review.description} </p>
                <div className="flex items-center gap-6 mt-6">
                  <Image src="/LandingPageImg/avtar.png" className="rounded-full" width="76" height="76" />
                  <div>
                    <h1 className="text-[18px] font-[500] xl:text-[20px]">{review.name} </h1>
                    <p className="text-[#828282] text-[16px] xl:text-[18px]">{review.place}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Customers;

const reviews = [
  {
    name: "Irich Salon",
    place: "Bangalore",
    imageUrl: "/#1",
    description:
      "“Abhi mereko customer ko apne offer bhejne ho chahe SMS se ya whatsapp, Glamplus se bahut aasaani se data upload karo and send karo. Kaafi achee features hai and pricing bhi achhi hai”",
  },
  {
    name: "The Vanity Crave",
    place: "Bangalore",
    imageUrl: "/#2",
    description:
      "When we started our salon chain in Bangalore we were desperately looking for the software and the we got to know about Glam plus, Now its been months we were using it had no issues till now, all the datas is been managed so well with correct info also the best part about the glam plus is they are open to suggestions and they always works towards it. Thank you Glamplus.",
  },
  {
    name: "Signature Salon & Spa",
    place: "Kolkata",
    imageUrl: "/#3",
    description:
      "I am running signature salon & spa at saltlake since july 2021 & during this period we don't use any software and I don't have much idea about those software, also one & two software companies person visit in my salon but they dont cover all features which spa needs but after hearing about Glamplus from the executive, I found the software quite effective and solves my daily appointment problems, Initially it took me 1 week to understand but now I am using it everyday and making full use of it. I am satisfied with their service and cost effectiveness. Thank you Glamplus.",
  },
  {
    name: "Amazing cuts and Salon",
    place: "Surat",
    imageUrl: "/#3",
    description:
      "I have started using Glamplus software recently since last 20 days for my daily salon appointments, best thing that i like about the software is campaign management on whatsApp which has resulted in generating higher sales for my shop. Team is very supportive and open to suggestions. Invoice management, WhatsApp booking and membership features are so simple to use and sell to clients that I can engage my clients for longer duration.",
  },
  {
    name: "Blue Belle",
    place: "Kolkata",
    imageUrl: "/#4",
    description:
      "I am running an Unisex Salon at Kolkata since last 5 yrs and in during this period I have used at least 2-3 software for my Salon but those were not economical specially in this pandemic situation when every penny matters. Hearing about Glamplus and learning it as a one stop shop for Salon solutions with regard to Billing, Inventory management, Expense Staff attendance and Incentive management, Analytics etc. Now I am using it everyday and making full use of it. I would highly recommended others to try Glamplus and see the benefits that one can derive at the minimalistic cost.",
  },

  


];
