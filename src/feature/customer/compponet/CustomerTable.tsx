import { Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import { MessageCircleMore, Trash } from "lucide-react";

interface CustomerType {
  key: string;
  customerId: string;
  name: string;
  phone: string;
  orderCount: number;
  totalSpend: number;
  status: "Active" | "Inactive";
}

export default function CustomerTable() {
  const data: CustomerType[] = [
    {
      key: "1",
      customerId: "#CUS-001",
      name: "Ali Valiyev",
      phone: "+998 90 123 45 67",
      orderCount: 24,
      totalSpend: 2450,
      status: "Active",
    },
    {
      key: "2",
      customerId: "#CUS-002",
      name: "Diyorbek Hojimurodov",
      phone: "+998 91 234 56 78",
      orderCount: 18,
      totalSpend: 1890,
      status: "Active",
    },
    {
      key: "3",
      customerId: "#CUS-003",
      name: "Sardor Karimov",
      phone: "+998 93 345 67 89",
      orderCount: 9,
      totalSpend: 920,
      status: "Inactive",
    },
    {
      key: "4",
      customerId: "#CUS-004",
      name: "Azizbek Rahimov",
      phone: "+998 95 456 78 90",
      orderCount: 31,
      totalSpend: 3560,
      status: "Active",
    },
    {
      key: "5",
      customerId: "#CUS-005",
      name: "Azizbek Rahimov",
      phone: "+998 95 456 78 90",
      orderCount: 31,
      totalSpend: 3560,
      status: "Active",
    },
    {
      key: "6",
      customerId: "#CUS-006",
      name: "Azizbek Rahimov",
      phone: "+998 95 456 78 90",
      orderCount: 31,
      totalSpend: 3560,
      status: "Active",
    },
    {
      key: "7",
      customerId: "#CUS-007",
      name: "Azizbek Rahimov",
      phone: "+998 95 456 78 90",
      orderCount: 31,
      totalSpend: 3560,
      status: "Active",
    },
    
  ];

  const columns: TableColumnsType<CustomerType> = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => (
        <span className="font-medium text-[#111827]">{name}</span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Order Count",
      dataIndex: "orderCount",
      key: "orderCount",
    },
    {
      title: "Total Spend",
      dataIndex: "totalSpend",
      key: "totalSpend",
      render: (price: number) => (
        <span className="font-medium">${price.toFixed(2)}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: CustomerType["status"]) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex items-center gap-3">
          <button className="text-[#4EA674] font-medium cursor-pointer">
            <MessageCircleMore size={18} />
          </button>

          <button className="text-red-500 font-medium cursor-pointer">
            <Trash size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table<CustomerType>
      rowSelection={{
        type: "checkbox",
      }}
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 6,
      }}
    />
  );
}
