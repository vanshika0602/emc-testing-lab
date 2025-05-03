import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LabOverview } from "../../Lab Overview/LabOverview";


const LabInfoSection = ({ industries = [], testingServices = [] }) => {
  const renderListWithSeparators = (items) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <div className="w-fit font-normal text-[#5c5c5c] text-sm tracking-[-0.06px] leading-[normal]">
          {item}
        </div>
        {index < items.length - 1 && (
          <img
            className="w-px h-[18px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-11.svg"
          />
        )}
      </React.Fragment>
    ));
  };

  return (
    
    <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full">
      {/* Industry / Applications */}
      <div className="flex items-center justify-between self-stretch w-full">
        <div className="inline-flex items-center gap-2">
          <img
            className="w-6 h-6"
            alt="Hotel"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/hotel-1.svg"
          />
          <div className="font-semibold text-[#3e3e3e] text-sm tracking-[-0.06px]">
            Industry/Applications:
          </div>
          <div className="inline-flex items-center gap-[18px]">
            {renderListWithSeparators(industries)}
          </div>
        </div>
        <img
          className="w-6 h-6"
          alt="Expand"
          src="https://c.animaapp.com/ma15u5wlRvwvT0/img/angle-small-down.svg"
        />
      </div>

      {/* Divider */}
      <img
        className="w-[969px] h-[1.51px]"
        alt="Divider"
        src="https://c.animaapp.com/ma15u5wlRvwvT0/img/line-9.svg"
      />

      {/* Testing Services */}
      <div className="flex items-center justify-between self-stretch w-full">
        <div className="inline-flex items-center gap-2">
          <img
            className="w-6 h-6"
            alt="Document"
            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/compliance-document-1.svg"
          />
          <div className="font-semibold text-[#3e3e3e] text-sm tracking-[-0.06px]">
            Testing Services:
          </div>
          <div className="inline-flex items-center gap-[18px]">
            {renderListWithSeparators(testingServices)}
          </div>
        </div>
        <img
          className="w-6 h-6"
          alt="Expand"
          src="https://c.animaapp.com/ma15u5wlRvwvT0/img/angle-small-down.svg"
        />
      </div>
    </div>
  );
};

export const DivWrapper = () => {
  const [lab, setLabs] = useState([]);
  const [showLabOverview, setShowLabOverview] = useState(false);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/labs");
        setLabs(response.data.data);
      } catch (error) {
        console.error("Error fetching lab data", error);
      }
    };

    fetchLabs();
  }, []);

  // const navigate = useNavigate();
  // function handleClick(labId) {
  //   navigate(`/lab/${labId}`);
  // };
  return (
    <>
      {showLabOverview ? (
        <LabOverview />
      ) : (
        <div className="flex flex-col w-[1580px] items-start gap-5 absolute top-[441px] left-[60px]">
          {lab.length === 0 ? (
            <div>Loading labs...</div>
          ) : (
            lab.map((lab) => (
              <div
                key={lab._id}
                className="flex flex-col w-[1060px] h-[auto] items-start gap-2.5 p-8 relative bg-white rounded-2xl border-[0.5px] border-solid border-[#cbcbcb] shadow-[0px_0px_15px_#0000000d]"
              >
                <div className="flex items-end w-full">
                  <img
                    className="w-[106px] h-[106px] object-cover"
                    alt="Logo"
                    src="https://c.animaapp.com/ma15u5wlRvwvT0/img/image-4.png"
                  />
                  <div className="flex flex-col w-full ml-4">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-[#202224]">
                          {lab.company_name}
                        </h2>
                        <img
                          className="w-5 h-5"
                          alt="Shield trust"
                          src="https://c.animaapp.com/ma15u5wlRvwvT0/img/shield-trust-1.svg"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex items-center justify-center border border-[#ddd] rounded-full shadow-sm">
                          <img
                            className="w-6 h-6"
                            alt="Bookmark"
                            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/bookmark-1.svg"
                          />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1 bg-[#6161ff] rounded-full cursor-pointer">
                          <img
                            className="w-6 h-6"
                            alt="Link out"
                            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/akar-icons-link-out.svg"
                          />
                          <span className="text-white text-sm font-medium">
                            Visit Website
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            className="w-6 h-6"
                            alt="Accreditation"
                            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/features-alt-1.svg"
                          />
                          <span className="text-sm text-[#3e3e3e] font-semibold">
                            Accreditation:
                          </span>
                          <span className="text-sm text-[#5c5c5c] ml-1">
                            {lab.accreditation}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            className="w-6 h-6"
                            alt="Location"
                            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/land-layer-location-1.svg"
                          />
                          <span className="text-sm text-[#3e3e3e] font-semibold">
                            Location:
                          </span>
                          <span className="text-sm text-[#5c5c5c] ml-1">
                            {lab.location}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            className="w-6 h-6"
                            alt="Contact"
                            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/phone-call-1.svg"
                          />
                          <span className="text-sm text-[#3e3e3e] font-semibold">
                            Contact:
                          </span>
                          <span className="text-sm text-[#5c5c5c] ml-1">
                            {lab.contact}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            className="w-6 h-6"
                            alt="Expertise"
                            src="https://c.animaapp.com/ma15u5wlRvwvT0/img/talent-alt-1.svg"
                          />
                          <span className="text-sm text-[#3e3e3e] font-semibold">
                            Expertise:
                          </span>
                          <span className="text-sm text-[#5c5c5c] ml-1">
                            {lab.expertise}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lab Info Section Inserted Here */}
                    <div className="mt-4">
                      <LabInfoSection
                        industries={lab.industries}
                        testingServices={lab.testingServices}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-6">
                  <div className="flex w-[317px] items-center justify-center gap-2 py-1 border border-[#dddddd] rounded-2xl cursor-pointer">
                    <img
                      className="w-6 h-6"
                      alt="Delete"
                      src="https://c.animaapp.com/ma15u5wlRvwvT0/img/group-3.png"
                    />
                    <div className="text-sm text-[#d50000] font-medium">
                      Delete
                    </div>
                  </div>
                  <a href="/lab/${id}"
                    className="flex w-[317px] items-center justify-center gap-2 py-1 border border-[#dddddd] rounded-2xl cursor-pointer"
                    
                  >
                    <img
                      className="w-6 h-6"
                      alt="Profile"
                      src="https://c.animaapp.com/ma15u5wlRvwvT0/img/building-user--1--1.svg"
                    />
                    <div className="text-sm text-[#6161ff] font-medium">
                      View Profile
                    </div>
                  </a>
                  <div className="flex w-[317px] items-center justify-center gap-2 py-1 border border-[#dddddd] rounded-2xl cursor-pointer">
                    <img
                      className="w-6 h-6"
                      alt="Quote"
                      src="https://c.animaapp.com/ma15u5wlRvwvT0/img/comment-1.svg"
                    />
                    <div className="text-sm text-[#6161ff] font-medium">
                      Get Quote
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};
