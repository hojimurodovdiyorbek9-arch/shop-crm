import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import api from "../../service/pages/api";
import type {
  ProductsResponse,
  CreateProductInput,
} from "../types/ProductTypes";

const ProductService = () => {
  const queryClient = useQueryClient();

  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get<ProductsResponse>("/admin/products");
      return res.data;
    },
  });

  const useCreateProduct = () => {
    return useMutation({
      mutationFn: async (input: CreateProductInput) => {
        const res = await api.post("/admin/products", input);
        return res.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    });
  };

  return { isPending, data, useCreateProduct };
};

export default ProductService;
