import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FrameWrapper = () => {
  const [lab, setLab] = useState(null);
  const { labId } = useParams();

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        console.log("Lab ID:", labId);  // Debug log
        if (!labId) {
          console.error("Lab ID is missing");
          return;
        }
        const response = await axios.get(`http://localhost:8080/api/lab-overview/${labId}`);
        // if (Array.isArray(response.data)) {
          setLab(response.data.data);
        // } else {
        //   console.error("Expected an array but got:", response.data.data);
        // }
      } catch (error) {
        console.error("Error fetching lab data", error);
      }
    };

    fetchLabs();
  }, []);

  return (
    <div className="inline-flex flex-col items-start gap-5 absolute top-[546px] left-[338px] rounded-3xl shadow-[0px_0px_12px_#0000000d]">
      <div className="relative w-[1067px] h-[480px] bg-white rounded-3xl border border-solid border-[#cbcbcb] shadow-[0px_0px_12px_#0000000d]">
        <div className="flex flex-col w-[1028px] items-start absolute top-[135px] left-[19px] rounded-3xl">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-[257px] h-[54px] items-center gap-2.5 px-[18px] py-3 relative rounded-[16px_0px_0px_0px] border-[0.5px] border-solid border-[#cbcbcb]">
              <div className="relative w-fit font-bold text-[#242424] text-base tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                Country
              </div>
            </div>

            <div className="flex w-[258px] h-[54px] items-center gap-2.5 px-[18px] py-3 relative border-[0.5px] border-solid border-[#cbcbcb]">
              <div className="relative w-fit font-bold text-[#242424] text-base tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                State
              </div>
            </div>

            <div className="flex w-64 h-[54px] items-center gap-2.5 px-[18px] py-3 relative border-[0.5px] border-solid border-[#cbcbcb]">
              <div className="relative w-fit font-bold text-[#242424] text-base tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                City
              </div>
            </div>

            <div className="flex w-[257px] h-[54px] items-center gap-2.5 px-[18px] py-3 relative rounded-[0px_16px_0px_0px] border-[0.5px] border-solid border-[#cbcbcb]">
              <div className="relative w-fit font-bold text-[#242424] text-base tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                Details
              </div>
            </div>
          </div>

          {lab?.profile_menu?.additional_location?.map((location, index) => (
            <div
              key={index}
              className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
            >
              <div className="flex w-[257px] h-[54px] items-center gap-2.5 px-[18px] py-3 relative border-[0.5px] border-solid border-[#cbcbcb]">
                <div className="relative w-fit font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  {location.country || "N/A"}
                </div>
              </div>

              <div className="flex w-[258px] h-[54px] items-center gap-2.5 px-[18px] py-3 relative border-[0.5px] border-solid border-[#cbcbcb]">
                <div className="relative w-fit font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  {location.state || "N/A"}
                </div>
              </div>

              <div className="flex w-64 h-[54px] items-center gap-2.5 px-[18px] py-3 relative border-[0.5px] border-solid border-[#cbcbcb]">
                <div className="relative w-fit font-medium text-[#474747] text-sm tracking-[-0.05px] leading-[normal]">
                  {location.city || "N/A"}
                </div>
              </div>

              <div className="flex w-[257px] h-[54px] items-center gap-2.5 px-[18px] py-3 relative border-[0.5px] border-solid border-[#cbcbcb]">
                <div className="flex w-[136px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative mt-[-1.00px] mb-[-1.00px] rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt="Akar icons link out"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/akar-icons-link-out-1.svg"
                  />
                  <div className="relative w-fit font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        <div className="absolute top-[18px] left-[19px] font-extrabold text-[#e93a3a] text-xl tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
          Additional Locations
        </div>

        <img
          className="absolute w-[1028px] h-px top-[52px] left-[19px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
        />

        <div className="flex w-[1029px] items-center gap-4 absolute top-[68px] left-[19px]">
          <div className="flex w-[506px] h-[52px] items-center justify-between px-[18px] py-3 relative bg-white rounded-3xl border border-solid border-[#cbcbcb]">
            <div className="relative w-fit font-medium text-[#888888] text-base tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
              All Countries
            </div>

            <img
              className="relative w-6 h-6"
              alt="Angles up down"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/angles-up-down--1--1.svg"
            />
          </div>

          <div className="flex w-[506px] h-[52px] items-center justify-between px-[18px] py-3 relative bg-white rounded-3xl border border-solid border-[#cbcbcb]">
            <div className="relative w-fit font-medium text-[#888888] text-base tracking-[-0.05px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
              All States
            </div>

            <img
              className="relative w-6 h-6"
              alt="Angles up down"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/angles-up-down--1--1.svg"
            />
          </div>
        </div>
      </div>

      <div className="relative w-[1067px] h-[758px] bg-white rounded-3xl border border-solid border-[#cccccccc]">
        <div className="absolute top-[19px] left-5 font-extrabold text-[#e93a3a] text-xl tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
          Test Lab Capabilities
        </div>

        <img
          className="absolute w-[1028px] h-px top-[53px] left-5 object-cover"
          alt="Line"
          src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
        />

        <div className="flex flex-col w-[1028px] items-start gap-3.5 absolute top-[70px] left-5">
          <div className="flex flex-col w-[1028px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="List check"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/list-check-1.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Applications
                </div>
              </div>

              <div className="flex w-[91px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Iconamoon edit thin"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconamoon-edit-thin.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                  Edit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.test_lab_capabilities?.Applications?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
          />

          <div className="flex flex-col w-[1028px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Compliance"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/compliance-1.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  International Approvals
                </div>
              </div>

              <div className="flex w-[91px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Iconamoon edit thin"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconamoon-edit-thin.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                  Edit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.test_lab_capabilities?.International_Approvals?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
          />

          <div className="flex flex-col w-[1028px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Man scientist"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/man-scientist-1.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Test Services
                </div>
              </div>

              <div className="flex w-[91px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Iconamoon edit thin"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconamoon-edit-thin.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                  Edit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.test_lab_capabilities?.Test_Services?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
          />

          <div className="flex flex-col w-[1028px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Terms check"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/terms-check-1.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Services
                </div>
              </div>

              <div className="flex w-[91px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Iconamoon edit thin"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconamoon-edit-thin.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                  Edit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.test_lab_capabilities?.Services?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
          />

          <div className="flex flex-col w-[1028px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Skill user"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/skill-user-1.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Customer Onsite Testing
                </div>
              </div>

              <div className="flex w-[91px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Iconamoon edit thin"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconamoon-edit-thin.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                  Edit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.test_lab_capabilities?.Customer_Onsite_Testing?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
          />

          <div className="flex flex-col w-[1028px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Flask gear"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/flask-gear--1--1.svg"
                />

                <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Accredited Laboratory
                </div>
              </div>

              <div className="flex w-[91px] h-8 items-center justify-center gap-[10.42px] p-[4.17px] relative rounded-[25px] border-[1.04px] border-solid border-[#dddddd]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Iconamoon edit thin"
                  src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconamoon-edit-thin.svg"
                />

                <div className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-[#6161ff] text-sm tracking-[0] leading-[normal]">
                  Edit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.test_lab_capabilities?.Accredited_Laboratory?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[1067px] h-[262px] bg-white rounded-3xl border border-solid border-[#cccccccc]">
        <div className="absolute top-[19px] left-5 font-extrabold text-[#e93a3a] text-xl tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
          Testing Standards Supported
        </div>

        <img
          className="absolute w-[1028px] h-px top-[53px] left-5 object-cover"
          alt="Line"
          src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
        />

        <div className="flex flex-col w-[1028px] items-start gap-3.5 absolute top-[70px] left-5">
          <div className="flex flex-col w-[569px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                CISPR Standards
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.testing_standards_supported?.CISPR?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
          />

          <div className="flex flex-col w-[569px] items-start gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                American Standards
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {lab?.profile_menu?.testing_standards_supported?.American_Standards?.map((application, index) => (
                <div
                key={index}
                className="flex items-center relative self-stretch flex-[0_0_auto]"
              >
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#cccccccc]">
                  <img
                    className="relative w-5 h-5"
                    alt="Check circle"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/check-circle-1.svg"
                  />

                  <div className="relative w-fit mt-[-0.50px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    {application || "N/A"}
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[1067px] h-[439px] bg-white rounded-3xl border border-solid border-[#cccccccc]">
        <div className="absolute top-[19px] left-5 font-extrabold text-[#e93a3a] text-xl tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
          Latest News
        </div>

        <img
          className="absolute w-[1028px] h-px top-[53px] left-5 object-cover"
          alt="Line"
          src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
        />

        <div className="flex w-[1028px] items-center gap-5 absolute top-[70px] left-5">
          <div className="flex flex-col w-[329px] items-start relative rounded-2xl overflow-hidden border border-solid border-[#cccccccc]">
            <img
              className="relative w-[329px] h-[210.5px]"
              alt="Image"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/image-18.png"
            />

            <div className="flex items-start justify-between p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfbfb]">
              <div className="flex flex-col w-[315px] items-start gap-2 relative mr-[-10.00px]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#6161ff] text-xs tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    Daily Complicance
                  </div>

                  <img
                    className="relative w-px h-3 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-10.svg"
                  />

                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#6161ff] text-xs tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    21 April 2025
                  </div>
                </div>

                <div className="relative w-fit font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Updated EMC Standards
                </div>

                <p className="relative w-[303px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <img
                className="relative w-6 h-6 ml-[-34px]"
                alt="Arrow up right"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/arrow-up-right-2.svg"
              />
            </div>
          </div>

          <div className="flex flex-col w-[329px] items-start relative rounded-2xl overflow-hidden border border-solid border-[#cccccccc]">
            <img
              className="relative w-[329px] h-[210.5px]"
              alt="Image"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/image-18-1.png"
            />

            <div className="flex items-start justify-between p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfbfb]">
              <div className="flex flex-col w-[315px] items-start gap-2 relative mr-[-10.00px]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#6161ff] text-xs tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    Daily Complicance
                  </div>

                  <img
                    className="relative w-px h-3 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-10.svg"
                  />

                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#6161ff] text-xs tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    21 April 2025
                  </div>
                </div>

                <div className="relative w-fit font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  New Lab Opened
                </div>

                <p className="relative w-[303px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <img
                className="relative w-6 h-6 ml-[-34px]"
                alt="Arrow up right"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/arrow-up-right-2.svg"
              />
            </div>
          </div>

          <div className="flex flex-col w-[329px] items-start relative rounded-2xl overflow-hidden border border-solid border-[#cccccccc]">
            <img
              className="relative w-[329px] h-[210.5px]"
              alt="Image"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/image-18-2.png"
            />

            <div className="flex items-start justify-between p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfbfb]">
              <div className="flex flex-col w-[315px] items-start gap-2 relative mr-[-10.00px]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#6161ff] text-xs tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    Daily Complicance
                  </div>

                  <img
                    className="relative w-px h-3 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-10.svg"
                  />

                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#6161ff] text-xs tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                    21 April 2025
                  </div>
                </div>

                <div className="relative w-fit font-bold text-[#242424] text-lg tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Updated EMC Standards
                </div>

                <p className="relative w-[303px] font-medium text-[#474747] text-sm tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <img
                className="relative w-6 h-6 ml-[-34px]"
                alt="Arrow up right"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/arrow-up-right-2.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[1067px] h-[135px] bg-white rounded-3xl border border-solid border-[#cccccccc]">
        <div className="absolute top-[19px] left-5 font-extrabold text-[#e93a3a] text-xl tracking-[-0.12px] [font-family:'Nunito_Sans',Helvetica] leading-[normal]">
          Social Links
        </div>

        <img
          className="absolute w-[1028px] h-px top-[53px] left-5 object-cover"
          alt="Line"
          src="https://c.animaapp.com/ma1zul3fdSvUQH/img/line-3.svg"
        />

        <div className="inline-flex items-center gap-3 absolute top-[68px] left-5">
          <div className="w-[130px] h-[38px] gap-[10.42px] p-[4.17px] rounded-[25px] border-[1.04px] border-solid flex items-center justify-center relative border-[#dddddd]">
            <img
              className="relative w-6 h-6"
              alt="Uit linkedin alt"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/uit-linkedin-alt.svg"
            />
            <div className="w-[54px] h-4 font-medium text-[#6161ff] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
              LinkedIn
            </div>
          </div>

          <div className="w-[130px] h-[38px] gap-[10.42px] p-[4.17px] rounded-[25px] border-[1.04px] border-solid flex items-center justify-center relative border-[#dddddd]">
            <img
              className="relative w-6 h-6"
              alt="Iconoir facebook"
              src="https://c.animaapp.com/ma1zul3fdSvUQH/img/iconoir-facebook.svg"
            />
            <div className="w-[61px] h-4 font-medium text-[#6161ff] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
              Facebook
            </div>
          </div>

          <div className="w-[130px] h-[38px] gap-[10.42px] p-[4.17px] rounded-[25px] border-[1.04px] border-solid flex items-center justify-center relative border-[#dddddd]">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[19px] h-[15px] top-[5px] left-[3px]"
                alt="Group"
                src="https://c.animaapp.com/ma1zul3fdSvUQH/img/group-1.png"
              />
            </div>
            <div className="w-[38px] h-4 font-medium text-[#6161ff] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Nunito_Sans',Helvetica] tracking-[0]">
              Email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
