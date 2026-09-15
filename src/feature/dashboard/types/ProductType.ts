export interface ProductType {
  key: string;
  product: string;
  image: string;
  totalOrder: number;
  status: "Completed" | "Pending" | "Cancelled";
  price: number;
}
export interface DashboardStatsType {
  label: string;

  range: {
    from: string;
    to: string;
  };

  previousRange: {
    from: string;
    to: string;
  };

  totalSales: {
    value: number;
    previousValue: number;
    changePercent: number;
  };

  totalOrders: {
    value: number;
    previousValue: number;
    changePercent: number;
  };

  pending: {
    orders: number;
    users: number;
  };

  cancelled: {
    value: number;
    previousValue: number;
    changePercent: number;
  };
}
export interface SalesByRegionType {
  name: string;
  code: string;
  sales: number;
  previousSales: number;
  changePercent: number;
  share: number;
}

export interface SalesByRegionResponseType {
  success: boolean;
  data: SalesByRegionType[];
}
export interface SalesByCountryType {
  name: string;
  code: string;
  sales: number;
  previousSales: number;
  changePercent: number;
  share: number;
}
