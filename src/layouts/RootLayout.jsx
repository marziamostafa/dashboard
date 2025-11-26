import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import SideNavbar from "../pages/shared/SideNavbar/SideNavbar";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function RootLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="h-screen flex">

      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-72" : "w-16"} bg-white border-r relative transition-width duration-300`}>
        <SideNavbar isOpen={sidebarOpen} />

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-5 w-6 h-6 bg-gray-200 flex items-center justify-center rounded-full shadow"
        >
          {sidebarOpen ? <MdKeyboardDoubleArrowLeft className="text-amber-500" /> : <MdKeyboardDoubleArrowRight className="text-amber-500" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex-1 p-5 bg-[#F5F6FA] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
