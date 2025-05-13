import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[1420px] items-start gap-5 absolute top-[155px] left-[40px] overflow-y-scroll">
      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
        <div className="relative w-[18px] h-[18px]">
          <img
            className="absolute w-4 h-3.5 top-px left-px"
            alt="Group"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/group.png"
          />
        </div>

        <img
          className="relative w-[18px] h-[18px]"
          alt="Angle small down"
          src="https://c.animaapp.com/ma15u5wlRvwvT0/img/angle-small-down-11.svg"
        />

        <div className="w-fit font-normal text-[#807f7f] text-xs leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
          Labs
        </div>

        <img
          className="relative w-[18px] h-[18px]"
          alt="Angle small down"
          src="https://c.animaapp.com/ma15u5wlRvwvT0/img/angle-small-down-11.svg"
        />

        <div className="w-fit font-normal text-[#232323] text-xs leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
          EMC test labs
        </div>
      </div>

      <div className="flex flex-col h-[139px] items-center justify-center gap-2.5 p-2.5 relative self-stretch w-[1420px]">
        <div className="flex flex-col w-[934px] items-center gap-3 relative flex-[0_0_auto]">
          <div className="self-stretch mt-[-1.00px] font-bold text-[#232323] text-[26px] text-center leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
            EMC Testing Labs
          </div>

          <p className="self-stretch font-normal text-neutral-700 text-base text-center leading-6 relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            pellentesque, sapien&nbsp;&nbsp;vestibulum sollicitudin, nulla est
            condimentum ligula, at malesuada nisl sem nec lectus. Fusce vel
            nulla magna. Sed vel mi at risus convallis fringilla id et urna.
            Proin id est et massa consectetur maximus in nec dolor. Donec
            aliquet finibus ullamcorper.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between relative self-stretch left-[20px] w-[1400px] flex-[0_0_auto]">
        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-bold text-[#191919] text-sm tracking-[0] leading-[normal]">
            Popular Searches:
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#6161ff] text-sm tracking-[0] leading-[normal]">
            Emiction Testing
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#6161ff] text-sm tracking-[0] leading-[normal]">
            Emmunity Testing
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#6161ff] text-sm tracking-[0] leading-[normal]">
            EMC Testing
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#6161ff] text-sm tracking-[0] leading-[normal]">
            Emmunity Testing
          </div>
        </div>

        <p className="w-fit mt-[-1.00px] ml-[600px] font-normal text-[#a1a1a1] text-sm leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
          1 - 25 of 658 Companies
        </p>
      </div>
    </div>
  );
};
