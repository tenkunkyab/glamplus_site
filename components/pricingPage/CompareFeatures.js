import Image from "next/image";
import React from "react";

function CompareFeatures() {
  return (
    <div className="">
      <h1 className="font-[600] text-[20px] leading-[25px] mb-4 text-center sm:text-[28px] sm:leading-[34px] md:text-[34px] md:leading-[40px] md:mb-8 lg:text-[60px] lg:leading-[74px]">
        Compare Features
      </h1>
      <div className="flex items-center justify-center mb-6 my-2">
        <table>
          <thead>
            <tr>
              <th className="border-b-[1px] border-r-[1px] border-[#263741] rounded-full font-[600] text-left text-[10px] w-[150px] md:w-[250px] md:text-[18px] lg:w-[300px] lg:text-[42px]">
                Features
              </th>
              <th className="border-b-[1px] border-r-[1px] border-[#263741] rounded-md w-[70px] md:w-[120px] lg:w-[300px] lg:pb-4">
                <div className="text-[10px] text-[#C56A4E] md:text-[18px] lg:text-[40px]">BRONZE</div>
                <button className="hidden w-[275px] h-[54px] bg-[#C56A4E] text-white rounded-[10px] lg:inline">
                  Get it Now
                </button>
              </th>
              <th className="border-b-[1px] border-r-[1px] border-[#263741] rounded-md w-[70px] md:w-[120px] lg:w-[300px] lg:pb-4">
                <div className="text-[10px] text-[#B9B9B9] md:text-[18px] lg:text-[40px]">SILVER</div>
                <button className="hidden w-[275px] h-[54px] bg-[#B9B9B9] text-white rounded-[10px] lg:inline">
                  Get it Now
                </button>
              </th>
              <th className="border-b-[1px] border-[#263741] rounded-md w-[70px] md:w-[120px] lg:w-[300px] lg:pb-4">
                <div className="text-[10px] text-[#FF9F24] md:text-[18px] lg:text-[40px]">GOLD</div>
                <button className="hidden w-[275px] h-[54px] bg-[#FF9F24] text-white rounded-[10px] lg:inline">
                  Get it Now
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border-r-[1px] border-[#263741] text-[10px] md:text-[16px] md:py-2">
                Reminder notification
              </td>
              <td className="border-r-[1px] border-[#263741]">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className="border-r-[1px] border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px] ">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#263741] text-[10px] md:text-[16px] md:py-2">Expense Management</td>
              <td className="border-r-[1px] border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className="border-r-[1px] border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className=" ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#263741] text-[10px] md:text-[16px] md:py-2"> Bulk Promotion</td>
              <td className="border-r-[1px] border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className="border-r-[1px] border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#263741] text-[10px] md:text-[16px] md:py-2">
                6000 WhatsApp Promotion
              </td>
              <td className="border-r-[1px] border-[#263741]"></td>
              <td className="border-r-[1px] border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#263741] text-[10px] md:text-[16px] md:py-2">
                15,000 Promotional SMS
              </td>
              <td className="border-r-[1px] border-[#263741] "></td>
              <td className="border-r-[1px] border-[#263741] "></td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#263741] text-[10px] md:text-[16px] md:py-2">Own Logo</td>
              <td className="border-r-[1px] border-[#263741] "></td>
              <td className="border-r-[1px] border-[#263741] "></td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto relative md:w-[15px] md:h-[10px]">
                  <Image src="/icons/tick.svg" layout="fill" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#263741]"></td>
              <td className="border-r-[1px] border-[#263741]">
                <button className=" bg-[#C56A4E] w-full h-[20px] text-white rounded-[2px] text-[6px] md:text-[12px] md:h-[30px] lg:hidden">
                  Get it Now
                </button>
              </td>
              <td className="border-r-[1px] border-[#263741]">
                <button className="bg-[#B9B9B9] w-full h-[20px] text-white rounded-[2px] text-[6px] md:text-[12px] md:h-[30px] lg:hidden">
                  Get it Now
                </button>
              </td>
              <td>
                <button className="bg-[#FF9F24] w-full h-[20px] text-white rounded-[2px] text-[6px] md:text-[12px] md:h-[30px] lg:hidden">
                  Get it Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareFeatures;
