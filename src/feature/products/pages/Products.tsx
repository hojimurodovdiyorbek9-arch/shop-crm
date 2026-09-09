import Input from "antd/es/input/Input";
import Search from "antd/es/input/Search";
import TextArea from "antd/es/input/TextArea";
import { CirclePlus, Save, SquarePen, WandSparkles } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [phoneName, setPhoneName] = useState("Iphone 15");

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
              
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-[43%] rounded-sm bg-white shadow-[0px_1px_3px_0px_#00000033]">
          <p>Basic Details</p>
        </div>
      </div>
    </div>
  );
}
