import { useState } from "react";
import { Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import type { Order, OrderStatus, ProductTableRow } from "../types/TableType";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OrderService from "../service/Order";
import OrderDetailsModal from "../compponet/ProductDetailes";

const statusColor: Record<OrderStatus, string> = {
  PENDING: "orange",
  PROCESSING: "blue",
  SHIPPED: "cyan",
  DELIVERED: "green",
  CANCELLED: "red",
};

const statusLabel: Record<OrderStatus, string> = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

export default function ProductTable() {
  const { isPending, data } = OrderService();

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const orders: Order[] = data?.data ?? [];
  const meta = data?.meta;

  const tableData: ProductTableRow[] = orders.map((order, index) => ({
    key: order.id,
    no: index + 1,
    orderId: order.orderNumber,
    product: order.items.map((item) => item.productName).join(", "),
    image: order.items[0]?.productImage,
    date: new Date(order.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    price: order.total,
    payment: order.paymentMethod,
    status: order.status,
  }));

  const columns: TableColumnsType<ProductTableRow> = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "OrderId", dataIndex: "orderId", key: "orderId" },
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
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `${price.toLocaleString("uz-UZ")} so'm`,
    },
    { title: "Payment", dataIndex: "payment", key: "payment" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: OrderStatus) => (
        <Tag color={statusColor[status]}>{statusLabel[status]}</Tag>
      ),
    },
  ];

  const handleRowClick = (record: ProductTableRow) => {
    // record.key — bu order.id (yuqorida shunday belgilangan)
    setSelectedOrderId(record.key);
    setModalOpen(true);
  };

  return (
    <div className="mt-8">
      <Table<ProductTableRow>
        rowSelection={{ type: "checkbox" }}
        columns={columns}
        dataSource={tableData}
        loading={isPending}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          className: "cursor-pointer",
        })}
      />

      <div className="flex items-center justify-between w-full mt-4">
        <button className="px-4 py-1 flex items-center gap-2 border border-gray-200 rounded-lg">
          <ArrowLeft size={16} />
          Previous
        </button>

        <div className="flex items-center gap-2">
          {meta &&
            Array.from({ length: meta.totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-lg ${
                    page === meta.page ? "bg-[#4EA674] text-white" : "border"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
        </div>

        <button className="px-4 py-1 flex items-center gap-2 border border-gray-200 rounded-lg">
          Next
          <ArrowRight size={16} />
        </button>
      </div>

      <OrderDetailsModal
        orderId={selectedOrderId}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
