import React from "react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ClipboardIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

export const HeaderAdmin = () => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg p-4 space-y-4 text-[#484848] font-medium text-base">
      <MenuItem icon={<UserCircleIcon className="w-6 h-6" />} label="Profile" />
      <MenuItem icon={<Cog6ToothIcon className="w-6 h-6" />} label="Settings" />
      <MenuItem icon={<UsersIcon className="w-6 h-6" />} label="User Management" />
      <MenuItem icon={<ClipboardDocumentListIcon className="w-6 h-6" />} label="Task Management" />
      <MenuItem icon={<ClipboardIcon className="w-6 h-6" />} label="Document Management" />
      <MenuItem icon={<ArrowLeftOnRectangleIcon className="w-6 h-6" />} label="Logout" />
    </div>
  );
};

const MenuItem = ({ icon, label }) => (
  <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);
