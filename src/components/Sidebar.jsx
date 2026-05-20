import {
  LayoutDashboard,
  Package,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({
  collapsed = false,
  setCollapsed = () => {},
}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
    ${
      isActive
        ? "bg-green-500/20 text-green-400"
        : "hover:bg-white/5 text-white"
    }`;

  return (
    <aside
      className={`
        fixed left-0 top-0 z-50
        h-screen
        bg-slate-950/95 backdrop-blur-xl
        border-r border-white/10
        transition-all duration-300
        flex flex-col
        ${collapsed ? "md:w-24 w-72" : "w-72"}
      `}
    >

      {/* TOP */}
      <div className="p-4 border-b border-white/10">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          {!collapsed && (
            <h1 className="text-2xl font-bold text-green-400">
              Urban Harvest
            </h1>
          )}

          {/* COLLAPSE BUTTON */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-2 rounded-xl hover:bg-white/10 transition"
          >
            {collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>

        </div>

      </div>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto p-4">

        <div className="space-y-3">

          <NavLink
            to="/dashboard"
            className={navItemClass}
          >
            <LayoutDashboard size={20} />

            {(!collapsed || window.innerWidth < 768) && (
              <span>Dashboard</span>
            )}
          </NavLink>

          <NavLink
            to="/products"
            className={navItemClass}
          >
            <Package size={20} />

            {(!collapsed || window.innerWidth < 768) && (
              <span>Products</span>
            )}
          </NavLink>

        </div>

      </div>

      {/* LOGOUT */}
      <div className="p-4 border-t border-white/10">

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 hover:bg-red-500/10 text-red-400 px-4 py-3 rounded-xl transition-all"
        >
          <LogOut size={20} />

          {(!collapsed || window.innerWidth < 768) && (
            <span>Logout</span>
          )}
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;