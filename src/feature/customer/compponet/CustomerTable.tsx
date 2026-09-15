import { Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import CustomerService from "../service/CustomerServise";
import type { CustomerType } from "../types/CustomerType";

interface Props {
  selectedCustomerId: string | undefined;
  onSelectCustomer: (id: string) => void;
}

export default function CustomerTable({
  selectedCustomerId,
  onSelectCustomer,
}: Props) {
  const { data, isLoading } = CustomerService(selectedCustomerId);

  console.log(data);

  const customers: CustomerType[] = Array.isArray(data?.data) ? data.data : [];

  const columns: TableColumnsType<CustomerType> = [
    {
      title: "Customer Id",
      dataIndex: "id",
      key: "id",
      render: (id: string) => (
        <span className="text-[#6A717F]">{id.slice(0, 8)}...</span>
      ),
    },

    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.avatar || "/avatar.png"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <p className="font-medium text-[#111827]">
              {record.firstName} {record.lastName}
            </p>

            <p className="text-sm text-[#6A717F]">{record.email}</p>
          </div>
        </div>
      ),
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Order Count",
      key: "orderCount",
      render: (_, record) => <span>{record._count.orders}</span>,
    },

    {
      title: "Total Spend",
      dataIndex: "totalSpent",
      key: "totalSpent",
      render: (price: number) => (
        <span className="font-medium">${price.toFixed(2)}</span>
      ),
    },

    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive: boolean) => (
        <Tag color={isActive ? "green" : "red"}>
          {isActive ? "Active" : "Inactive"}
        </Tag>
      ),
    },
  ];

  return (
    <Table<CustomerType>
      rowKey={(record) => record.id}
      loading={isLoading}
      rowSelection={{
        type: "checkbox",
      }}
      onRow={(record) => ({
        onClick: () => {
          onSelectCustomer(record.id);
        },
        className: "cursor-pointer",
      })}
      columns={columns}
      dataSource={customers}
      pagination={{
        pageSize: 6,
      }}
    />
  );
}
