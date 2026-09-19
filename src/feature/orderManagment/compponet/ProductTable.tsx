import { useEffect, useState } from "react";
import { ConfigProvider, Table, Tag, theme } from "antd";
import type { TableColumnsType } from "antd";
import type { Order, OrderStatus, ProductTableRow } from "../types/TableType";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OrderService from "../service/Order";
import OrderDetailsModal from "../compponet/ProductDetailes";
import { useIsDark } from "../../hook/UseIsDark";
const { darkAlgorithm, defaultAlgorithm } = theme;

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
interface SearchType {
  searchValue: string;
}
export default function ProductTable({ searchValue }: SearchType) {
  const { isPending, data } = OrderService();

  const isDark = useIsDark();

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const [modalOpen, setModalOpen] = useState(false);

  const orders: Order[] = data?.data ?? [];

  const meta = data?.meta;
  const filterSearch = orders.filter((order) => {
    const search = searchValue.toLowerCase().trim();

    if (!search) return true;

    const productMatch = order.items.some((item) =>
      item.productName?.toLowerCase().includes(search),
    );

    const orderMatch = order.orderNumber?.toLowerCase().includes(search);

    const paymentMatch = order.paymentMethod?.toLowerCase().includes(search);

    const statusMatch = order.status?.toLowerCase().includes(search);

    return productMatch || orderMatch || paymentMatch || statusMatch;
  });
  const tableData: ProductTableRow[] = filterSearch.map((order, index) => ({
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

      render: (price: number) => `${price.toLocaleString("uz-UZ")} so'm`,
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

      render: (status: OrderStatus) => (
        <Tag color={statusColor[status]}>{statusLabel[status]}</Tag>
      ),
    },
  ];

  const handleRowClick = (record: ProductTableRow) => {
    setSelectedOrderId(record.key);
    setModalOpen(true);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,

        token: {
          colorPrimary: "#4EA674",

          borderRadius: 8,

          colorBgBase: isDark ? "#111827" : "#FFFFFF",
          colorBgContainer: isDark ? "#1F2937" : "#FFFFFF",
          colorBgElevated: isDark ? "#1F2937" : "#FFFFFF",

          colorText: isDark ? "#F9FAFB" : "#111827",
          colorTextSecondary: isDark ? "#9CA3AF" : "#6B7280",

          colorBorder: isDark ? "#374151" : "#E5E7EB",
          colorBorderSecondary: isDark ? "#374151" : "#E5E7EB",
        },

        components: {
          Table: {
            colorBgContainer: isDark ? "#1F2937" : "#FFFFFF",

            // THEAD
            headerBg: isDark ? "#111827" : "#F9FAFB",
            headerColor: isDark ? "#FFFFFF" : "#111827",

            // BODY
            colorText: isDark ? "#E5E7EB" : "#374151",
            rowHoverBg: isDark ? "#374151" : "#F3F4F6",

            // BORDER
            borderColor: isDark ? "#374151" : "#E5E7EB",
            colorBorderSecondary: isDark ? "#374151" : "#E5E7EB",

            cellPaddingBlock: 14,
            cellPaddingInline: 16,

            rowSelectedBg: isDark ? "#243B30" : "#E8F5EE",
            rowSelectedHoverBg: isDark ? "#2F4A3C" : "#D7EDE0",
            selectionColumnWidth: 48,
          },

          Checkbox: {
            colorPrimary: "#4EA674",
            colorPrimaryHover: "#5DBA83",

            colorBgContainer: isDark ? "#1F2937" : "#FFFFFF",
            colorBorder: isDark ? "#6B7280" : "#D1D5DB",

            borderRadiusSM: 4,
          },

          Pagination: {
            itemBg: isDark ? "#374151" : "#FFFFFF",

            itemActiveBg: "#4EA674",
            itemLinkBg: isDark ? "#374151" : "#FFFFFF",

            colorText: isDark ? "#D1D5DB" : "#374151",
            colorTextDisabled: isDark ? "#6B7280" : "#9CA3AF",

            colorPrimary: "#FFFFFF",
            colorPrimaryHover: "#FFFFFF",

            borderRadius: 8,
          },

          Tag: {
            defaultBg: isDark ? "#374151" : "#F3F4F6",
            defaultColor: isDark ? "#E5E7EB" : "#374151",
          },

          Empty: {
            colorText: isDark ? "#9CA3AF" : "#6B7280",
            colorTextDescription: isDark ? "#9CA3AF" : "#6B7280",
          },

          Spin: {
            colorPrimary: "#4EA674",
          },

          Dropdown: {
            colorBgElevated: isDark ? "#1F2937" : "#FFFFFF",
            colorText: isDark ? "#E5E7EB" : "#374151",
            controlItemBgHover: isDark ? "#374151" : "#F3F4F6",
            controlItemBgActive: "#4EA674",
          },

          Tooltip: {
            colorBgSpotlight: "#374151",
            colorTextLightSolid: "#FFFFFF",
          },
        },
      }}
    >
      <div className="mt-8">
        {/* TABLE */}

        <Table<ProductTableRow>
          rowSelection={{
            type: "checkbox",
          }}
          columns={columns}
          dataSource={tableData}
          loading={isPending}
          pagination={false}
          rowKey="key"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),

            className: "cursor-pointer",
          })}
        />

        {/* PAGINATION */}

        <div className="flex items-center justify-between w-full mt-4">
          {/* PREVIOUS */}

          <button
            className="
              px-4
              py-2

              flex
              items-center
              gap-2

              rounded-lg

              bg-white
              dark:bg-[#374151]

              border
              border-gray-200
              dark:border-[#4B5563]

              text-gray-700
              dark:text-gray-200

              hover:bg-gray-100
              dark:hover:bg-[#4B5563]

              transition
            "
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          {/* PAGES */}

          <div className="flex items-center gap-2">
            {meta &&
              Array.from(
                {
                  length: meta.totalPages,
                },
                (_, i) => i + 1,
              ).map((page) => (
                <button
                  key={page}
                  className={`
                    w-8
                    h-8
                    rounded-lg
                    transition
                    cursor-pointer

                    ${
                      page === meta.page
                        ? "bg-[#4EA674] text-white"
                        : `
                          bg-white
                          dark:bg-[#374151]

                          border
                          border-gray-200
                          dark:border-[#4B5563]

                          text-gray-700
                          dark:text-gray-200

                          hover:bg-gray-100
                          dark:hover:bg-[#4B5563]
                        `
                    }
                  `}
                >
                  {page}
                </button>
              ))}
          </div>

          {/* NEXT */}

          <button
            className="
              px-4
              py-2

              flex
              items-center
              gap-2

              rounded-lg

              bg-white
              dark:bg-[#374151]

              border
              border-gray-200
              dark:border-[#4B5563]

              text-gray-700
              dark:text-gray-200

              hover:bg-gray-100
              dark:hover:bg-[#4B5563]

              transition
            "
          >
            Next
            <ArrowRight size={16} />
          </button>
        </div>

        {/* DETAILS MODAL */}

        <OrderDetailsModal
          orderId={selectedOrderId}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </ConfigProvider>
  );
}
