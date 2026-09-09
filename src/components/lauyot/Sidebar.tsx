import {
  CirclePlus,
  House,
  LayoutGrid,
  LogOut,
  Package,
  ShoppingCart,
  SquareChevronLeft,
  SquareChevronRight,
  Users,
} from "lucide-react";
import logo from "../../assets/img/logo1.png";
import avatar from "../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/modContext";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const { darkMode } = useTheme();

  return (
    <div
      className={`
    ${sidebar ? "w-[80px] min-w-[80px]" : "w-[260px] min-w-[260px]"}
    shrink-0
    transition-[width,min-width] duration-500 ease-in-out
    flex flex-col justify-between
    h-screen
    bg-white dark:bg-[#111827]
    shadow-[0px_3px_4px_0px_#0000001F]
  `}
    >
      {/* TOP */}
      <div>
        <div
          className={`${
            sidebar
              ? "justify-center p-5"
              : "justify-between flex items-center p-5"
          }`}
        >
          <div className="flex justify-center">
            {!sidebar && <img src={logo} alt="logo" />}
          </div>

          <div
            className={sidebar ? "w-full flex justify-center" : ""}
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? (
              <SquareChevronRight className="text-[#6A717F] cursor-pointer" />
            ) : (
              <SquareChevronLeft className="text-[#6A717F] cursor-pointer" />
            )}
          </div>
        </div>

        {/* MENU */}
        <div className="px-[14px]">
          {!sidebar && (
            <p className="sidebar-menu dark:text-gray-400">Main menu</p>
          )}

          <div className="mt-3 flex flex-col gap-2">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `rounded-md flex items-center gap-2 px-4 py-2.25 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#4EA674] text-white"
                    : "text-[#6A717F] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <House color={isActive ? "white" : "#6A717F"} size={20} />
                  {!sidebar && <p>Dashboard</p>}
                </>
              )}
            </NavLink>

            <NavLink
              to="orderManagment"
              className={({ isActive }) =>
                `rounded-md flex items-center gap-2 px-4 py-2.25 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#4EA674] text-white"
                    : "text-[#6A717F] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <ShoppingCart
                    color={isActive ? "white" : "#6A717F"}
                    size={20}
                  />
                  {!sidebar && <p>Order Management</p>}
                </>
              )}
            </NavLink>

            <NavLink
              to="customer"
              className={({ isActive }) =>
                `rounded-md flex items-center gap-2 px-4 py-2.25 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#4EA674] text-white"
                    : "text-[#6A717F] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Users color={isActive ? "white" : "#6A717F"} size={20} />
                  {!sidebar && <p>Customers</p>}
                </>
              )}
            </NavLink>

            <NavLink
              to="categories"
              className={({ isActive }) =>
                `rounded-md flex items-center gap-2 px-4 py-2.25 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#4EA674] text-white"
                    : "text-[#6A717F] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <LayoutGrid
                    color={isActive ? "white" : "#6A717F"}
                    size={20}
                  />
                  {!sidebar && <p>Categories</p>}
                </>
              )}
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) =>
                `rounded-md flex items-center gap-2 px-4 py-2.25 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#4EA674] text-white"
                    : "text-[#6A717F] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <CirclePlus
                    color={isActive ? "white" : "#6A717F"}
                    size={20}
                  />
                  {!sidebar && <p>Add Products</p>}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {/* USER */}
      <div
        className={`
          ${sidebar ? "w-full flex justify-center" : "flex justify-between items-center"}
          px-[14px] mb-5
        `}
      >
        <div className="flex gap-[12px] items-center">
          {!sidebar && <img src={avatar} alt="avatar" />}

          {!sidebar && (
            <div>
              <p className="text-[#1F2937] dark:text-white">Dealport</p>
              <p className="text-[#6A717F]">Mark@thedesigner...</p>
            </div>
          )}
        </div>

        <LogOut className="text-[#6A717F] hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
}
