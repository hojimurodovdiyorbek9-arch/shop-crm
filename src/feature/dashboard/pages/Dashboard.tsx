import { ChevronUp, EllipsisVertical, ListFilter } from "lucide-react";
import { useState } from "react";
import SignUpChart from "../compponet/Chart";
import brgraph from "../../../assets/img/bargraph.png";
import map from "../../../assets/img/bg-map.png";
import us from "../../../assets/img/us 1.png";
import type { ProductType } from "../types/ProductType";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import foto from "../../../assets/img/iphone.png";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
export default function Dashboard() {
  type SearchProps = GetProps<typeof Input.Search>;

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
        <div className=" bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">Total Sales</p>
              <p className="text-gray-500 text-[14px]">Last 7 days</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">$350K</p>
            <p className="text-[#000000] text-[14px]">
              Sales <span className="font-bold text-green-500">+12%</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">
              Previous 7days <span className="text-[#6467F2]">($235)</span>
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-[white] border text-[16px]  border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
              Details
            </button>
          </div>
        </div>

        <div className=" bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">Total Sales</p>
              <p className="text-gray-500 text-[14px]">Last 7 days</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">$350K</p>
            <p className="text-[#000000] text-[14px]">
              Sales <span className="font-bold text-green-500">+12%</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">
              Previous 7days <span className="text-[#6467F2]">($235)</span>
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-[white] border text-[16px]  border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
              Details
            </button>
          </div>
        </div>
        <div className=" bg-white p-4 rounded-[8px] shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">Total Sales</p>
              <p className="text-gray-500 text-[14px]">Last 7 days</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col  pr-[50px]">
              <p>Pending</p>
              <p className="flex text-bold text-[#023337]  whitespace-nowrap size-[22px]">
                509{" "}
                <span className="text-[#4EA674] size-[16px] pl-[10px]">
                  user 204{" "}
                </span>
              </p>
            </div>
            <div className="border-r border-gray-300 h-[50px]"></div>

            <div className="flex flex-col justify-start  pr-[50px] ">
              <p className="text-[400]">Canceled</p>
              <p className="flex text-red-500 text-bold  whitespace-nowrap size-[22px]">
                94{" "}
                <span className="text-red-500 size-[16px] pl-[10px]">+12%</span>
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end mt-4">
            <button className="bg-[white] border text-[16px]  border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
              Details
            </button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 mt-4 gap-4 ">
        <div className="col-span-2 bg-white p-4 rounded-[8px] shadow">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[18px]">Report for this week</p>
            <div className="flex items-center gap-4">
              <div className="flex bg-[#EAF8E7] p-[4px] rounded-[12px] gap-2">
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
              </div>
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
          <div className="flex flex-col  flex gap-4">
            <p>Users per minute</p>
            <div>
              <img src={brgraph} alt="chart" />
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[18px] text-[#23272E]">
                Sales by Country
              </p>
              <p className="font-semibold text-[18px] text-[#23272E]">Sales</p>
            </div>
            <div
              className="min-h-[200px] h-full mx-[-16px] p-[20px] pb-[20px]
             bg-no-repeat bg-cover bg-center
             flex flex-col gap-[26px]"
              style={{ backgroundImage: `url(${map})` }}
            >
              <div className="flex justify-between items-start  ">
                <div className="flex gap-[10px] items-center">
                  <div>
                    <img src={us} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#4B465C]">30k</p>
                    <p className="text-[12px] text-[#8B909A]">US</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="font-bold text-[14px] text-[#28C76F] flex justify-end items-center">
                    {" "}
                    <ChevronUp size={16} color="#28C76F" />
                    25.8%
                  </p>
                  <div className="bg-[#F0F3FF] w-[179px] h-[6px] rounded-[10px]">
                    <div className="bg-[#28C76F] h-[6px] rounded-[10px] w-[25.8%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start ">
                <div className="flex gap-[10px] items-center">
                  <div>
                    <img src={us} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#4B465C]">30k</p>
                    <p className="text-[12px] text-[#8B909A]">US</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="font-bold text-[14px] text-[#28C76F] flex justify-end items-center">
                    {" "}
                    <ChevronUp size={16} color="#28C76F" />
                    25.8%
                  </p>
                  <div className="bg-[#F0F3FF] w-[179px] h-[6px] rounded-[10px]">
                    <div className="bg-[#28C76F] h-[6px] rounded-[10px] w-[25.8%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="flex gap-[10px] items-center">
                  <div>
                    <img src={us} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#4B465C]">30k</p>
                    <p className="text-[12px] text-[#8B909A]">US</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="font-bold text-[14px] text-[#28C76F] flex justify-end items-center">
                    {" "}
                    <ChevronUp size={16} color="#28C76F" />
                    25.8%
                  </p>
                  <div className="bg-[#F0F3FF] w-[179px] h-[6px] rounded-[10px]">
                    <div className="bg-[#28C76F] h-[6px] rounded-[10px] w-[25.8%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col">
              <div className="flex items-end">
                <button className="bg-[white]  w-full  border text-[16px]  border-[#6467F2] text-[#6467F2] py-1 px-5 rounded-[50px] hover:bg-[#5a5dd8] hover:text-white">
                  View Insight
                </button>
              </div>
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
