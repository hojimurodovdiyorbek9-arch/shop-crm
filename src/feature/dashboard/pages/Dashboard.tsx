import { ChevronUp, Divide, EllipsisVertical, ListFilter } from "lucide-react";
import { useState } from "react";
import SignUpChart from "../compponet/Chart";
import brgraph from "../../../assets/img/bargraph.png";
import map from "../../../assets/img/bg-map.png";
import us from "../../../assets/img/us 1.png";
import type { DashboardStatsType, ProductType } from "../types/ProductType";
import { Segmented, Skeleton, Spin, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import foto from "../../../assets/img/iphone.png";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import DashboardService from "../service/DashboardService";
export default function Dashboard() {
  type SearchProps = GetProps<typeof Input.Search>;
  const { isPending, kpisData, salesByCountr,bestSellingProduct } = DashboardService();
  const { data: salesData, isPending: salesPending } = salesByCountr();
  const { data: bestSellData, isPending: bestSellPending } = bestSellingProduct();

  
  const salesDatas = salesData ?? [];

  const kpisDatas: DashboardStatsType | undefined = kpisData;
  const { Search } = Input;

  const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const data: ProductType[] = [
    {
      key: "1",
      product: "Apple iPhone 13",
      image: foto,
      totalOrder: 104,
      status: "Completed",
      price: 999,
    },
    {
      key: "2",
      product: "Samsung Galaxy S23",
      image: foto,
      totalOrder: 85,
      status: "Pending",
      price: 899,
    },
    {
      key: "3",
      product: "MacBook Air M2",
      image: foto,
      totalOrder: 65,
      status: "Completed",
      price: 1299,
    },
  ];

  const columns: ColumnsType<ProductType> = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            alt={record.product}
            className="w-[45px] h-[45px] rounded-lg object-contain"
          />

          <span className="font-semibold text-[#4B465C]">{record.product}</span>
        </div>
      ),
    },
    {
      title: "Total Order",
      dataIndex: "totalOrder",
      key: "totalOrder",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color =
          status === "Completed"
            ? "green"
            : status === "Pending"
              ? "orange"
              : "red";

        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span className="font-semibold">${price.toFixed(2)}</span>
      ),
    },
  ];

  const [thisWeek, setThisWeek] = useState(true);
  const [activeChart, setActiveChart] = useState("customers");

  const stats = [
    { value: "52k", title: "Customers", key: "customers" },
    { value: "3.5k", title: "Total Products", key: "products" },
    { value: "2.5k", title: "Stock Products", key: "stock" },
    { value: "0.5k", title: "Out of Stock", key: "outOfStock" },
    { value: "250k", title: "Revenue", key: "revenue" },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {/* TOTAL SALES */}
        <div className="bg-white p-4 shadow rounded-[8px] h-full">
          {isPending ? (
            <Skeleton />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-[18px]">Total Sales</p>
                  <p className="text-gray-500 text-[14px]">
                    Last{" "}
                    {kpisDatas?.label === "30d" ? "30 days" : kpisDatas?.label}
                  </p>
                </div>
                <EllipsisVertical size={20} color="gray" />
              </div>

              <div className="flex items-center gap-4">
                <p className="font-bold text-[32px]">
                  {kpisDatas?.totalSales?.value?.toLocaleString()} so'm
                </p>
                <p className="text-[14px]">
                  Sales{" "}
                  <span className="font-bold text-green-500">
                    +{kpisDatas?.totalSales?.changePercent}%
                  </span>
                </p>
              </div>

              <p className="text-gray-500 text-[14px]">
                Previous period{" "}
                <span className="text-[#6467F2]">
                  ({kpisDatas?.totalSales?.previousValue?.toLocaleString()}{" "}
                  so'm)
                </span>
              </p>

              <div className="flex justify-end mt-auto pt-4">
                <button className="bg-white border text-[16px] border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
                  Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* TOTAL ORDERS */}
        <div className="bg-white p-4 shadow rounded-[8px] h-full">
          {isPending ? (
            <Skeleton />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-[18px]">Total Orders</p>
                  <p className="text-gray-500 text-[14px]">
                    Last{" "}
                    {kpisDatas?.label === "30d" ? "30 days" : kpisDatas?.label}
                  </p>
                </div>

                <EllipsisVertical size={20} color="gray" />
              </div>

              <div className="flex items-center gap-4">
                <p className="font-bold text-[32px]">
                  {kpisDatas?.totalOrders.value}
                </p>

                <p className="text-[14px]">
                  Orders{" "}
                  <span className="font-bold text-green-500">
                    +{kpisDatas?.totalOrders.changePercent}%
                  </span>
                </p>
              </div>

              <p className="text-gray-500 text-[14px]">
                Previous period{" "}
                <span className="text-[#6467F2]">
                  ({kpisDatas?.totalOrders.previousValue} orders)
                </span>
              </p>

              <div className="flex justify-end mt-auto pt-4">
                <button className="bg-white border text-[16px] border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
                  Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* PENDING / CANCELLED */}
        <div className="bg-white flex flex-col p-4 rounded-[8px] shadow h-full">
          {isPending ? (
            <Skeleton />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-[18px]">Order Status</p>
                  <p className="text-gray-500 text-[14px]">
                    Last{" "}
                    {kpisDatas?.label === "30d" ? "30 days" : kpisDatas?.label}
                  </p>
                </div>

                <EllipsisVertical size={20} color="gray" />
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* PENDING */}
                <div className="flex flex-col pr-[30px]">
                  <p>Pending</p>

                  <p className="flex font-bold flex items-center text-[#023337] whitespace-nowrap text-[22px]">
                    {kpisDatas?.pending.orders}

                    <span className="text-[#4EA674] text-[16px] pl-[10px] font-medium">
                      user {kpisDatas?.pending.users}
                    </span>
                  </p>
                </div>

                <div className="border-r border-gray-300 h-[50px]" />

                {/* CANCELLED */}
                <div className="flex flex-col justify-start pr-[30px]">
                  <p>Canceled</p>

                  <p className="flex  items-center text-red-500 font-bold whitespace-nowrap text-[22px]">
                    {kpisDatas?.cancelled.value}

                    <span className="text-red-500 text-[16px] pl-[10px] font-medium">
                      {kpisDatas?.cancelled.changePercent}%
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-auto pt-4">
                <button className="bg-white border text-[16px] border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
                  Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" grid grid-cols-3 mt-4 gap-4 ">
        <div className="col-span-2 bg-white p-4 rounded-[8px] shadow">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[18px]">Report for this week</p>
            <div className="flex items-center gap-4">
              {/* <div className="flex bg-[#EAF8E7] p-[4px] rounded-[12px] gap-2">
                <button
                  className={`text-[12px] text-bold   px-[12px] py-[8px] rounded-[8px]${thisWeek ? " bg-[#FFFFFF] text-[#4EA674]" : "text-[#6A717F]"}`}
                  onClick={() => setThisWeek(true)}
                >
                  This week
                </button>
                <button
                  className={`text-[12px] text-bold  px-[12px] py-[8px] rounded-[8px]${!thisWeek ? " bg-[#FFFFFF] text-[#4EA674]" : "text-[#6A717F]"}`}
                  onClick={() => setThisWeek(false)}
                >
                  Last week
                </button>
              </div> */}
              <Segmented<string>
                options={["This week", "Last week"]}
                onChange={(value) => {
                  console.log(value); // string
                }}
              />
              <div>
                <EllipsisVertical size={20} color="gray" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 mb-4 mx-[4px]">
            {stats.map((item) => (
              <div
                key={item.key}
                onClick={() => setActiveChart(item.key)}
                className={`flex flex-col items-start p-4 cursor-pointer border-b-[2px] transition-all
        ${
          activeChart === item.key
            ? "bg-[linear-gradient(180deg,rgba(78,166,116,0)_0%,rgba(78,166,116,0.04)_100%)] border-b-[#4EA674]"
            : "border-b-[#EAF8E7]"
        }
      `}
              >
                <p className="font-bold text-[24px]">{item.value}</p>

                <p className="text-[13px] text-[#8B909A] font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div>
            <SignUpChart />
          </div>
        </div>
        <div className="col-span-1 bg-white p-4 rounded-[8px] shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[14px] text-[#6467F2]">
                Users in last 30 minutes
              </p>

              <p className="font-bold text-[32px]">21.5K</p>
            </div>

            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p>Users per minute</p>

            <div>
              <img src={brgraph} alt="chart" />
            </div>

            {/* Sales by Country header */}
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[18px] text-[#23272E]">
                Sales by Country
              </p>

              <p className="font-semibold text-[18px] text-[#23272E]">Sales</p>
            </div>

            {/* Sales by Country */}
            <div
              className="min-h-[200px] mx-[-16px] p-[20px] pb-[20px]
    bg-no-repeat bg-cover bg-center
    flex flex-col gap-[26px]"
              style={{
                backgroundImage: `url(${map})`,
              }}
            >
              {salesPending ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  <p className="text-gray-500">Loading...</p>
                </div>
              ) : salesDatas.length === 0 ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  <p className="text-gray-500">Sales data not found</p>
                </div>
              ) : (
                salesDatas.map((item) => (
                  <div
                    key={item.code}
                    className="flex justify-between items-start"
                  >
                    {/* Country info */}
                    <div className="flex gap-[10px] items-center">
                      <div>
                        <img
                          src={us}
                          alt={item.name}
                          className="w-[30px] h-[20px] object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-bold text-[14px] text-[#4B465C]">
                          {item.sales.toLocaleString()}
                        </p>

                        <p className="text-[12px] text-[#8B909A]">
                          {item.name}
                        </p>
                      </div>
                    </div>

                    {/* Sales percentage */}
                    <div className="flex flex-col gap-[3px]">
                      <p
                        className={`font-bold text-[14px] flex justify-end items-center ${
                          item.changePercent >= 0
                            ? "text-[#28C76F]"
                            : "text-red-500"
                        }`}
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

                      {/* Progress */}
                      <div className="bg-[#F0F3FF] w-[179px] h-[6px] rounded-[10px]">
                        <div
                          className={`h-[6px] rounded-[10px] ${
                            item.changePercent >= 0
                              ? "bg-[#28C76F]"
                              : "bg-red-500"
                          }`}
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

            {/* View Insight */}
            <div className="flex flex-col">
              <button
                className="bg-white w-full border text-[16px]
      border-[#6467F2] text-[#6467F2]
      py-1 px-5 rounded-[50px]
      hover:bg-[#5a5dd8] hover:text-white"
              >
                View Insight
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3 chi col */}
      <div className=" grid grid-cols-3 mt-4 gap-4 ">
        <div className="col-span-2 bg-white  shadow rounded-[8px]">
          <div className="p-4 flex justify-between items-center mb-4">
            <p>Best selling product</p>
            <div>
              <div className="flex bg-[#4EA674] p-[4px] items-center rounded-[8px] cursor-pointer gap-2">
                <p className="text-white">Filter</p>
                <div>
                  <ListFilter color="white" size={16} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        </div>
        <div className="col-span-1 bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[18px] text-[#23272E]">Top Products</p>
            <p className="text-[12px] font-regular text-[#6467F2]">
              All products
            </p>
          </div>
          <div>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <div className="flex justify-between items-center mt-4 p-2 border-b border-[#E0E0E0] ">
              <div>
                <img src={foto} alt="" />
              </div>
              <div>
                <p className="font-medium text-[15px] text-[#23272E]">
                  Apple iPhone 13
                </p>
                <p className="text-[12px] font-regular text-[#8B909A]">
                  Item: #FXZ-4567
                </p>
              </div>
              <div>
                <p className="font-bold text-[15px] text-[#023337]">$999.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 p-2 border-b border-[#E0E0E0] ">
              <div>
                <img src={foto} alt="" />
              </div>
              <div>
                <p className="font-medium text-[15px] text-[#23272E]">
                  Apple iPhone 13
                </p>
                <p className="text-[12px] font-regular text-[#8B909A]">
                  Item: #FXZ-4567
                </p>
              </div>
              <div>
                <p className="font-bold text-[15px] text-[#023337]">$999.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 p-2 border-b border-[#E0E0E0] ">
              <div>
                <img src={foto} alt="" />
              </div>
              <div>
                <p className="font-medium text-[15px] text-[#23272E]">
                  Apple iPhone 13
                </p>
                <p className="text-[12px] font-regular text-[#8B909A]">
                  Item: #FXZ-4567
                </p>
              </div>
              <div>
                <p className="font-bold text-[15px] text-[#023337]">$999.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
