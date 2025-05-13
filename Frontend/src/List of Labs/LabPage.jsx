import React, { useState } from "react";
import { DivWrapper } from "./components/DivWrapper";

const LabPage = () => {
  const [filters, setFilters] = useState({});
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const triggerRefresh = () => {
    setRefreshTrigger((prev) => prev + 1); // Ensures the prop changes and triggers useEffect
  };

  return (
    <div>
      <button
        onClick={triggerRefresh}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Refresh Labs
      </button>

      {/* Pass filters and refreshTrigger */}
      <DivWrapper filters={filters} refreshTrigger={refreshTrigger} />
    </div>
  );
};

export default LabPage;
