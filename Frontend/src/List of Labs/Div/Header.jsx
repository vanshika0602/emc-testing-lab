import React, { useState } from "react";
import { HeaderAdmin } from "../HeaderDropdown/HeaderAdmin";// adjust the path if needed

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full items-start absolute top-0 left-0 shadow-[0px_0px_16px_#0000000d]">
      <div className="flex flex-col items-start gap-2.5 px-[30px] py-[11px] relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex w-full max-w-[1380px] mx-auto items-center justify-between ...">

          <img
            className="relative w-[97px] h-[56.85px]"
            alt="Get premium download"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/-get-premium-download-high-resolution-imagedesigned-with-edit-or.png"
          />

          <div className="flex w-[570px] h-[50px] items-center justify-between pl-[18px] pr-2 py-3 relative bg-white rounded-[32px] border border-solid border-[#cbcbcb]">
            <div className="flex w-[345px] items-center justify-between relative">
              <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#9b9b9b] text-sm tracking-[-0.05px] leading-[normal]">
                Lab Name
              </div>

              <div className="flex w-[105.5px] items-center gap-3 relative">
                <img
                  className="relative w-px h-[21.51px] ml-[-1.00px] object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-9-6.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#9b9b9b] text-sm tracking-[-0.05px] leading-[normal]">
                  Location
                </div>
              </div>
            </div>

            <div className="relative w-[38px] h-[38px] mt-[-6.00px] mb-[-6.00px] bg-[#e83939] rounded-[19px]">
              <img
                className="absolute w-6 h-6 top-[7px] left-[7px]"
                alt="Search"
                src="https://c.animaapp.com/ma15u5wlRvwvT0/img/search-1.svg"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[normal]">
              Join for Bussiness
            </div>

            <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[normal]">
              About
            </div>

            {/* admin profile */}
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <img
                  className="relative w-11 h-11 object-cover"
                  alt="Ellipse"
                  src="https://c.animaapp.com/ma15u5wlRvwvT0/img/ellipse-3.svg"
                />

                <div className="w-[100px] gap-1.5 relative flex flex-col items-start">
                  <div className="self-stretch mt-[-1.00px] font-bold text-neutral-700 text-sm leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
                    Nolan Gouse
                  </div>

                  <div className="self-stretch font-medium text-[#565656] text-xs tracking-[0] leading-[normal] relative [font-family:'Nunito_Sans',Helvetica]">
                    Admin
                  </div>
                </div>
              </div>

              <div
                className="relative w-[18px] h-[18px] cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="w-[19px] h-[19px] bg-[url(https://c.animaapp.com/ma15u5wlRvwvT0/img/border-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[18px] h-[18px] top-0 left-0"
                    alt="Angle small down"
                    src="https://c.animaapp.com/ma15u5wlRvwvT0/img/angle-small-down.svg"
                  />
                </div>
              </div>
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[70px] right-0 z-50">
                <HeaderAdmin />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative self-stretch w-full h-[52px] bg-white">
        <div className="flex w-[703px] h-[37px] items-start justify-between relative top-[15px] left-[261px]">
          <div className="flex flex-col w-[106px] h-[37px] items-center justify-between relative">
            <div className="w-fit mt-[-1.00px] font-bold text-neutral-700 text-base text-center leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
              Find a Lab
            </div>

            <div className="relative self-stretch w-full h-1 bg-[#d50000] rounded-[2px_2px_0px_0px]" />
          </div>

          <img
            className="relative w-px h-[21.51px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-9-6.svg"
          />

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
            Training
          </div>

          <img
            className="relative w-px h-[21.51px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-9-6.svg"
          />

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
            Assurance Service
          </div>

          <img
            className="relative w-px h-[21.51px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-9-6.svg"
          />

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
            Partner Portal
          </div>

          <img
            className="relative w-px h-[21.51px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-9-6.svg"
          />

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
            TRF
          </div>
        </div>
      </div>
    </div>
  );
};
