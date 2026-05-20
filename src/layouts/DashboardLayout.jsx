import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Menu, X } from "lucide-react";

import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300
        ${
          mobileSidebarOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        {/* BACKDROP */}
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* SIDEBAR */}
        <div
          className={`absolute left-0 top-0 transition-transform duration-300
          ${
            mobileSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </div>

      </div>

      {/* MAIN CONTENT */}
      <main
        className={`min-h-screen transition-all duration-300
        ${collapsed ? "md:ml-24" : "md:ml-72"}`}
      >

        {/* MOBILE HEADER */}
        <div className="md:hidden sticky top-0 z-40 flex items-center justify-between p-4 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

          <h1 className="text-lg font-bold text-green-400">
            Urban Harvest
          </h1>

          <button
            onClick={() =>
              setMobileSidebarOpen(!mobileSidebarOpen)
            }
            className="p-2 rounded-xl hover:bg-white/10 transition"
          >
            {mobileSidebarOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 md:p-8">

          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>

        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;