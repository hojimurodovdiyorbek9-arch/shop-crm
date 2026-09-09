export interface DataType {
  key: string;
  no: number;
  orderId: string;
  product: string;
  image: string;
  date: string;
  price: number;
  payment: string;
  status: "Completed" | "Pending" | "Cancelled";
}