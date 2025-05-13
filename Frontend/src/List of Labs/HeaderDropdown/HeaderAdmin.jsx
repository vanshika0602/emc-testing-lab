import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import {
  UserCircleIcon,
  Cog6ToothIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ClipboardIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

export const HeaderAdmin = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update state to simulate logout
  };

  // Function to navigate to the sign-in page
  const handleSignInClick = () => {
    navigate("/signin"); // Navigate to /signin
  };

  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg p-4 space-y-4 text-[#484848] font-medium text-base">
      {isLoggedIn ? (
        <>
          <MenuItem icon={<UserCircleIcon className="w-6 h-6" />} label="Profile" />
          <MenuItem icon={<Cog6ToothIcon className="w-6 h-6" />} label="Settings" />
          <MenuItem icon={<UsersIcon className="w-6 h-6" />} label="User Management" />
          <MenuItem icon={<ClipboardDocumentListIcon className="w-6 h-6" />} label="Task Management" />
          <MenuItem icon={<ClipboardIcon className="w-6 h-6" />} label="Document Management" />
          <MenuItem
            icon={<ArrowLeftOnRectangleIcon className="w-6 h-6" />}
            label="Logout"
            onClick={handleLogout} // Logout functionality
          />
        </>
      ) : (
        <>
          <MenuItem
            icon={<UserCircleIcon className="w-6 h-6" />}
            label="Sign In"
            onClick={handleSignInClick} // Navigate to Sign In page
          />
          <MenuItem icon={<UserCircleIcon className="w-6 h-6" />} label="Sign Up" />
        </>
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, onClick }) => (
  <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer" onClick={onClick}>
    {icon}
    <span>{label}</span>
  </div>
);
