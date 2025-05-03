import React, { useState } from "react";

export const AllWrapper = ({onClose}) => {
  const [isVisible, setIsVisible] = useState(true); // <-- visibility state

  return (
    <div className="flex flex-col h-[512px] items-start gap-2.5 p-5 relative bg-white border-[0.5px] border-solid border-[#cbcbcb] overflow-x-hidden">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Filter list"
            src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/filter-list.svg"
          />

          <div className="w-[53px] h-5 font-bold text-[#202224] text-lg whitespace-nowrap relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
            Filters
          </div>
        </div>

        <img
          onClick={onClose} // <-- added this!
          className="relative w-6 h-6 cursor-pointer"
          alt="X"
          src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/x-1.svg"
        />
      </div>

      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] mb-[-17.00px]">
        <img
          className="self-stretch w-full h-px mt-[-1.00px] relative object-cover"
          alt="Line"
          src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/line-1.svg"
        />

        <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col h-[447px] items-start gap-1 relative flex-[0_0_auto] bg-white">
              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto]">
                <div className="flex items-center gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Features alt"
                      src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/features-alt-1.svg"
                    />

                    <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#474747] text-base tracking-[-0.06px] leading-[normal]">
                      Lab Accreditation
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start justify-center px-2 py-3 relative flex-[0_0_auto] border-l-[3px] [border-left-style:dashed] border-[#e93a3a]">
                <div className="flex items-center gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Category"
                      src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/category.svg"
                    />

                    <div className="w-fit font-semibold text-[#e93a3a] text-base relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
                      Business Categories
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto] rounded-[0px_24px_0px_0px]">
                <div className="flex items-start gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Flask gear"
                      src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/flask-gear.svg"
                    />

                    <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#474747] text-base tracking-[-0.06px] leading-[normal]">
                      Testing Services
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto]">
                <div className="flex items-center gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Memo pad"
                      src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/memo-pad.svg"
                    />

                    <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#474747] text-base tracking-[-0.06px] leading-[normal]">
                      Product Categories
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto]">
                <div className="flex items-center gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Note"
                      src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/note.svg"
                    />

                    <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#474747] text-base tracking-[-0.06px] leading-[normal]">
                      Standards Filter
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto]">
                <div className="flex items-center gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Earth americas"
                      src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/earth-americas.svg"
                    />

                    <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#474747] text-base tracking-[-0.06px] leading-[normal]">
                      Regions Filter
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto]" />

              <div className="flex flex-col w-[238px] items-start px-2 py-3 relative flex-[0_0_auto]">
                <div className="flex items-center gap-[49px] relative self-stretch w-full flex-[0_0_auto]" />
              </div>
            </div>

            <img
              className="w-px h-[432px] relative object-cover"
              alt="Line"
              src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/line-2.svg"
            />

            <div className="flex flex-col w-[458px] h-[432px] items-center justify-between relative">
              <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="flex w-[226px] items-center gap-2.5 p-3 relative bg-[#6161ff] rounded-3xl">
                    <div className="mt-[-1.00px] font-bold text-white text-sm relative w-fit [font-family:'Nunito_Sans',Helvetica] tracking-[-0.05px] leading-[normal]">
                      Product Safety
                    </div>
                  </div>

                  <div className="flex w-[225px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Radio
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="flex w-[226px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Laser Safety
                    </div>
                  </div>

                  <div className="flex w-[225px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Battery
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="flex w-[226px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Testing Laboratory
                    </div>
                  </div>

                  <div className="flex w-[226px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Calibration Laboratory
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="flex w-[226px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Authorised Representative
                    </div>
                  </div>

                  <div className="flex w-[226px] items-center gap-2.5 p-3 relative rounded-3xl border-[0.5px] border-solid border-[#cbcbcb]">
                    <div className="relative w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[-0.05px] leading-[normal]">
                      Emc
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="flex w-56 items-center justify-center gap-2.5 p-3 relative rounded-3xl border border-solid border-[#e93a3a]">
                  <div className="mt-[-1.00px] font-medium text-[#e93a3a] text-base relative w-fit [font-family:'Nunito_Sans',Helvetica] tracking-[-0.05px] leading-[normal]">
                    Clear
                  </div>
                </div>

                <div className="flex w-56 items-center justify-center gap-2.5 p-3 relative bg-[#e93a3a] rounded-3xl">
                  <div className="mt-[-0.50px] font-medium text-white text-base relative w-fit [font-family:'Nunito_Sans',Helvetica] tracking-[-0.05px] leading-[normal]">
                    Apply
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="relative self-stretch w-full h-px mt-[-10490.00px] mr-[-5378.00px] object-cover"
        alt="Line"
      />

      <img
        className="relative self-stretch w-full h-px mt-[-10490.00px] mr-[-5378.00px] object-cover"
        alt="Line"
      />

      <img
        className="relative self-stretch w-full h-px mt-[-10490.00px] mr-[-5378.00px] object-cover"
        alt="Line"
      />

      <img
        className="relative self-stretch w-full h-px mt-[-10490.00px] mr-[-5378.00px] object-cover"
        alt="Line"
      />

      <img
        className="relative self-stretch w-full h-px mt-[-10490.00px] mr-[-5378.00px] object-cover"
        alt="Line"
      />

      <img
        className="relative self-stretch w-full h-px mt-[-10490.00px] mr-[-5378.00px] object-cover"
        alt="Line"
      />
    </div>
  );
};
