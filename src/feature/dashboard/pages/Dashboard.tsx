import { ChevronUp, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { Segmented, Skeleton, ConfigProvider, Input } from "antd";
import foto from "../../../assets/img/iphone.png";

import SignUpChart from "../compponet/Chart";
import BestSellingProduct from "../compponet/BestSellTable";

import brgraph from "../../../assets/img/bargraph.png";
import map from "../../../assets/img/bg-map.png";
import us from "../../../assets/img/us 1.png";

import type { DashboardStatsType } from "../types/ProductType";
import DashboardService from "../service/DashboardService";
import { useIsDark } from "../../hook/UseIsDark";

export default function Dashboard() {
  const darkMode = useIsDark();

  const { Search } = Input;

  const { isPending, kpisData, salesByCountr } = DashboardService();

  const { data: salesData, isPending: salesPending } = salesByCountr();

  const salesDatas = salesData ?? [];

  const kpisDatas: DashboardStatsType | undefined = kpisData;

  const [activeChart, setActiveChart] = useState("customers");

  const stats = [
    {
      value: "52k",
      title: "Customers",
      key: "customers",
    },
    {
      value: "3.5k",
      title: "Total Products",
      key: "products",
    },
    {
      value: "2.5k",
      title: "Stock Products",
      key: "stock",
    },
    {
      value: "0.5k",
      title: "Out of Stock",
      key: "outOfStock",
    },
    {
      value: "250k",
      title: "Revenue",
      key: "revenue",
    },
  ];

  return (
    <div className="w-full text-[#23272E] dark:text-[#F9FAFB]">
      {/* ================================================= */}
      {/* FIRST ROW */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* ================= TOTAL SALES ================= */}

        <div className="bg-white dark:bg-[#1F2937] p-4 shadow rounded-[8px] h-full border border-transparent dark:border-[#374151]">
          {isPending ? (
            <Skeleton active />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-[18px]">Total Sales</p>

                  <p className="text-gray-500 dark:text-[#9CA3AF] text-[14px]">
                    Last{" "}
                    {kpisDatas?.label === "30d" ? "30 days" : kpisDatas?.label}
                  </p>
                </div>

                <EllipsisVertical
                  size={20}
                  className="text-gray-500 dark:text-[#9CA3AF]"
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <p className="font-bold text-[32px]">
                  {kpisDatas?.totalSales?.value?.toLocaleString()} so'm
                </p>

                <p className="text-[14px]">
                  Sales{" "}
                  <span className="font-bold text-green-500">
                    {kpisDatas?.totalSales?.changePercent}%
                  </span>
                </p>
              </div>

              <p className="text-gray-500 dark:text-[#9CA3AF] text-[14px]">
                Previous period{" "}
                <span className="text-[#6467F2]">
                  ({kpisDatas?.totalSales?.previousValue?.toLocaleString()}{" "}
                  so'm)
                </span>
              </p>

              <div className="flex justify-end mt-auto pt-4">
                <button
                  className="
                    bg-white dark:bg-[#1F2937]
                    border border-[#6467F2]
                    text-[#6467F2]
                    text-[16px]
                    py-1 px-5
                    rounded-[50px]
                    hover:bg-[#6467F2]
                    hover:text-white
                    transition
                  "
                >
                  Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ================= TOTAL ORDERS ================= */}

        <div className="bg-white dark:bg-[#1F2937] p-4 shadow rounded-[8px] h-full border border-transparent dark:border-[#374151]">
          {isPending ? (
            <Skeleton active />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-[18px]">Total Orders</p>

                  <p className="text-gray-500 dark:text-[#9CA3AF] text-[14px]">
                    Last{" "}
                    {kpisDatas?.label === "30d" ? "30 days" : kpisDatas?.label}
                  </p>
                </div>

                <EllipsisVertical
                  size={20}
                  className="text-gray-500 dark:text-[#9CA3AF]"
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <p className="font-bold text-[32px]">
                  {kpisDatas?.totalOrders?.value}
                </p>

                <p className="text-[14px]">
                  Orders{" "}
                  <span className="font-bold text-green-500">
                    {kpisDatas?.totalOrders?.changePercent}%
                  </span>
                </p>
              </div>

              <p className="text-gray-500 dark:text-[#9CA3AF] text-[14px]">
                Previous period{" "}
                <span className="text-[#6467F2]">
                  ({kpisDatas?.totalOrders?.previousValue} orders)
                </span>
              </p>

              <div className="flex justify-end mt-auto pt-4">
                <button
                  className="
                    bg-white dark:bg-[#1F2937]
                    border border-[#6467F2]
                    text-[#6467F2]
                    text-[16px]
                    py-1 px-5
                    rounded-[50px]
                    hover:bg-[#6467F2]
                    hover:text-white
                    transition
                  "
                >
                  Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ================= ORDER STATUS ================= */}

        <div className="bg-white dark:bg-[#1F2937] flex flex-col p-4 rounded-[8px] shadow h-full border border-transparent dark:border-[#374151]">
          {isPending ? (
            <Skeleton active />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-[18px]">Order Status</p>

                  <p className="text-gray-500 dark:text-[#9CA3AF] text-[14px]">
                    Last{" "}
                    {kpisDatas?.label === "30d" ? "30 days" : kpisDatas?.label}
                  </p>
                </div>

                <EllipsisVertical
                  size={20}
                  className="text-gray-500 dark:text-[#9CA3AF]"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* PENDING */}

                <div className="flex flex-col">
                  <p>Pending</p>

                  <p className="flex items-center text-[#023337] dark:text-[#F9FAFB] font-bold whitespace-nowrap text-[22px]">
                    {kpisDatas?.pending?.orders}

                    <span className="text-[#4EA674] text-[16px] pl-[10px] font-medium">
                      user {kpisDatas?.pending?.users}
                    </span>
                  </p>
                </div>

                <div className="border-r border-gray-300 dark:border-[#4B5563] h-[50px]" />

                {/* CANCELLED */}

                <div className="flex flex-col">
                  <p>Canceled</p>

                  <p className="flex items-center text-red-500 font-bold whitespace-nowrap text-[22px]">
                    {kpisDatas?.cancelled?.value}

                    <span className="text-red-500 text-[16px] pl-[10px] font-medium">
                      {kpisDatas?.cancelled?.changePercent}%
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-auto pt-4">
                <button
                  className="
                    bg-white dark:bg-[#1F2937]
                    border border-[#6467F2]
                    text-[#6467F2]
                    text-[16px]
                    py-1 px-5
                    rounded-[50px]
                    hover:bg-[#6467F2]
                    hover:text-white
                    transition
                  "
                >
                  Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* SECOND ROW */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 mt-4 gap-4">
        {/* ================= REPORT ================= */}

        <div className="xl:col-span-2 bg-white dark:bg-[#1F2937] p-4 rounded-[8px] shadow border border-transparent dark:border-[#374151]">
          <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
            <p className="font-bold text-[18px]">Report for this week</p>

            <div className="flex items-center gap-4">
              {/* THIS WEEK / LAST WEEK */}

              <ConfigProvider
                theme={{
                  components: {
                    Segmented: {
                      trackBg: darkMode ? "#1F2937" : "#F3F4F6",

                      itemColor: darkMode ? "#9CA3AF" : "#6B7280",

                      itemHoverColor: darkMode ? "#FFFFFF" : "#23272E",

                      itemSelectedColor: darkMode ? "#FFFFFF" : "#23272E",

                      itemSelectedBg: darkMode ? "#4B5563" : "#FFFFFF",

                      itemHoverBg: darkMode ? "#374151" : "#FFFFFF",

                      borderRadius: 8,
                    
                    },
                  },
                }}
              >
                <Segmented<string>
                  options={["This week", "Last week"]}
                  onChange={(value) => {
                    console.log(value);
                  }}
                  className="
      !p-[3px]
      !rounded-[9px]
      !border
      !border-[#E5E7EB]
      dark:!border-[#374151]
      !bg-[#F3F4F6]
      dark:!bg-[#1F2937]
    "
                />
              </ConfigProvider>

              <EllipsisVertical
                size={20}
                className="text-gray-500 dark:text-[#9CA3AF]"
              />
            </div>
          </div>

          {/* ================= STATS ================= */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
            {stats.map((item) => (
              <div
                key={item.key}
                onClick={() => setActiveChart(item.key)}
                className={`
                  flex flex-col items-start
                  p-3
                  cursor-pointer
                  border-b-[2px]
                  transition-all

                  ${
                    activeChart === item.key
                      ? `
                        bg-[linear-gradient(
                          180deg,
                          rgba(78,166,116,0)_0%,
                          rgba(78,166,116,0.08)_100%
                        )]
                        border-b-[#4EA674]
                      `
                      : "border-b-[#E5E7EB] dark:border-b-[#374151]"
                  }
                `}
              >
                <p className="font-bold text-[24px]">{item.value}</p>

                <p className="text-[13px] text-[#8B909A] dark:text-[#9CA3AF] font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* ================= CHART ================= */}

          <div className="w-full">
            <SignUpChart />
          </div>
        </div>

        {/* ================= USERS / SALES ================= */}

        <div className="xl:col-span-1 bg-white dark:bg-[#1F2937] p-4 rounded-[8px] shadow border border-transparent dark:border-[#374151]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[14px] text-[#6467F2]">
                Users in last 30 minutes
              </p>

              <p className="font-bold text-[32px]">21.5K</p>
            </div>

            <EllipsisVertical
              size={20}
              className="text-gray-500 dark:text-[#9CA3AF]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Users per minute</p>

            <div>
              <img
                src={brgraph}
                alt="chart"
                className="w-full object-contain"
              />
            </div>

            {/* ================= SALES HEADER ================= */}

            <div className="flex justify-between items-center">
              <p className="font-semibold text-[18px]">Sales by Country</p>

              <p className="font-semibold text-[18px]">Sales</p>
            </div>

            {/* ================= SALES BY COUNTRY ================= */}

            <div
              className="
    min-h-[200px]
    mx-[-16px]
    p-[20px]
    bg-no-repeat
    bg-cover
    bg-center
    flex flex-col
    gap-[26px]
    dark:backdrop-blur-[6px]
    dark:bg-[#1F2937]/35
  "
              style={{
                backgroundImage: `url(${map})`,
              }}
            >
              {salesPending ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  <p className="text-gray-500 dark:text-[#9CA3AF]">
                    Loading...
                  </p>
                </div>
              ) : salesDatas.length === 0 ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  <p className="text-gray-500 dark:text-[#9CA3AF]">
                    Sales data not found
                  </p>
                </div>
              ) : (
                salesDatas.map((item) => (
                  <div
                    key={item.code}
                    className="
    flex
    justify-between
    items-start
    gap-3
    dark:bg-[#111827]/40
    dark:backdrop-blur-md
    dark:border
    dark:border-white/10
    dark:rounded-[10px]
    dark:px-3
    dark:py-2
  "
                  >
                    {/* COUNTRY */}

                    <div className="flex gap-[10px] items-center">
                      <img
                        src={us}
                        alt={item.name}
                        className="w-[30px] h-[20px] object-cover"
                      />

                      <div>
                        <p className="font-bold text-[14px]">
                          {item.sales.toLocaleString()}
                        </p>

                        <p className="text-[12px] text-[#8B909A] dark:text-[#9CA3AF]">
                          {item.name}
                        </p>
                      </div>
                    </div>

                    {/* PERCENTAGE */}

                    <div className="flex flex-col gap-[3px]">
                      <p
                        className={`
                          font-bold
                          text-[14px]
                          flex
                          justify-end
                          items-center
                          ${
                            item.changePercent >= 0
                              ? "text-[#28C76F]"
                              : "text-red-500"
                          }
                        `}
                      >
                        {item.changePercent >= 0 ? (
                          <ChevronUp size={16} color="#28C76F" />
                        ) : (
                          <ChevronUp
                            size={16}
                            color="red"
                            className="rotate-180"
                          />
                        )}
                        {item.changePercent}%
                      </p>

                      <div className="bg-[#F0F3FF] dark:bg-[#374151] w-[150px] sm:w-[179px] h-[6px] rounded-[10px]">
                        <div
                          className={`
                            h-[6px]
                            rounded-[10px]
                            ${
                              item.changePercent >= 0
                                ? "bg-[#28C76F]"
                                : "bg-red-500"
                            }
                          `}
                          style={{
                            width: `${Math.min(Math.max(item.share, 0), 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* ================= VIEW INSIGHT ================= */}

            <button
              className="
                bg-white dark:bg-[#1F2937]
                w-full
                border border-[#6467F2]
                text-[#6467F2]
                text-[16px]
                py-2
                px-5
                rounded-[50px]
                hover:bg-[#6467F2]
                hover:text-white
                transition
              "
            >
              View Insight
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* THIRD ROW */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 mt-4 gap-4">
        {/* ================= BEST SELLING ================= */}

        <div className="xl:col-span-2 ">
          <BestSellingProduct />
        </div>

        {/* ================= TOP PRODUCTS ================= */}

        <div className="xl:col-span-1 bg-white dark:bg-[#1F2937] p-4 shadow rounded-[8px] border border-transparent dark:border-[#374151]">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[18px]">Top Products</p>

            <p className="text-[12px] font-regular text-[#6467F2]">
              All products
            </p>
          </div>

          {/* ================= SEARCH ================= */}

          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: darkMode ? "#374151" : "#FFFFFF",

                colorText: darkMode ? "#F9FAFB" : "#111827",

                colorTextPlaceholder: darkMode ? "#9CA3AF" : "#6B7280",

                colorBorder: darkMode ? "#4B5563" : "#E5E7EB",
              },

              components: {
                Input: {
                  colorBgContainer: darkMode ? "#374151" : "#FFFFFF",

                  colorText: darkMode ? "#F9FAFB" : "#111827",

                  colorTextPlaceholder: darkMode ? "#9CA3AF" : "#6B7280",

                  colorBorder: darkMode ? "#4B5563" : "#E5E7EB",

                  hoverBorderColor: "#4EA674",

                  activeBorderColor: "#4EA674",

                  colorIcon: darkMode ? "#9CA3AF" : "#6B7280",

                  colorIconHover: "#4EA674",
                },
              },
            }}
          >
            <div className="mb-4">
              <Search
                placeholder="Search product..."
                allowClear
                className="w-full"
              />
            </div>
          </ConfigProvider>

          {/* PRODUCT 1 */}

          <div className="flex justify-between items-center mt-4 p-2 border-b border-[#E0E0E0] dark:border-[#374151] gap-2">
            <img
              src={foto}
              alt="Apple iPhone 13"
              className="w-[45px] h-[45px] object-contain"
            />

            <div className="flex-1">
              <p className="font-medium text-[15px]">Apple iPhone 13</p>

              <p className="text-[12px] text-[#8B909A] dark:text-[#9CA3AF]">
                Item: #FXZ-4567
              </p>
            </div>

            <p className="font-bold text-[15px]">$999.00</p>
          </div>

          {/* PRODUCT 2 */}

          <div className="flex justify-between items-center mt-4 p-2 border-b border-[#E0E0E0] dark:border-[#374151] gap-2">
            <img
              src={foto}
              alt="Apple iPhone 13"
              className="w-[45px] h-[45px] object-contain"
            />

            <div className="flex-1">
              <p className="font-medium text-[15px]">Apple iPhone 13</p>

              <p className="text-[12px] text-[#8B909A] dark:text-[#9CA3AF]">
                Item: #FXZ-4567
              </p>
            </div>

            <p className="font-bold text-[15px]">$999.00</p>
          </div>

          {/* PRODUCT 3 */}

          <div className="flex justify-between items-center mt-4 p-2 border-b border-[#E0E0E0] dark:border-[#374151] gap-2">
            <img
              src={foto}
              alt="Apple iPhone 13"
              className="w-[45px] h-[45px] object-contain"
            />

            <div className="flex-1">
              <p className="font-medium text-[15px]">Apple iPhone 13</p>

              <p className="text-[12px] text-[#8B909A] dark:text-[#9CA3AF]">
                Item: #FXZ-4567
              </p>
            </div>

            <p className="font-bold text-[15px]">$999.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
