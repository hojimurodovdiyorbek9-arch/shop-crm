import Input from "antd/es/input/Input";
import Search from "antd/es/input/Search";
import {
  CirclePlus,
  Image,
  RefreshCw,
  Save,
  SquarePen,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";
import iphone from "../../../assets/img/iphonebig.png";
import { Checkbox, DatePicker, Radio, Select, Switch, Upload } from "antd";
import iphone1 from "../../../assets/img/iphone1.png";
import iphone2 from "../../../assets/img/iphone2.png";
export default function Products() {
  const [phoneName, setPhoneName] = useState("Iphone 15");
  const [value, setValue] = useState("yes");
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#023337] text-[22px] font-bold">Add New Product</p>
        <div className="flex items-center  gap-5">
          <div>
            <Search placeholder="Search..." />
          </div>
          <div className="flex    items-center gap-3">
            <div>
              <button className="px-4 py-2 bg-[#4EA674] rounded-sm text-[15px] font-bold text-white cursor-pointer">
                Publish Product
              </button>
            </div>
            <div>
              <button className="flex items-center gap-1 px-4 py-2 bg-[#FFFFFF] rounded-sm text-[15px] font-bold text-[#023337] cursor-pointer">
                {" "}
                <Save size={18} />
                Save to draft
              </button>
            </div>
            <div className="px-4 py-2 rounded-sm bg-[#FFFFFF]">
              <CirclePlus color="#6A717F" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 mt-9">
        {/* left */}
        <div className="w-[55%] rounded-sm bg-white  shadow-[0px_1px_3px_0px_#00000033] p-6">
          <p className="text-[22px] font-bold text-[#23272E]">Basic Details</p>
          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="">Product Name</label>
            <Input
              className="h-10"
              placeholder="Phone name"
              value={phoneName}
              onChange={(e) => setPhoneName(e.target.value)}
            />{" "}
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="">Product Description</label>
            <div className="bg-[#F9FAFB] p-3 rounded-sm">
              <p>
                The iPhone 15 delivers cutting-edge performance with the A16
                Bionic chip, an immersive Super Retina XDR display, advanced
                dual-camera system, and exceptional battery life, all encased in
                stunning aerospace-grade aluminum.
              </p>
              <div className="flex justify-end gap-2.5 mt-5">
                <SquarePen className="cursor-pointer" size={20} />
                <WandSparkles className="cursor-pointer" size={20} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[22px] font-bold text-[#23272E]">Pricing</p>
            <div>
              <label htmlFor="">Product Price</label>
              <div className="bg-[#F9FAFB] mt-3 shadow rounded-lg py-[15px] px-3 flex items-center justify-between">
                <input
                  className="border-0 outline-0 bg-transparent w-full"
                  type="text"
                  value="$999.89"
                  readOnly
                />

                <select className="border-0 outline-0 bg-transparent cursor-pointer">
                  <option value="USD"> USD</option>
                  <option value="EUR"> EUR</option>
                  <option value="GBP"> GBP</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mt-5">
                <label
                  htmlFor=""
                  className="text-[#023337] text-[15px] font-bold"
                >
                  Discounted Price{" "}
                  <span className="text-[#6A717F] font-normal">(Optional)</span>
                </label>
                <div className="flex justify-between mt-3 items-center py-2 px-3 bg-[ #F9FAFB] border border-[#E5E7EB] rounded-lg ">
                  <div className="flex gap-2.5 items-center">
                    <p className="py-[7px] px-3 font-bold text-[15px] bg-[#E9F9E6] rounded-sm">
                      $
                    </p>
                    <p className="text-[15px] font-bold ">$99</p>
                  </div>
                  <p className="text-[15px] font-bold ">Sale= $900.89</p>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor=""
                  className="text-[#023337] text-[15px] font-bold"
                >
                  Tax Included
                </label>
                <div className=" gap-2 mt-3.5">
                  <Radio.Group
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <div className="flex flex-col gap-2">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </div>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[#023337] font-bold text-[15px]">Expiration</p>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <DatePicker className="w-full h-[40px]" placeholder="start" />
                </div>
                <div>
                  <DatePicker className="w-full h-[40px]" placeholder="end" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#23272E] text-[22px] font-bold mt-8">
                Inventory
              </p>
              <div className="grid grid-cols-2 my-5 gap-5">
                <div>
                  <label htmlFor="">Stock Quantity</label>
                  <div className="mt-3">
                    <Input className="h-[40px]" value={"Unlimited"} />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Stock Status</label>
                  <div className="mt-3">
                    <Select
                      defaultValue={"In Stock"}
                      className="h-[40px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3.5">
              <Switch />
              <p className="text-[#023337] font-normal text-[15px]">
                Unlimited
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <Checkbox />
              <p className="text-[#6A717F] text-[15px] font-normal">
                Highlight this product in a featured section.
              </p>
            </div>
            <div className="flex justify-end gap-5 items-center mt-8">
              <div>
                <button className="px-3 cursor-pointer py-2.5 font-bold text-[15px] text-[#023337] flex gap-2 items-center bg-[#FFFFFF] rounded-lg border border-[#E5E7EB]">
                  <Save size={18} />
                  Save to draft
                </button>
              </div>
              <div>
                <button className="px-3 cursor-pointer text-[#FFFFFF] font-bold text-[15px] py-2.5 flex gap-2 items-center bg-[#4EA674] rounded-lg border border-[#E5E7EB]">
                  Publish Product
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-[43%] p-6 rounded-sm bg-white shadow-[0px_1px_3px_0px_#00000033]">
          <p className="text-[#23272E] font-bold text-[22px]">
            Upload Product Image
          </p>
          <div className="mt-5">
            <p className="text-[#023337] text-[15px ] font-bold">
              Product Image
            </p>
            <div className="border mt-3 border-[#E5E7EB] rounded-lg flex flex-col p-3 ">
              <div className="flex items-center justify-center">
                <img src={iphone} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <button className="px-3 cursor-pointer py-2 border flex items-center gap-2 rounded-lg border-[#E5E7EB]">
                    <Image size={18} />
                    Browse
                  </button>
                </div>
                <div>
                  <button className="px-3 cursor-pointer py-2 border flex items-center gap-2 rounded-lg border-[#E5E7EB]">
                    <RefreshCw size={18} />
                    Replace
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="border border-[#E5E7EB] rounded-lg">
                <img src={iphone1} alt="" />
              </div>
              <div className="border border-[#E5E7EB] rounded-lg">
                <img src={iphone2} alt="" />
              </div>
            </div>
            <div className="border border-[#E5E7EB] rounded-lg flex items-center justify-center w-full">
              <Upload showUploadList={false} beforeUpload={() => false}>
                <div className="flex flex-col gap-1 text-[#4EA674] items-center justify-center ">
                  <CirclePlus size={18} />
                  <p className="m-0">Add Image</p>
                </div>
              </Upload>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#23272E] font-bold text-[22px]">Categories</p>
            <div className="mt-5">
              <p className="text-[#023337] font-bold text-[15px]">
                Product Categories
              </p>
              <div className="mt-3">
                <Select
                  placeholder="Select your product"
                  className="h-[40px] w-full"
                />
              </div>
              <p className="text-[#023337] font-bold text-[15px] mt-5">
                Product Tag
              </p>
              <div className="mt-3">
                <Select
                  placeholder="Select your product"
                  className="h-[40px] w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[#023337] font-bold text-[15px]">
              Select your color
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="cursor-pointer rounded-lg bg-[#D7EACB] w-12 h-12 border border-[#00000033] "></div>
              <div className="cursor-pointer rounded-lg bg-[#ECD3D6] w-12 h-12 border border-[#00000033] "></div>
              <div className="cursor-pointer rounded-lg bg-[#D5DDE0] w-12 h-12 border border-[#00000033] "></div>
              <div className="cursor-pointer rounded-lg bg-[#ECE7C9] w-12 h-12 border border-[#00000033] "></div>
              <div className="cursor-pointer rounded-lg bg-[#464A4D] w-12 h-12 border border-[#00000033] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
