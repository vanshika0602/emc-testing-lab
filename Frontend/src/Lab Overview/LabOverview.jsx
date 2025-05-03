import React from "react";
import { DivWrapper } from "./Div Wrapper/DivWrapper";
//import { Footer } from "./Footer/Footer";
import { Frame } from "./Frame/Frame";
import { FrameWrapper } from "./Frame Wrapper/FrameWrapper";

export const LabOverview = () => {
  return (
    <div className="bg-[#fbfbfb] flex flex-row justify-center w-full">
      <div className="bg-[#fbfbfb] overflow-hidden w-[1440px] h-[3070px] relative">
        <div className="flex flex-col w-[1380px] items-start gap-5 absolute top-[155px] left-[30px] overflow-y-scroll">
          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <div className="relative w-[18px] h-[18px]">
              <img
                className="absolute w-4 h-3.5 top-px left-px"
                alt="Group"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/group.png"
              />
            </div>

            <img
              className="relative w-[18px] h-[18px]"
              alt="Angle small down"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/angle-small-down.svg"
            />

            <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#807f7f] text-xs tracking-[0] leading-[normal]">
              Labs
            </div>

            <img
              className="relative w-[18px] h-[18px]"
              alt="Angle small down"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/angle-small-down.svg"
            />

            <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#807f7f] text-xs tracking-[0] leading-[normal]">
              EMC test labs
            </div>

            <img
              className="relative w-[18px] h-[18px]"
              alt="Angle small down"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/angle-small-down.svg"
            />

            <div className="w-fit font-normal text-[#232323] text-xs leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
              Mestco Energy Solution
            </div>
          </div>
        </div>

        <Frame />
        <div className="flex flex-col w-[286px] h-[328px] items-start gap-3 p-5 absolute top-[544px] left-8 bg-white rounded-2xl border-[0.5px] border-solid border-[#cbcbcb] shadow-[0px_0px_12px_#0000000d]">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <img
                className="relative w-6 h-6"
                alt="Hugeicons menu"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/hugeicons-menu-03.svg"
              />

              <div className="w-fit mt-[-1.00px] font-bold text-[#202224] text-lg relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
                Profile Menu
              </div>
            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-1-2.svg"
          />

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto] border-l-[3px] [border-left-style:solid] border-[#d50000]">
                <div className="relative w-fit mt-[-3.00px] font-bold text-[#d50000] text-sm tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Additional Locations
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  Test Lab Capabilities
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  Testing Standards
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  Latest News
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  Social Links
                </div>
              </div>
            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px mt-[-11891.00px] mr-[-3597.00px] object-cover"
            alt="Line"
          />

          <img
            className="relative self-stretch w-full h-px mt-[-11891.00px] mr-[-3597.00px] object-cover"
            alt="Line"
          />

          <img
            className="relative self-stretch w-full h-px mt-[-11891.00px] mr-[-3597.00px] object-cover"
            alt="Line"
          />

          <img
            className="relative self-stretch w-full h-px mt-[-11891.00px] mr-[-3597.00px] object-cover"
            alt="Line"
          />

          <img
            className="relative self-stretch w-full h-px mt-[-11891.00px] mr-[-3597.00px] object-cover"
            alt="Line"
          />

          <img
            className="relative self-stretch w-full h-px mt-[-11891.00px] mr-[-3597.00px] object-cover"
            alt="Line"
          />
        </div>

        <FrameWrapper />
        <DivWrapper />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
