import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";

import foto from "../../../assets/img/iphone.png";

import type { ProductType } from "../types/CategoriesType";

export default function CategoriesTable() {
  const data: ProductType[] = [
    {
      key: "1",
      no: 1,
      product: "Apple iPhone 13",
      image: foto,
      date: "Sep 09, 2026",
    },
    {
      key: "2",
      no: 2,
      product: "Samsung Galaxy S22",
      image: foto,
      date: "Sep 08, 2026",
    },
    {
      key: "3",
      no: 3,
      product: "AirPods Pro",
      image: foto,
      date: "Sep 07, 2026",
    },
    {
      key: "4",
      no: 4,
      product: "MacBook Air M2",
      image: foto,
      date: "Sep 06, 2026",
    },
    {
      key: "5",
      no: 5,
      product: "iPad Pro",
      image: foto,
      date: "Sep 05, 2026",
    },
  ];

  const columns: TableColumnsType<ProductType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            alt={record.product}
            className="w-10 h-10 object-contain rounded-lg"
          />

          <span className="font-medium">{record.product}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex items-center gap-3">
          <button className=" font-medium cursor-pointer">
            <SquarePen size={18} className="text-[#6A717F] hover:text-blue" />
          </button>

          <button className=" font-medium cursor-pointer">
            <Trash size={18} className="text-[#6A717F] hover:text-red" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table<ProductType>
      rowSelection={{
        type: "checkbox",
      }}
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 5,
        position: ["bottomCenter"],
      }}
    />
  );
}
