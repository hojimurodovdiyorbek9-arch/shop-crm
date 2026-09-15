import { ArrowUp, Copy, EllipsisVertical, MapPin, Phone } from "lucide-react";

import { useState } from "react";
import { Switch } from "antd";

import SignUpChart from "../../dashboard/compponet/Chart";
import CustomerTable from "../compponet/CustomerTable";

import avatar from "../../../assets/img/avatar2.png";
import facebookIcon from "../../../assets/svg/facebook.svg";
import twitterIcon from "../../../assets/svg/twitter.svg";
import instagramIcon from "../../../assets/svg/instagram.svg";
import whatsappIcon from "../../../assets/svg/whatsapp.svg";
import linkedinIcon from "../../../assets/svg/linkedin.svg";

import CustomerService from "../service/CustomerServise";

export default function Customer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thisWeek, setThisWeek] = useState(true);
  const [activeChart, setActiveChart] = useState("customers");

  const [selectedCustomerId, setSelectedCustomerId] = useState<
    string | undefined
  >();

  const { customerData, isCustomerLoading, changeCustomerStatus } =
    CustomerService(selectedCustomerId);

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
    <div>
      {/* =========================================
          TOP SECTION
      ========================================= */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* =========================================
            STAT CARDS
        ========================================= */}

        <div className="grid-cols-1 flex flex-col gap-4">
          {/* CARD 1 */}
          <div className="bg-white p-4 shadow rounded-[8px]">
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

              <p className="text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
                <ArrowUp size={14} />
                12%
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[14px]">Last 7 days</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-4 shadow rounded-[8px]">
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

              <p className="text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
                <ArrowUp size={14} />
                12%
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[14px]">Last 7 days</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-4 shadow rounded-[8px]">
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

              <p className="text-[14px] font-medium flex gap-1 items-center text-[#21C45D]">
                <ArrowUp size={14} />
                12%
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[14px]">Last 7 days</p>
            </div>
          </div>
        </div>

        {/* =========================================
            REPORT
        ========================================= */}

        <div className="col-span-2 bg-white p-4 rounded-[8px] shadow">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[18px]">Report for this week</p>

            <div className="flex items-center gap-4">
              <div className="flex bg-[#EAF8E7] p-[4px] rounded-[12px] gap-2">
                <button
                  className={`text-[12px] text-bold px-[12px] py-[8px] rounded-[8px] ${
                    thisWeek ? "bg-[#FFFFFF] text-[#4EA674]" : "text-[#6A717F]"
                  }`}
                  onClick={() => setThisWeek(true)}
                >
                  This week
                </button>

                <button
                  className={`text-[12px] text-bold px-[12px] py-[8px] rounded-[8px] ${
                    !thisWeek ? "bg-[#FFFFFF] text-[#4EA674]" : "text-[#6A717F]"
                  }`}
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

          {/* STATS */}

          <div className="grid grid-cols-5 gap-4 mb-4 mx-[4px]">
            {stats.map((item) => (
              <div
                key={item.key}
                onClick={() => setActiveChart(item.key)}
                className={`flex flex-col items-start p-4 cursor-pointer border-b-[2px] transition-all ${
                  activeChart === item.key
                    ? "bg-[linear-gradient(180deg,rgba(78,166,116,0)_0%,rgba(78,166,116,0.04)_100%)] border-b-[#4EA674]"
                    : "border-b-[#EAF8E7]"
                }`}
              >
                <p className="font-bold text-[24px]">{item.value}</p>

                <p className="text-[13px] text-[#8B909A] font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* CHART */}

          <div>
            <SignUpChart />
          </div>
        </div>
      </div>

      {/* =========================================
          CUSTOMER DETAILS TITLE
      ========================================= */}

      <div className="flex justify-between items-center mt-8">
        <p className="font-bold text-[18px]">Customer Details</p>
      </div>

      {/* =========================================
          CUSTOMER TABLE
      ========================================= */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4 items-start">
        <div className="col-span-3 bg-white w-full overflow-x-auto shadow rounded-[8px]">
          <CustomerTable
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={(id) => {
              setSelectedCustomerId(id);
              setIsModalOpen(true);
            }}
          />
        </div>

        {/* =========================================
            CUSTOMER MODAL
        ========================================= */}

        {isModalOpen && customerData && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="w-full max-w-[500px] max-h-[90vh] overflow-y-auto scrollbar-hide bg-white rounded-xl shadow-xl p-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* =====================================
                  HEADER
              ===================================== */}

              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[20px]">Customer Details</p>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-black text-[24px]"
                >
                  ×
                </button>
              </div>

              {/* =====================================
                  CUSTOMER
              ===================================== */}

              <div className="flex items-center gap-4">
                <div className="w-14 h-14">
                  <img
                    src={customerData?.data?.avatar || avatar}
                    alt="Customer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-bold text-[18px]">
                    {customerData?.data?.firstName}{" "}
                    {customerData?.data?.lastName}
                  </p>

                  <p className="text-[14px] flex gap-1 items-center text-[#6A717F]">
                    {customerData?.data?.email}

                    <span className="cursor-pointer">
                      <Copy size={14} color="blue" />
                    </span>
                  </p>
                </div>
              </div>

              {/* =====================================
                  CUSTOMER INFO
              ===================================== */}

              <div className="mt-5">
                <p className="font-medium text-[14px] text-[#9CA3AF]">
                  Customer Info
                </p>

                <div className="flex flex-col gap-2 mt-3">
                  {/* PHONE */}

                  <div className="flex px-[10px] py-[10px] gap-2 items-center border rounded-[6px] border-[#EAF8E7]">
                    <Phone size={20} />

                    <p className="text-[14px] text-[#6A717F]">
                      {customerData?.data?.phone || "No phone"}
                    </p>
                  </div>

                  {/* ADDRESS */}

                  <div className="flex px-[10px] py-[10px] gap-2 items-center border rounded-[6px] border-[#EAF8E7]">
                    <MapPin size={20} />

                    <p className="text-[14px] text-[#6A717F]">
                      {customerData?.data?.address || "No address"}
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================
                  STATUS
              ===================================== */}

              <div className="mt-5">
                <p className="font-medium text-[14px] text-[#9CA3AF]">Status</p>

                <div className="flex items-center justify-between mt-3 px-[10px] py-[10px] border rounded-[6px] border-[#EAF8E7]">
                  <div>
                    <p className="text-[14px] font-medium text-[#4B5563]">
                      Customer status
                    </p>

                    <p
                      className={`text-[12px] ${
                        customerData?.data?.isActive
                          ? "text-[#21C45D]"
                          : "text-[#EF4343]"
                      }`}
                    >
                      {customerData?.data?.isActive ? "Active" : "Inactive"}
                    </p>
                  </div>

                  <Switch
                    checked={customerData?.data?.isActive}
                    loading={changeCustomerStatus.isPending}
                    onChange={(checked) => {
                      if (!selectedCustomerId) return;

                      changeCustomerStatus.mutate({
                        id: selectedCustomerId,
                        isActive: checked,
                      });
                    }}
                  />
                </div>
              </div>

              {/* =====================================
                  SOCIAL MEDIA
              ===================================== */}

              <div className="mt-5">
                <p className="font-medium text-[14px] text-[#9CA3AF]">
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

                  <img
                    className="cursor-pointer"
                    src={twitterIcon}
                    alt="Twitter"
                  />

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

              {/* =====================================
                  ACTIVITY
              ===================================== */}

              <div className="mt-5">
                <p className="font-medium text-[14px] text-[#9CA3AF]">
                  Activity
                </p>

                <div className="flex flex-col gap-2 mt-3 px-[10px] py-[8px]">
                  <p className="text-[14px] text-[#4B5563]">
                    Registration: 15.01.2025
                  </p>

                  <p className="text-[14px] text-[#4B5563]">
                    Last purchase: 10.01.2025
                  </p>
                </div>
              </div>

              {/* =====================================
                  ORDER OVERVIEW
              ===================================== */}

              <div className="mt-5">
                <p className="font-medium text-[14px] text-[#9CA3AF]">
                  Order overview
                </p>

                <div className="grid grid-cols-3 mt-4 gap-2">
                  {/* TOTAL */}

                  <div className="flex flex-col rounded-[6px] items-center py-3 justify-center border">
                    <p className="text-[#023337] text-[18px] font-bold">150</p>

                    <p className="text-[12px] text-[#6467F2]">Total order</p>
                  </div>

                  {/* COMPLETED */}

                  <div className="flex flex-col rounded-[6px] items-center py-3 justify-center border">
                    <p className="text-[#023337] text-[18px] font-bold">140</p>

                    <p className="text-[12px] text-[#21C45D]">Completed</p>
                  </div>

                  {/* CANCELED */}

                  <div className="flex flex-col rounded-[6px] items-center py-3 justify-center border">
                    <p className="text-[#023337] text-[18px] font-bold">10</p>

                    <p className="text-[12px] text-[#EF4343]">Canceled</p>
                  </div>
                </div>
              </div>

              {/* =====================================
                  CLOSE
              ===================================== */}

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-6 py-2.5 rounded-lg bg-[#4EA674] text-white font-medium hover:bg-[#3d8f60] transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
