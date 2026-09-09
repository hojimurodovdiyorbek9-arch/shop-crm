export interface ProductType {
  key: string;
  product: string;
  image: string;
  totalOrder: number;
  status: "Completed" | "Pending" | "Cancelled";
  price: number;
}