import { Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import type { DataType } from "../types/TableType";
import foto from "../../../assets/img/iphone.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function ProductTable() {
  // DATA
  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      orderId: "#ORD-001",
      product: "Apple iPhone 13",
      image: foto,
      date: "Sep 09, 2026",
      price: 999,
      payment: "Credit Card",
      status: "Completed",
    },
    {
      key: "2",
      no: 2,
      orderId: "#ORD-002",
      product: "Samsung S22",
      image: foto,
      date: "Sep 09, 2026",
      price: 799,
      payment: "PayPal",
      status: "Pending",
    },
    {
      key: "3",
      no: 3,
      orderId: "#ORD-003",
      product: "AirPods Pro",
      image: foto,
      date: "Sep 08, 2026",
      price: 249,
      payment: "Credit Card",
      status: "Cancelled",
    },
  ];

  // COLUMNS
  const columns: TableColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "OrderId",
      dataIndex: "orderId",
      key: "orderId",
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
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: DataType["status"]) => (
        <Tag
          color={
            status === "Completed"
              ? "green"
              : status === "Pending"
                ? "orange"
                : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div className="mt-8">
      <Table<DataType>
        rowSelection={{
          type: "checkbox",
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between w-full mt-4">
        {/* Previous */}
        <button className="px-4 py-1 flex items-center gap-2 border border-gray-200 rounded-lg">
          <ArrowLeft size={16} />
          Previous
        </button>

        {/* Numbers */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-lg bg-[#4EA674] text-white">
            1
          </button>

          <button className="w-8 h-8 rounded-lg border">2</button>

          <button className="w-8 h-8 rounded-lg border">3</button>

          <button className="w-8 h-8 rounded-lg border">4</button>

          <button className="w-8 h-8 rounded-lg border">5</button>
        </div>

        {/* Next */}
        <button className="px-4 py-1 flex items-center gap-2 border border-gray-200 rounded-lg">
          Next
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
