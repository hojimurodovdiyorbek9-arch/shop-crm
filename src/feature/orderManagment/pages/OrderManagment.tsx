import Search from "antd/es/input/Search";
import { ArrowDownUp, EllipsisVertical, ListFilter } from "lucide-react";
import { ConfigProvider, Segmented } from "antd";

import ProductTable from "../compponet/ProductTable";
import { useIsDark } from "../../hook/UseIsDark";

export default function OrderManagment() {
  const isDark = useIsDark();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: isDark ? "#1F2937" : "#FFFFFF",
          colorBgElevated: isDark ? "#1F2937" : "#FFFFFF",
          colorBgLayout: isDark ? "#111827" : "#F5F6F8",

          colorText: isDark ? "#F9FAFB" : "#111827",
          colorTextSecondary: isDark ? "#9CA3AF" : "#6B7280",

          colorBorder: isDark ? "#374151" : "#E5E7EB",
          colorPrimary: "#4EA674",

          colorFillSecondary: isDark ? "#374151" : "#F3F4F6",
          colorFillTertiary: isDark ? "#374151" : "#F3F4F6",
          colorFillQuaternary: isDark ? "#374151" : "#F9FAFB",

          borderRadius: 8,
        },

        components: {
          Input: {
            colorBgContainer: isDark ? "#374151" : "#FFFFFF",
            colorText: isDark ? "#FFFFFF" : "#111827",
            colorTextPlaceholder: "#9CA3AF",
            activeBorderColor: "#4EA674",
            hoverBorderColor: "#4EA674",
            activeShadow: "0 0 0 2px rgba(78,166,116,0.15)",
          },

          Segmented: {
            itemColor: isDark ? "#D1D5DB" : "#374151",
            itemHoverColor: isDark ? "#FFFFFF" : "#111827",
            itemSelectedColor: "#FFFFFF",
           

            trackBg: isDark ? "#374151" : "#F3F4F6",
            itemSelectedBg: "#4EA674",

            borderRadius: 8,
          },

          Table: {
            headerBg: isDark ? "#374151" : "#F9FAFB",
            headerColor: isDark ? "#FFFFFF" : "#111827",

            rowHoverBg: isDark ? "#374151" : "#F3F4F6",

            colorBgContainer: isDark ? "#1F2937" : "#FFFFFF",
            colorText: isDark ? "#E5E7EB" : "#374151",

            borderColor: isDark ? "#374151" : "#E5E7EB",

            cellPaddingBlock: 14,
            cellPaddingInline: 16,
          },

          Pagination: {
            itemBg: isDark ? "#374151" : "#FFFFFF",
            itemActiveBg: "#4EA674",
            itemLinkBg: isDark ? "#374151" : "#FFFFFF",
            colorText: isDark ? "#D1D5DB" : "#374151",
            colorPrimary: "#FFFFFF",
          },
        },
      }}
    >
      <div className="min-h-screen bg-[#F5F6F8] dark:bg-[#111827] text-[#111827] dark:text-white transition-colors duration-300">
        {/* Header */}
        <div className="flex justify-start items-center mb-4">
          <p className="text-[20px] font-bold dark:text-white">Order List</p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-[#1F2937] p-4 shadow dark:shadow-black/20 rounded-[8px] mt-4">
          {/* Top */}
          <div className="flex justify-between items-center">
            {/* Segmented */}
            <div className="flex items-center">
              <Segmented<string>
                options={["All order", "Completed", "Pending", "Canceled"]}
                className="!h-10 !p-1"
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>

            {/* Search + buttons */}
            <div className="flex gap-2 items-center py-2 px-4">
              {/* Search */}
              <Search
                placeholder="Search order"
                allowClear
                size="large"
                style={{
                  width: 240,
                }}
              />

              {/* Filter */}
              <button
                className="
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  bg-white
                  dark:bg-[#374151]
                  border
                  border-[#E5E7EB]
                  dark:border-[#4B5563]
                  w-[42px]
                  h-[40px]
                  rounded
                  text-[#374151]
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-[#4B5563]
                  transition
                "
              >
                <ListFilter size={18} />
              </button>

              {/* Sort */}
              <button
                className="
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  bg-white
                  dark:bg-[#374151]
                  border
                  border-[#E5E7EB]
                  dark:border-[#4B5563]
                  w-[42px]
                  h-[40px]
                  rounded
                  text-[#374151]
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-[#4B5563]
                  transition
                "
              >
                <ArrowDownUp size={18} />
              </button>

              {/* More */}
              <button
                className="
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  bg-white
                  dark:bg-[#374151]
                  border
                  border-[#E5E7EB]
                  dark:border-[#4B5563]
                  w-[42px]
                  h-[40px]
                  rounded
                  text-[#374151]
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-[#4B5563]
                  transition
                "
              >
                <EllipsisVertical size={18} />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-8">
            <ProductTable />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
