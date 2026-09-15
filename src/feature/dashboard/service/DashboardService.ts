import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../service/pages/api";
import type {
  SalesByCountryType,
  DashboardStatsType,
} from "../types/ProductType";

const DashboardService = () => {
  const queryClient = useQueryClient();
  const { isPending, data: kpisData } = useQuery<DashboardStatsType>({
    queryKey: ["DashboardService"],
    queryFn: async () => {
      const res = await api.get("/admin/dashboard/kpis");
      return res.data.data;
    },
  });
  const salesByCountr = () => {
    return useQuery<SalesByCountryType[]>({
      queryKey: ["salesByCountr"],
      queryFn: async () => {
        const res = await api.get("/admin/dashboard/sales-by-country");
        return res.data.data;
      },
    });
  };
  const bestSellingProduct = () => {
    return useQuery<SalesByCountryType[]>({
      queryKey: ["bestSellingProduct"],
      queryFn: async () => {
        const res = await api.get("/admin/dashboard/best-sellers");
        console.log("BEST SELLERS RESPONSE:", res.data.data);
        return res.data.data;
      },
    });
  };
  return {
    isPending,
    kpisData,
    salesByCountr,
    bestSellingProduct,
  };
};
export default DashboardService;
