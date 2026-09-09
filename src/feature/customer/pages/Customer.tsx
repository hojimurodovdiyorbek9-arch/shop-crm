import { ArrowUp, Copy, EllipsisVertical, MapPin, Phone } from "lucide-react";

import { useState } from "react";
import SignUpChart from "../../dashboard/compponet/Chart";
import CustomerTable from "../compponet/CustomerTable";
import avatar from "../../../assets/img/avatar2.png";
import facebookIcon from "../../../assets/svg/facebook.svg";
import twitterIcon from "../../../assets/svg/twitter.svg";
import instagramIcon from "../../../assets/svg/instagram.svg";
import whatsappIcon from "../../../assets/svg/whatsapp.svg";
import linkedinIcon from "../../../assets/svg/linkedin.svg";
export default function Customer() {
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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid-cols-1 flex flex-col gap-4">
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
        </div>

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
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="font-bold text-[18px]">Customer Details</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        <div className="col-span-3 bg-white  shadow rounded-[8px]">
          <CustomerTable />
        </div>
        <div className="col-span-1 bg-white p-4 shadow rounded-[8px]">
          <div className="flex items-center gap-4">
            <div>
              <img src={avatar} alt="Customer" />
            </div>
            <div>
              <p className="font-bold text-[18px]">John Doe</p>
              <p className="text-[14px] flex gap-1 items-center text-[#6A717F]">
                john.doe@example.com{" "}
                <span className="cursor-pointer">
                  <Copy size={14} color="blue" />
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-regular text-[14px] text-[#9CA3AF]">
              Customer Info
            </p>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex px-[10px] py-[8px] gap-2 items-center border-[1px] rounded-[4px] border-[#EAF8E7]">
                <Phone size={20} />
                <p className="text-[14px] text-[#6A717F]">+1234567890</p>
              </div>
              <div className="flex px-[10px] py-[8px] gap-2 items-center border-[1px] rounded-[4px] border-[#EAF8E7]">
                <MapPin size={20} />
                <p className="text-[14px] text-[#6A717F]">123 Main St, NY</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-regular text-[14px] text-[#9CA3AF]">
              Social Media
            </p>
            <div className="flex items-center gap-2 mt-3">
              <img
                className="cursor-pointer"
                src={facebookIcon}
                alt="Facebook"
              />
              <img
                className="cursor-pointer"
                src={whatsappIcon}
                alt="WhatsApp"
              />
              <img className="cursor-pointer" src={twitterIcon} alt="Twitter" />

              <img
                className="cursor-pointer"
                src={linkedinIcon}
                alt="LinkedIn"
              />
              <img
                className="cursor-pointer"
                src={instagramIcon}
                alt="Instagram"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="font-regular text-[14px] text-[#9CA3AF]">Activity</p>
            <div className="flex flex-col gap-2 mt-3 px-[10px] py-[8px]  ">
              <p className="text-[14px] font-reguler text-[#4B5563]">
                Registration: 15.01.2025
              </p>
              <p className="text-[14px] font-reguler text-[#4B5563]">
                Last purchase: 10.01.2025
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-regular text-[14px] text-[#9CA3AF]">
              Order overview
            </p>
            <div className="grid grid-cols-3 mt-5 gap-1 ">
              <div className="flex flex-col  rounded-[4px]  items-center py-[12px]  justify-center border-[1px] border-[#D1D5DB]">
                <p className="text-[#023337] text-[18px] font-bold">150</p>
                <p className="text-[12px] text-[#6467F2]">Total order</p>
              </div>
              <div className="flex flex-col  rounded-[4px]  items-center py-[12px]  justify-center border-[1px] border-[#D1D5DB]">
                <p className="text-[#023337] text-[18px] font-bold">140</p>
                <p className="text-[12px] text-[#21C45D]">Completed</p>
              </div>
              <div className="flex flex-col rounded-[4px] items-center py-[12px]  justify-center border-[1px] border-[#D1D5DB]">
                <p className="text-[#023337] text-[18px] font-bold">160</p>
                <p className="text-[12px] text-[#EF4343]">Canceled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
