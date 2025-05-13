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

export const DivWrapper = ({ filters, refreshTrigger }) => {
  console.log("refreshTrigger value:", refreshTrigger);
  
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [showLabOverview, setShowLabOverview] = useState(false);
  const navigate = useNavigate();

  const fetchLabs = async (reset = false) => {
    if (loading || (!hasMore && !reset)) return;
  
    setLoading(true);
    try {
      const query = new URLSearchParams();
  
      // Add pagination
      query.append("page", reset ? 1 : page);
      query.append("limit", 10);
  
      // Add filters dynamically
      Object.entries(filters || {}).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => query.append(key, val));
        } else if (value) {
          query.append(key, value);
        }
      });
  
      const response = await axios.get(
        `http://localhost:8080/api/labs/list?${query.toString()}`
      );
  
      if (!response.data.success) {
        console.error("API returned error:", response.data.message);
        return;
      }
  
      const newLabs = response.data.data;
      console.log("Fetched labs:", newLabs);

      if (reset) {
        setLabs(newLabs);
        setPage(2);
      } else {
        setLabs((prev) => [...prev, ...newLabs]);
        setPage((prev) => prev + 1);
        setHasMore(newLabs.length === 10);
      }
  
    } catch (error) {
      console.error("Error fetching lab data", error);
    } finally {
      setLoading(false);
    }
  };  

  // Initial fetch or refresh
  useEffect(() => {
    console.log("Triggered fetch due to filter/refresh change");
    fetchLabs(true); // Reset labs on trigger
  }, [filters, refreshTrigger]);  

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (bottom && hasMore && !loading) {
        fetchLabs();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  const handleViewProfileClick = (labId) => {
    setShowLabOverview(true);
    navigate(`/lab/${labId}`);
  };

  return (
    <>
      {showLabOverview ? (
        <LabOverview />
      ) : (
        <div className="flex flex-col w-[1060px] items-start gap-5 mt-[20px] ml-[40px]">
          {labs.length === 0 ? (
            <div>No labs found</div>
          ) : (
            labs.map((lab) => (
              <div
                key={lab.id}
                className="flex flex-col w-[1060px] items-start gap-2.5 p-8 bg-white mb-7 rounded-2xl border border-[#cbcbcb] shadow-[0px_0px_15px_#0000000d]"
              >
                {/* Top Section */}
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

                    <div className="mt-4">
                      <LabInfoSection
                        industries={lab.industries}
                        testingServices={lab.testingServices}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
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
                  <button
                    onClick={() => handleViewProfileClick(lab.id)}
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
                  </button>
                  <button
                    onClick={() => handleViewProfileClick(lab.id)}
                    className="flex w-[317px] items-center justify-center gap-2 py-1 border border-[#dddddd] rounded-2xl cursor-pointer"
                  >
                    <img
                      className="w-6 h-6"
                      alt="Quote"
                      src="https://c.animaapp.com/ma15u5wlRvwvT0/img/comment-1.svg"
                    />
                    <div className="text-sm text-[#6161ff] font-medium">
                      Get Quote
                    </div>
                  </button>
                </div>
              </div>
            ))
          )}
          {/* "No more labs" message */}
          {!hasMore && !loading && labs.length > 0 && (
            <div className="text-center w-full mb-6 py-4">
             // No more labs to display....//
            </div>
          )}

          {loading && (
            <div className="text-center w-full py-4">Loading labs...</div>
          )}
        </div>
      )}
    </>
  );
};
