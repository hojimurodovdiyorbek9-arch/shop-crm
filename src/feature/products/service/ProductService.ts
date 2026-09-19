import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import api from "../../service/pages/api";

import type {
  ProductsResponse,
  CreateProductInput,
  UpdateProductInput,
} from "../types/ProductTypes";

const ProductService = () => {
  const queryClient = useQueryClient();

  // =========================
  // GET ALL PRODUCTS
  // =========================

  const { isPending, data } = useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      const res = await api.get<ProductsResponse>("/admin/products");

      return res.data;
    },
  });

  // =========================
  // CREATE PRODUCT
  // =========================

  const useCreateProduct = () => {
    return useMutation({
      mutationFn: async (input: CreateProductInput) => {
        const res = await api.post("/admin/products", input);

        return res.data;
      },

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
      },
    });
  };

  // =========================
  // DELETE PRODUCT
  // =========================

  const useDeleteProduct = () => {
    return useMutation({
      mutationFn: async (id: string) => {
        const response = await api.delete(`/admin/products/${id}`);

        return response.data;
      },

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
      },
    });
  };

  // =========================
  // GET PRODUCT BY ID
  // =========================

  const useProductById = (id?: string) => {
    return useQuery({
      queryKey: ["product", id],

      queryFn: async () => {
        if (!id) {
          throw new Error("Product ID topilmadi");
        }

        const response = await api.get(`/admin/products/${id}`);

        return response.data;
      },

      enabled: !!id,
    });
  };

  // =========================
  // UPDATE PRODUCT
  // =========================

  const useUpdateProduct = () => {
    return useMutation({
      mutationFn: async ({
        id,
        data,
      }: {
        id: string;
        data: UpdateProductInput;
      }) => {
        const response = await api.patch(`/admin/products/${id}`, data);

        return response.data;
      },

      onSuccess: (_, variables) => {
        // Products table yangilansin
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });

        // Detail product ham yangilansin
        queryClient.invalidateQueries({
          queryKey: ["product", variables.id],
        });
      },
    });
  };

  return {
    isPending,
    data,

    useCreateProduct,
    useDeleteProduct,

    useProductById,
    useUpdateProduct,
  };
};

export default ProductService;
