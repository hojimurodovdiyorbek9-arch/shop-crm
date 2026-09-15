import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { SquarePen, Trash } from "lucide-react";

import foto from "../../../assets/img/iphone.png";

import type { CategoryType } from "../types/CategoriesType";
import CategoriesService from "../service/CategoriesService";

export default function CategoriesTable() {
  const { isLoading, data, deleteCategory,editCategories } = CategoriesService();

  const categories: CategoryType[] = Array.isArray(data)
    ? data
    : (data?.data ?? []);

  const columns: TableColumnsType<CategoryType> = [
    {
      title: "No",
      key: "no",
      render: (_, __, index) => index + 1,
    },

    {
      title: "Category",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image ?? foto}
            alt={record.name}
            className="w-10 h-10 object-contain rounded-lg"
          />

          <span className="font-medium">{record.name}</span>
        </div>
      ),
    },

    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },

    {
      title: "Order",
      key: "sortOrder",
      render: (_, record) => <span>{record.sortOrder ?? 0}</span>,
    },

    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) => (
        <span className={isActive ? "text-green-500" : "text-red-500"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <button className="cursor-pointer">
            <SquarePen
              size={18}
              className="text-[#6A717F] hover:text-blue-500"
            />
          </button>

          <button
            disabled={
              deleteCategory.isPending && deleteCategory.variables === record.id
            }
            onClick={() => deleteCategory.mutate(record.id)}
            className="cursor-pointer disabled:cursor-not-allowed"
          >
            {deleteCategory.isPending &&
            deleteCategory.variables === record.id ? (
              <span className="inline-block w-[18px] h-[18px] border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
            ) : (
              <Trash size={18} className="text-[#6A717F] hover:text-red-500" />
            )}
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table<CategoryType>
      loading={isLoading}
      rowKey="id"
      rowSelection={{
        type: "checkbox",
      }}
      columns={columns}
      dataSource={categories}
      pagination={{
        pageSize: 5,
        placement: ["bottomCenter"],
      }}
    />
  );
}
