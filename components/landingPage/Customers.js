import Image from "next/image";
import React from "react";

function Customers() {
  return (
    <div className="min-h-[800px] h-full py-10 max-w-[1800px] m-auto">
      <h1 className="font-[600] text-[24px] leading-[25px] text-center sm:text-[28px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[60px] lg:leading-[74px]">
        See why 50k+ Customers <br /> Love Us?
      </h1>
      <div className="flex flex-wrap gap-10 justify-around px-10 mt-14">
        {reviews.map((review) => {
          return (
            <div
              key={review.imageUrl}
              className="w-[402px] rounded-[20px] customer-review-shadow p-6 xl:w-[462px] xl:p-10"
            >
              <div className="pb-6">
                <Image src="/LandingPageImg/comma.png" className="" width="60" height="40" />
              </div>
              <p className="text-[16px] xl:text-[18px]">{review.description} </p>
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
  );
}

export default Customers;

const reviews = [
  {
    name: "The Vanity Crave",
    place: "Bangalore",
    imageUrl: "/#1",
    description:
      "“Bahut hi easy software hai use karne me, aap salon pe ho ya nahi mobile ke through salon ki poori activity monitor kar sakte hai, abhi notebook se chutkara mil gya hai and customer se directly hum apne whatsapp pe engage kar sakte hai”",
  },
  {
    name: "The Vanity Crave",
    place: "Bangalore",
    imageUrl: "/#2",
    description:
      "“Bahut hi easy software hai use karne me, aap salon pe ho ya nahi mobile ke through salon ki poori activity monitor kar sakte hai, abhi notebook se chutkara mil gya hai and customer se directly hum apne whatsapp pe engage kar sakte hai”",
  },
  {
    name: "The Vanity Crave",
    place: "Bangalore",
    imageUrl: "/#3",
    description:
      "“Bahut hi easy software hai use karne me, aap salon pe ho ya nahi mobile ke through salon ki poori activity monitor kar sakte hai, abhi notebook se chutkara mil gya hai and customer se directly hum apne whatsapp pe engage kar sakte hai”",
  },
];
