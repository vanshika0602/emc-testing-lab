import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Frame = () => {
  const { labId } = useParams();
  const [lab, setLab] = useState(null);

  useEffect(() => {
    const fetchLab = async () => {
      try {
        console.log("Lab ID:", labId);  // Debug log
        if (!labId) {
          console.error("Lab ID is missing");
          return;
        }
  
        const res = await axios.get(`http://localhost:8080/api/labs/${labId}`);
        setLab(res.data);  // This updates the state 'lab' with the response data
      } catch (err) {
        console.error("Error fetching lab data", err);
      }
    };
  
    if (labId) {
      fetchLab();
    }
  }, [labId]);  

  if (!lab) return <div>Loading...</div>;

  return lab.data.map((lab) => (
    <div
      key={lab.id}
      className="flex flex-col w-[1375px] items-start gap-2.5 p-5 absolute top-[193px] left-[30px] bg-white rounded-2xl border-[0.5px] border-solid border-[#cbcbcb] shadow-[0px_0px_15px_#00000008]"
    >
      <div className="flex items-start gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[238px] h-[238px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/ma1zul3fdSvUQH/img/image-4.png"
        />

        <div className="flex flex-col w-[845px] h-[106px] items-start gap-1.5 relative">
          <div className="flex w-[1058px] items-start justify-between relative flex-[0_0_auto] mr-[-213.00px]">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.04px] font-extrabold text-[#202224] text-2xl tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                {lab.company_name}
              </div>
              <img
                className="relative w-5 h-5"
                alt="Shield trust"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/shield-trust-1.svg"
              />
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="flex w-[38px] h-[38px] items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd] shadow-[0px_0px_12px_#0000000d]">
                <img
                  className="relative w-6 h-6"
                  alt="Bookmark"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/bookmark-1.svg"
                />
              </div>

              <div className="flex w-[148px] h-[38px] items-center justify-center gap-[10.42px] p-[4.17px] relative bg-[#6161ff] rounded-[25px]">
                <img
                  className="relative w-6 h-6"
                  alt="Akar icons link out"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/akar-icons-link-out.svg"
                />
                <div className="w-fit font-medium text-white text-sm leading-[normal] relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
                  Visit Website
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[741px] h-[190px] items-start justify-between relative mb-[-128.00px]">
            <p className="w-[741px] mt-[-1.00px] font-normal text-neutral-700 text-lg leading-6 relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
              {lab.description}
            </p>

            <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[267px] items-start gap-5 relative">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Features alt"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/features-alt-1.svg"
                  />
                  <p className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-transparent text-sm tracking-[-0.06px] leading-[normal]">
                    <span className="font-semibold text-[#3e3e3e] tracking-[-0.01px]">
                      Accreditation:
                    </span>
                    <span className="text-[#5c5c5c] tracking-[-0.01px]">
                      {" "}
                      {lab.accreditation}
                    </span>
                  </p>
                </div>

                <div className="flex w-[277px] items-start gap-2 relative flex-[0_0_auto] mr-[-10.00px]">
                  <img
                    className="relative w-6 h-6"
                    alt="Land layer location"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/land-layer-location-1.svg"
                  />
                  <p className="w-[245px] mt-[-1.00px] font-normal text-transparent text-sm relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
                    <span className="font-semibold text-[#3e3e3e] tracking-[-0.01px]">
                      Location
                    </span>
                    <span className="text-[#3e3e3e] tracking-[-0.01px]">:</span>
                    <span className="text-[#5c5c5c] tracking-[-0.01px]">
                      {" "}
                      {lab.location}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-[267px] items-start gap-5 relative">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Phone call"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/phone-call-1.svg"
                  />
                  <p className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-transparent text-sm tracking-[-0.06px] leading-[normal]">
                    <span className="font-semibold text-[#3e3e3e] tracking-[-0.01px]">
                      Contact:
                    </span>
                    <span className="text-[#5c5c5c] tracking-[-0.01px]">
                      {lab.contact}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Talent alt"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/talent-alt-1.svg"
                  />
                  <p className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-transparent text-sm tracking-[-0.06px] leading-[normal]">
                    <span className="font-semibold text-[#3e3e3e] tracking-[-0.01px]">
                      Expertise:
                    </span>
                    <span className="text-[#5c5c5c] tracking-[-0.01px]">
                      {" "}
                      {lab.expertise}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="relative w-[1335px] h-[1.89px]"
        alt="Line"
        src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-9.svg"
      />

      <div className="flex w-[1335px] h-8 items-start justify-around gap-2 relative">
        <div className="flex items-start gap-4 relative flex-1 grow">
          <div className="flex w-[322px] items-center justify-center gap-2 px-0 py-1 relative rounded-2xl border border-solid border-[#dddddd]">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[19px] h-[21px] top-0.5 left-[3px]"
                alt="Group"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/group-3.png"
              />
            </div>
            <div className="w-fit font-medium text-[#d50000] text-sm relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
              Delete
            </div>
          </div>

          <div className="w-[321px] gap-2 px-0 py-1 rounded-2xl border border-solid flex items-center justify-center relative border-[#dddddd]">
            <img
              className="relative w-6 h-6"
              alt="Building user"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/building-user--1--1.svg"
            />
            <div className="w-fit font-medium text-[#6161ff] text-sm relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
              View Profile
            </div>
          </div>

          <div className="w-[321px] gap-2 px-0 py-1 rounded-2xl border border-solid flex items-center justify-center relative border-[#dddddd]">
            <img
              className="relative w-6 h-6"
              alt="Comment"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/comment-1.svg"
            />
            <div className="w-fit font-medium text-[#6161ff] text-sm relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
              Get Quote
            </div>
          </div>

          <div className="flex w-[322px] items-center justify-center gap-2 px-0 py-1 relative rounded-2xl border border-solid border-[#dddddd]">
            <img
              className="relative w-6 h-6"
              alt="Ph share fat thin"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/ph-share-fat-thin.svg"
            />
            <div className="w-fit font-medium text-[#6161ff] text-sm relative [font-family:'Nunito_Sans',Helvetica] tracking-[-0.06px] leading-[normal]">
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
