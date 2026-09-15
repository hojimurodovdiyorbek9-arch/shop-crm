import { useState } from "react";
import {
  Modal,
  Descriptions,
  Tag,
  Table,
  Spin,
  Select,
  Input,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import OrderService from "../service/Order";
import type { OrderItem, OrderStatus } from "../types/TableType";

interface Props {
  orderId: string | null;
  open: boolean;
  onClose: () => void;
}

const statusColor: Record<OrderStatus, string> = {
  PENDING: "orange",
  PROCESSING: "blue",
  SHIPPED: "cyan",
  DELIVERED: "green",
  CANCELLED: "red",
};

const statusOptions: { value: OrderStatus; label: string }[] = [
  { value: "PENDING", label: "Pending" },
  { value: "PROCESSING", label: "Processing" },
  { value: "SHIPPED", label: "Shipped" },
  { value: "DELIVERED", label: "Delivered" },
  { value: "CANCELLED", label: "Cancelled" },
];

const itemColumns: ColumnsType<OrderItem> = [
  {
    title: "Rasm",
    dataIndex: "productImage",
    key: "productImage",
    render: (src: string) => (
      <img src={src} alt="" className="w-12 h-12 object-contain rounded" />
    ),
  },
  { title: "Mahsulot", dataIndex: "productName", key: "productName" },
  { title: "SKU", dataIndex: "productSku", key: "productSku" },
  {
    title: "Narx",
    dataIndex: "price",
    key: "price",
    render: (price: number) => `${price.toLocaleString("uz-UZ")} so'm`,
  },
  { title: "Soni", dataIndex: "quantity", key: "quantity" },
  {
    title: "Jami",
    dataIndex: "total",
    key: "total",
    render: (total: number) => `${total.toLocaleString("uz-UZ")} so'm`,
  },
];

export default function OrderDetailsModal({ orderId, open, onClose }: Props) {
  const { useProductDetails, useUpdateOrderStatus } = OrderService();
  const { isPending, data } = useProductDetails(orderId ?? "");
  const { mutate: updateStatus, isPending: isUpdating } =
    useUpdateOrderStatus();

  const [pendingStatus, setPendingStatus] = useState<OrderStatus | null>(null);
  const [comment, setComment] = useState("");

  const order = data?.data;

  const handleSelectStatus = (newStatus: OrderStatus) => {
    setPendingStatus(newStatus);
  };

  const handleConfirm = () => {
    if (!orderId || !pendingStatus) return;
    updateStatus(
      { orderId, status: pendingStatus, comment },
      {
        onSuccess: () => {
          message.success("Status muvaffaqiyatli yangilandi");
          setPendingStatus(null);
          setComment("");
        },
        onError: () => {
          message.error("Statusni yangilashda xatolik yuz berdi");
        },
      },
    );
  };

  return (
    <Modal
      title={order ? `Buyurtma: ${order.orderNumber}` : "Buyurtma tafsilotlari"}
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      {isPending || !order ? (
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <Descriptions column={2} bordered size="small">
            <Descriptions.Item label="Buyurtma raqami">
              {order.orderNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Holat">
              <Select<OrderStatus>
                value={pendingStatus ?? order.status}
                onChange={handleSelectStatus}
                loading={isUpdating}
                disabled={isUpdating}
                style={{ width: 160 }}
                options={statusOptions.map((opt) => ({
                  value: opt.value,
                  label: (
                    <Tag color={statusColor[opt.value]} style={{ margin: 0 }}>
                      {opt.label}
                    </Tag>
                  ),
                }))}
              />
            </Descriptions.Item>
            <Descriptions.Item label="To'lov usuli">
              {order.paymentMethod}
            </Descriptions.Item>
            <Descriptions.Item label="To'lov holati">
              {order.paymentStatus}
            </Descriptions.Item>
            <Descriptions.Item label="Sana">
              {new Date(order.createdAt).toLocaleString("uz-UZ")}
            </Descriptions.Item>
            <Descriptions.Item label="Jami summa">
              {order.total.toLocaleString("uz-UZ")} so'm
            </Descriptions.Item>
          </Descriptions>

          {/* Status o'zgarganda izoh va tasdiqlash */}
          {pendingStatus && pendingStatus !== order.status && (
            <div className="flex flex-col gap-2 border border-gray-200 rounded-lg p-3 bg-gray-50">
              <span className="text-sm font-medium">
                Statusni{" "}
                <Tag color={statusColor[pendingStatus]}>{pendingStatus}</Tag> ga
                o'zgartirish
              </span>
              <Input.TextArea
                placeholder="Izoh (ixtiyoriy)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={2}
              />
              <div className="flex gap-2 justify-end">
                <button
                  className="px-3 py-1 text-sm border rounded-lg"
                  onClick={() => {
                    setPendingStatus(null);
                    setComment("");
                  }}
                  disabled={isUpdating}
                >
                  Bekor qilish
                </button>
                <button
                  className="px-3 py-1 text-sm bg-[#4EA674] text-white rounded-lg"
                  onClick={handleConfirm}
                  disabled={isUpdating}
                >
                  {isUpdating ? "Saqlanmoqda..." : "Tasdiqlash"}
                </button>
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-2">Mijoz</h3>
            <Descriptions column={2} bordered size="small">
              <Descriptions.Item label="Ism">
                {order.customerSnapshot.firstName}{" "}
                {order.customerSnapshot.lastName}
              </Descriptions.Item>
              <Descriptions.Item label="Telefon">
                {order.customerSnapshot.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={2}>
                {order.customerSnapshot.email}
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Yetkazib berish manzili</h3>
            <Descriptions column={2} bordered size="small">
              <Descriptions.Item label="Shahar">
                {order.addressSnapshot.city}
              </Descriptions.Item>
              <Descriptions.Item label="Ko'cha">
                {order.addressSnapshot.street}
              </Descriptions.Item>
              <Descriptions.Item label="Uy">
                {order.addressSnapshot.house}
              </Descriptions.Item>
              <Descriptions.Item label="Nomi">
                {order.addressSnapshot.title}
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Buyurtma tarixi</h3>
            <div className="flex flex-col gap-2">
              {order.statusHistory.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between text-sm border-b pb-1"
                >
                  <Tag color={statusColor[entry.status]}>{entry.status}</Tag>
                  <span className="text-gray-500">{entry.comment}</span>
                  <span className="text-gray-400">
                    {new Date(entry.createdAt).toLocaleString("uz-UZ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Mahsulotlar</h3>
            <Table
              columns={itemColumns}
              dataSource={order.items}
              rowKey="id"
              pagination={false}
              size="small"
            />
          </div>
        </div>
      )}
    </Modal>
  );
}
