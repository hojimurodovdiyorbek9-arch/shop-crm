import Search from "antd/es/input/Search";
import {
  ArrowDownUp,
  ArrowUp,
  CirclePlus,
  EllipseIcon,
  EllipsisVertical,
  ListFilter,
} from "lucide-react";
import { Segmented, Table, Tag } from "antd";

import ProductTable from "../compponet/ProductTable";

export default function OrderManagment() {
  // const data: DataType[] = [
  //   {
  //     key: "1",
  //     no: 1,
  //     orderId: "#ORD-001",
  //     product: "Apple iPhone 13",
  //     image: "/iphone13.png",
  //     date: "Sep 09, 2026",
  //     price: 999,
  //     payment: "Credit Card",
  //     status: "Completed",
  //   },
  // ];
  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <p className="text-[20px] font-bold">Order List</p>
        {/* <div className="flex gap-4 items-center">
          <div>
            <button className="bg-[#4EA674] flex items-center cursor-pointer gap-2 text-[15px] font-bold text-white py-2 px-4 rounded">
              <CirclePlus size={20} />
              Add Order
            </button>
          </div>
          <div className="flex gap-2 items-center cursor-pointer bg-[#FFFFFF] border border-[#E5E7EB] py-2 px-4 rounded">
            <p>More Action</p>
            <EllipsisVertical size={20} />
          </div>
        </div> */}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className=" bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">Total Sales</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">1,240</p>
            <p className=" text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
              <ArrowUp size={14} />
              12%
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">Last 7 days</p>
          </div>
        </div>
        <div className=" bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">New Orders</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">1,240</p>
            <p className=" text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
              <ArrowUp size={14} />
              12%
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">Last 7 days</p>
          </div>
        </div>
        <div className=" bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">Completed Orders</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">1,240</p>
            <p className=" text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
              <ArrowUp size={14} />
              12%
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">Last 7 days</p>
          </div>
        </div>
        <div className=" bg-white p-4 shadow rounded-[8px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold text-[18px]">Canceled Orders</p>
            </div>
            <div>
              <EllipsisVertical size={20} color="gray" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">1,240</p>
            <p className=" text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
              <ArrowUp size={14} />
              12%
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">Last 7 days</p>
          </div>
        </div>
      </div> */}
      <div className="bg-[#FFFFFF] p-4 shadow rounded-[8px] mt-4">
        <div className="flex justify-between items-center ">
          {/* <div className="flex bg-[#EAF8E7] items-center p-[4px] rounded-[8px] gap-2 ">
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium bg-[#FFFFFF]">
              All order{" "}
              <span className="text-[14px] text-[#4EA674]">(240)</span>
            </div>
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium ">
              Completed{" "}
            </div>
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium ">
              Pending{" "}
            </div>
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium ">
              Canceled{" "}
            </div>
          </div> */}
          <div className="flex items-center">
            <Segmented<string>
              options={["All order", "Completed", "Pending", "Canceled"]}
              className="
    !h-10
    !p-1
    [&_.ant-segmented-group]:!h-full
    [&_.ant-segmented-item]:!h-full
    [&_.ant-segmented-item]:!flex
    [&_.ant-segmented-item]:!items-center
    [&_.ant-segmented-item]:!justify-center
  "
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="flex gap-2 items-center   py-2 px-4 ">
            <div>
              <Search placeholder="Search order" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer bg-[#FFFFFF] border border-[#E5E7EB] py-2 px-3 rounded">
              <ListFilter size={18} />
            </div>
            <div className="flex gap-2 items-center cursor-pointer bg-[#FFFFFF] border border-[#E5E7EB] py-2 px-3 rounded">
              <ArrowDownUp size={18} />
            </div>
            <div className="flex gap-2 items-center cursor-pointer bg-[#FFFFFF] border border-[#E5E7EB] py-2 px-3 rounded">
              <EllipsisVertical size={18} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}
