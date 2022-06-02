import Image from "next/image";
import React from "react";

function CompareFeatures() {
  return (
    <div className="">
      <h1 className="text-[40px] text-center mb-8">Compare Features</h1>
      <div className="flex items-center justify-center mb-6">
        <table>
          <thead>
            <tr>
              <th className="border-b-2 border-r-2 border-[#263741] rounded-full text-[10px] w-[150px] lg:w-[300px] lg:text-[42px]">
                Features
              </th>
              <th className="border-b-2 border-r-2 border-[#263741] rounded-md w-[70px] lg:w-[300px] lg:pb-4">
                <div className="text-[10px] text-[#C56A4E]">BRONZE</div>
                <button className="hidden w-[275px] h-[54px] bg-[#C56A4E] text-white rounded-[10px]">Get it Now</button>
              </th>
              <th className="border-b-2 border-r-2 border-[#263741] rounded-md w-[70px] lg:w-[300px] lg:pb-4">
                <div className="text-[10px] text-[#B9B9B9]">SILVER</div>
                <button className="hidden w-[275px] h-[54px] bg-[#B9B9B9] text-white rounded-[10px]">Get it Now</button>
              </th>
              <th className="border-b-2 border-[#263741] rounded-md w-[70px] lg:w-[300px] lg:pb-4">
                <div className="text-[10px] text-[#FF9F24]">GOLD</div>
                <button className="hidden w-[275px] h-[54px] bg-[#FF9F24] text-white rounded-[10px]">Get it Now</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border-r-2 border-[#263741] text-[10px]">Reminder notification</td>
              <td className="border-r-2 border-[#263741]">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="9" height="6" />
                </div>
              </td>
              <td className="border-r-2 border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-[#263741] text-[10px]">Expense Management</td>
              <td className="border-r-2 border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
              <td className="border-r-2 border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
              <td className=" ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-[#263741] text-[10px]"> Bulk Promotion</td>
              <td className="border-r-2 border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
              <td className="border-r-2 border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-[#263741] text-[10px]">6000 WhatsApp Promotion</td>
              <td className="border-r-2 border-[#263741]"></td>
              <td className="border-r-2 border-[#263741] ">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-[#263741] text-[10px]">15,000 Promotional SMS</td>
              <td className="border-r-2 border-[#263741] "></td>
              <td className="border-r-2 border-[#263741] "></td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-[#263741] text-[10px]">Own Logo</td>
              <td className="border-r-2 border-[#263741] "></td>
              <td className="border-r-2 border-[#263741] "></td>
              <td className="">
                <div className="w-[9px] h-[6px] m-auto">
                  <Image src="/icons/tick.svg" width="47" height="35" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-[#263741]"></td>
              <td className="border-r-2 border-[#263741]">
                <button className=" bg-[#C56A4E] w-full h-[20px] text-white rounded-[2px] text-[6px]">
                  Get it Now
                </button>
              </td>
              <td className="border-r-2 border-[#263741]">
                <button className="bg-[#C56A4E] w-full h-[20px] text-white rounded-[2px] text-[6px]">Get it Now</button>
              </td>
              <td>
                <button className="bg-[#C56A4E] w-full h-[20px] text-white rounded-[2px] text-[6px]">Get it Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareFeatures;
