import { ArrowDownUp, ChevronRight, CirclePlus, EllipsisVertical, ListFilter } from "lucide-react";
import product from "../../../assets/img/product.png";
import ProductTable from "../../orderManagment/compponet/ProductTable";
import Search from "antd/es/input/Search";
import CategoriesTable from "../compponet/CategoriesTable";
export default function Categories() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-[20px] font-bold">Order List</p>
        <div className="flex gap-4 items-center">
          <div>
            <button className="bg-[#4EA674] flex items-center cursor-pointer gap-2 text-[15px] font-bold text-white py-2 px-4 rounded">
              <CirclePlus size={20} />
              Add Product
            </button>
          </div>
          <div className="flex gap-2 items-center cursor-pointer bg-[#FFFFFF] border border-[#E5E7EB] py-2 px-4 rounded">
            <p>More Action</p>
            <EllipsisVertical size={20} />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-full grid grid-cols-4 grid-column-2 gap-4">
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="flex gap-2 items-center p-[12px] bg-[#FFFFFF] shadow rounded">
            <div>
              <img src={product} alt="" />
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full cursor-pointer"><ChevronRight /></div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] p-4 shadow rounded-[8px] mt-4">
        <div className="flex justify-between items-center ">
          <div className="flex bg-[#EAF8E7] items-center p-[4px] rounded-[8px] gap-2 ">
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium bg-[#FFFFFF]">
              All order{" "}
              <span className="text-[14px] text-[#4EA674]">(240)</span>
            </div>
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium ">
              Featured Products{" "}
            </div>
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium ">
              On Sale{" "}
            </div>
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium ">
              Out of Stock{" "}
            </div>
          </div>
          <div className="flex gap-2 items-center   py-2 px-4 ">
            <div>
              <Search />
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
          <CategoriesTable/>
        </div>
      </div>
    </div>
  );
}
