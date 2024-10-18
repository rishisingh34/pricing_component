"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Pricing = () => {

  return (
    <div className="relative w-[90%] h-[80%] mx-auto rounded-sm shadow-2xl p-8 bg-white overflow-hidden">
      <div className="w-full h-[50%] bg-[#eff8fa] rounded-bl-[120px] absolute top-0 left-0"></div>

      <div>
        <div className="h-1/2 text-black relative z-10 text-center flex flex-col gap-10">
        <div className="font-bold text-3xl text-[#322463]">
          Simple, traffic-based pricing
        </div>
        <div className="font-medium text-sm text-gray-500 ">
          Sign-up for our 30-day trial. No credit card required.
        </div>


        {/* inner card  */}
        <div className="mx-auto  w-[80%] rounded-lg shadow-lg px-14 py-6 bg-white flex flex-col gap-10">

          {/* price and pageviews */}
          <div className="text-gray-400 text-sm flex justify-between font-semibold items-center">
            <div>100K PAGEVIEWS</div>
            <div className="flex items-center gap-1">
              <div>
                <span className="text-3xl text-[#322463]">$16.00</span>
              </div>
              <div>/month</div>
            </div>
          </div>

          {/* slider component  */}
          <div>
            {/* slider thumb */}
            <div className="rounded-full p-2 bg-[#35e38c] w-[35px] h-[35px] flex items-center justify-center shadow-[0px_5px_15px_#35e38c]">
                <Image
                  src={"/images/icon-slider.svg"}
                  alt="check"
                  width={25}
                  height={25}
                />
            </div>
          </div>

          <div className="flex justify-between gap-2 text-gray-400 font-medium text-sm">
            <div>Monthly Billing</div>
            <div className="relative">
              <input
                type="checkbox"
                id="billing-toggle"
                className="hidden"
              />
              <label
                htmlFor="billing-toggle"
                className="flex items-center cursor-pointer w-12 h-6 bg-gray-300 rounded-full shadow-inner transition duration-200"
              >
                <span className="absolute left-0 w-6 h-6 bg-white rounded-full shadow transition duration-200 transform" style={{
                  transform: 'translateX(0)',
                }}></span>
              </label>
            </div>
            <div>
              Yearly Billing&nbsp;&nbsp;&nbsp;
              <span className="left-2 px-2 py-1 bg-[#eec6c6] text-red-700 rounded-full text-[10px] font-semibold">
                25% Discount
              </span>
            </div>
          </div>


          {/* footer component  */}
          <div className="flex justify-between mt-10">
            <div className="text-left text-sm text-gray-500">
              <ul>
                <li><div className="flex gap-2 items-center"><Image src={"/images/icon-check.svg"} alt="check" width={10} height={10}/>Unlimited Websites</div></li>
                <li><div className="flex gap-2 items-center"><Image src={"/images/icon-check.svg"} alt="check" width={10} height={10}/>100% data ownership</div></li>
                <li><div className="flex gap-2 items-center"><Image src={"/images/icon-check.svg"} alt="check" width={10} height={10}/>Email Reports</div></li>
              </ul>
            </div>
            <div>
              <button className="px-5 rounded-full bg-[#20224e] py-2 text-white">
                Start my trial
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Pricing;
