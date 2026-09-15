import { Table, Tag, Image } from "antd";
import type { TableColumnsType } from "antd";
import type { Product, ProductTableRowData } from "../types/ProductTypes";
import ProductService from "../service/ProductService";

export default function ProductTable() {
  const { isPending, data } = ProductService();

  const products: Product[] = data?.data ?? [];

  const tableData: ProductTableRowData[] = products.map((product, index) => ({
    key: product.id,
    no: index + 1,
    name: product.name,
    image:
      product.images.find((img) => img.isMain)?.url ??
      product.images[0]?.url ??
      "",
    brand: product.brand?.name ?? "-",
    category: product.category?.name ?? "-",
    price: product.price,
    oldPrice: product.oldPrice,
    stock: product.availableStock,
    isActive: product.isActive,
  }));

  const columns: TableColumnsType<ProductTableRowData> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: 60,
    },
    {
      title: "Rasm",
      dataIndex: "image",
      key: "image",
      render: (src: string) => (
        <Image
          src={src}
          alt=""
          width={48}
          height={48}
          className="object-contain rounded-lg"
        />
      ),
    },
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <span className="font-medium">{name}</span>,
    },
    {
      title: "Brend",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Kategoriya",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Narx",
      dataIndex: "price",
      key: "price",
      render: (price: number, record) => (
        <div className="flex flex-col">
          <span>{price.toLocaleString("uz-UZ")} so'm</span>
          {record.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {record.oldPrice.toLocaleString("uz-UZ")} so'm
            </span>
          )}
        </div>
      ),
    },
    {
      title: "Ombordagi soni",
      dataIndex: "stock",
      key: "stock",
      render: (stock: number) => (
        <Tag color={stock > 0 ? "green" : "red"}>{stock} dona</Tag>
      ),
    },
    {
      title: "Holati",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive: boolean) => (
        <Tag color={isActive ? "green" : "default"}>
          {isActive ? "Faol" : "Nofaol"}
        </Tag>
      ),
    },
  ];

  return (
    <div className="mt-8">
      <Table<ProductTableRowData>
        columns={columns}
        dataSource={tableData}
        loading={isPending}
        rowKey="key"
        pagination={{ pageSize: 20 }}
      />
    </div>
  );
}
