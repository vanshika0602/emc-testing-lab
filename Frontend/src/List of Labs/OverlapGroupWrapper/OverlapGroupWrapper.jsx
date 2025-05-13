import React from "react";

export const OverlapGroupWrapper = () => {
  return (
    <div className="absolute w-[353px] h-[656px] top-[441px] left-[1150px] rounded-2xl overflow-hidden border-[0.5px] border-solid border-[#cbcbcb]">
      <div className="relative w-[358px] h-[814px] bg-[#d9d9d9] rounded-2xl">
        <img
          className="absolute w-[400px] h-[656px] top-0 left-0"
          alt="Basemap image"
          src="https://c.animaapp.com/ma15u5wlRvwvT0/img/basemap-image.png"
        />

        <div className="absolute w-[46px] h-[46px] top-[590px] left-[287px] bg-[#e93a3a] rounded-3xl overflow-hidden">
          <img
            className="absolute w-6 h-6 top-[11px] left-[11px]"
            alt="Messages"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/messages-1.svg"
          />
        </div>

        <div className="w-[149px] h-12 justify-center gap-1 p-1.5 absolute top-3 left-3 bg-[#fbfbfb] rounded border border-solid border-[#cbcbcb] flex flex-col items-start">
          <div className="w-fit mt-[-2.50px] font-bold text-neutral-700 text-sm leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
            Shanghai
          </div>

          <div className="w-fit mb-[-0.50px] font-medium text-[#0066c8] text-xs tracking-[0] leading-[normal] relative [font-family:'Nunito_Sans',Helvetica]">
            View large map
          </div>
        </div>
      </div>
    </div>
  );
};
