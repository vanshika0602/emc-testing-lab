import React, { useState } from "react";
import { AllWrapper } from "../AllWrapper"; // Import your AllWrapper component

export const FrameWrapper = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);

  const toggleAllDropdown = () => {
    setIsAllOpen(!isAllOpen);
  };

  return (
    <div className="relative  mt-[391px] w-[1390px] ">
      {/* Filter Row */}
      <div className="flex items-center w-[1390px] ml-[48px] justify-between">
        <div className="inline-flex items-center gap-4">
          {/* All Button */}
          <div
            className="flex w-[94px] h-9 items-center justify-center gap-2.5 p-1 rounded-full border border-[#dddddd] cursor-pointer"
            onClick={toggleAllDropdown}
          >
            <img
              className="w-6 h-6"
              alt="Bars filter"
              src="https://c.animaapp.com/ma1ah51nlorpuK/img/bars-filter.svg"
            />
            <div className="font-medium text-[#2f2f2f] text-sm font-['Nunito_Sans']">All</div>
          </div>

          {/* Other Buttons */}
          {[
            "Laser Safety",
            "Authorised Representative",
            "Testing Laboratory",
            "Battery",
            "Calibration Laboratory",
          ].map((label) => (
            <div
              key={label}
              className="flex h-9 items-center justify-center gap-2.5 px-4 rounded-full border border-[#dddddd]"
            >
              <div className="font-medium text-[#2f2f2f] text-sm [font-family:'Nunito_Sans',Helvetica] ">{label}</div>
            </div>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex flex-col w-[147px] items-start relative">
          <div className="flex h-[34px] items-center gap-2.5 px-4 py-1 w-full rounded-full border border-[#cbcbcb]">
            <div className="flex items-center gap-2 w-full">
              <div className="font-medium text-[#191919] text-sm [font-family:'Nunito_Sans',Helvetica] ">Recommended</div>
              <img
                className="w-[18px] h-[18px]"
                alt="Next arrow"
                src="https://c.animaapp.com/ma1ah51nlorpuK/img/ic-round-navigate-next.svg"
              />
            </div>
          </div>
          <div className="absolute -top-[7px] left-[15px] bg-[#fbfbfb] px-1.5">
            <div className="text-xs font-semibold text-[#a1a1a1] font-['Nunito_Sans']">Sort</div>
          </div>
        </div>
      </div>

      {/* Dropdown content */}
      {isAllOpen && (
        <div className="absolute z-50 top-[50px] left-0 border border-[#dddddd] rounded-xl p-4 bg-white shadow-md">
          <AllWrapper onClose={() => setIsAllOpen(false)} />

        </div>
      )}
    </div>
  );
};
