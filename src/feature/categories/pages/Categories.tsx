import {
  ArrowDownUp,
  CirclePlus,
  EllipsisVertical,
  ListFilter,
} from "lucide-react";

import { useState } from "react";
import Search from "antd/es/input/Search";

import CategoriesTable from "../compponet/CategoriesTable";
import CategoriesModal from "../compponet/CategoriesModal";

import CategoriesService from "../service/CategoriesService";
import type { CreateCategoryType } from "../types/CategoriesType";
import { Segmented } from "antd";

export default function Categories() {
  const [open, setOpen] = useState(false);

  const { createCotegories } = CategoriesService();

  const handleCreate = (values: CreateCategoryType) => {
    console.log("FORM VALUES:", values);

    createCotegories.mutate(values, {
      onSuccess: () => {
        console.log("SUCCESS");

        setOpen(false);
      },
    });
  };

  return (
    <div>
      <CategoriesModal
        open={open}
        loading={createCotegories.isPending}
        onClose={() => setOpen(false)}
        onSubmit={handleCreate}
      />

      <div className="flex justify-between items-center mb-4">
        <p className="text-[20px] font-bold">Categories</p>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#4EA674] flex items-center cursor-pointer gap-2 text-[15px] font-bold text-white py-2 px-4 rounded"
          >
            <CirclePlus size={20} />
            Add Category
          </button>

          {/* <div className="flex gap-2 items-center cursor-pointer bg-white border border-[#E5E7EB] py-2 px-4 rounded">
            <p>More Action</p>
            <EllipsisVertical size={20} />
          </div> */}
        </div>
      </div>

      {/* qolgan UI */}

      <div className="bg-white p-4 shadow rounded-[8px] mt-4">
        <div className="flex justify-between items-center">
          {/* <div className="flex bg-[#EAF8E7] items-center p-[4px] rounded-[8px] gap-2">
            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium bg-white">
              All Categories
            </div>

            <div className="py-[6px] px-[12px] cursor-pointer rounded-[8px] text-[15px] font-medium">
              Featured
            </div>
          </div> */}
          <div>
            <Segmented<string>
              options={["All Categories", "Featured"]}
              className="!h-10
    !p-1
    [&_.ant-segmented-group]:!h-full
    [&_.ant-segmented-item]:!h-full
    [&_.ant-segmented-item]:!flex
    [&_.ant-segmented-item]:!items-center
    [&_.ant-segmented-item]:!justify-center"
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2 px-4">
            <Search />

            <div className="flex items-center cursor-pointer bg-white border border-[#E5E7EB] py-2 px-3 rounded">
              <ListFilter size={18} />
            </div>

            <div className="flex items-center cursor-pointer bg-white border border-[#E5E7EB] py-2 px-3 rounded">
              <ArrowDownUp size={18} />
            </div>

            <div className="flex items-center cursor-pointer bg-white border border-[#E5E7EB] py-2 px-3 rounded">
              <EllipsisVertical size={18} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CategoriesTable />
        </div>
      </div>
    </div>
  );
}
