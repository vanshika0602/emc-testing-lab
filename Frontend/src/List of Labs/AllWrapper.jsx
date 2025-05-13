import React, { useState } from "react";
import axios from 'axios';
import qs from 'qs';

export const AllWrapper = ({ onClose, onApplyFilters }) => {
  const [activeCategory, setActiveCategory] = useState("productCategories");

  const [selectedFilters, setSelectedFilters] = useState({
    accreditation: [],
    industries: [],
    testingServices: [],
    expertise: [],
    location: [],
  });

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const alreadySelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: alreadySelected
          ? prev[category].filter((v) => v !== value)
          : [...prev[category], value],
      };
    });
  };

  const handleHeadingClick = (category, defaultValue) => {
    setActiveCategory(category);
  };

  const filterOptions = {
    accreditation: ["Authorised Representative", "Emc"],
    industries: ["Electrical", "Mechanical", "Environmental"],
    testingServices: ["Testing Laboratory", "Calibration Laboratory"],
    expertise: ["Product Safety", "Radio", "Laser Safety", "Battery"],
    location: ["Germany", "Canada", "USA", "India"],
  };

  const applyFilters = async () => {
    try {
      const params = {};
      ["accreditation", "industries", "testingServices", "location"].forEach((key) => {
        if (Array.isArray(selectedFilters[key]) && selectedFilters[key].length) {
          params[key] = selectedFilters[key].join(",");
        }
      });
  
      console.log("Sending request with filters:", params);
  
      const response = await axios.get("http://localhost:8080/api/lab-overview/filter", {
        params,
        paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' })
      });
  
      console.log("Filtered labs:", response.data.data);
  
      // ✅ Trigger parent callback
      if (onApplyFilters) {
        onApplyFilters(selectedFilters);  // <--- SEND TO PARENT
      }
  
    } catch (err) {
      console.error("Error fetching labs:", err);
    }
  };  

  const clearFilters = () => {
    setSelectedFilters({
      accreditation: [],
      industries: [],
      testingServices: [],
      expertise: [],
      location: [],
    });
  };

  const renderTag = (category, label) => (
    <div
      key={`${category}-${label}`}  // 👈 add key here
      onClick={() => toggleFilter(category, label)}
      className={`flex w-[226px] items-center gap-2.5 p-3 rounded-3xl cursor-pointer border text-sm font-normal ${
        selectedFilters[category].includes(label)
          ? "bg-[#6161ff] text-white border-transparent"
          : "text-[#585858] border-[#cbcbcb]"
      }`}
    >
      {label}
    </div>
  );

  return (
    <div className="flex flex-col h-[512px] items-start gap-2.5 p-5 relative bg-white border border-[#cbcbcb] overflow-x-hidden">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6"
            alt="Filter list"
            src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/filter-list.svg"
          />
          <div className="text-lg font-bold text-[#202224]">Filters</div>
        </div>
        <img
          onClick={onClose}
          className="w-6 h-6 cursor-pointer"
          alt="X"
          src="https://c.animaapp.com/ma1aqe6wFlEgiX/img/x-1.svg"
        />
      </div>

      <div className="flex flex-row gap-3 w-full">
        <div className="flex flex-col gap-1 w-[238px]">
          {[
            {
              key: "accreditation",
              label: "Lab Accreditation",
              icon: "features-alt-1.svg",
            },
            {
              key: "industries",
              label: "Business Categories",
              icon: "category.svg",
            },
            {
              key: "testingServices",
              label: "Testing Services",
              icon: "flask-gear.svg",
            },
            {
              key: "expertise",
              label: "Expertise",
              icon: "memo-pad.svg",
            },
            {
              key: "location",
              label: "Location",
              icon: "note.svg",
            },
          ].map(({ key, label, icon }) => (
            <div
              key={key}
              className={`px-2 py-3 flex items-center gap-2 cursor-pointer ${
                activeCategory === key
                  ? "border-l-[3px] border-dashed border-[#e93a3a] font-semibold text-[#e93a3a]"
                  : "text-[#474747]"
              }`}
              onClick={() => handleHeadingClick(key)}  // ✅ Only set active category
            >
              <img
                className="w-6 h-6"
                src={`https://c.animaapp.com/ma1aqe6wFlEgiX/img/${icon}`}
                alt={label}
              />
              <span className="text-base">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-[458px]">
          <div className="flex flex-wrap gap-1.5">
          {filterOptions[activeCategory]?.map((label) =>
            renderTag(activeCategory, label)
          )}
          </div>
          <div className="flex gap-1.5">
            <div
              onClick={clearFilters}
              className="flex w-56 items-center justify-center p-3 rounded-3xl border border-[#e93a3a] cursor-pointer"
            >
              <span className="text-base font-medium text-[#e93a3a]">
                Clear
              </span>
            </div>
            <div
              onClick={applyFilters}
              className="flex w-56 items-center justify-center p-3 bg-[#e93a3a] rounded-3xl cursor-pointer"
            >
              <span className="text-base font-medium text-white">Apply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
