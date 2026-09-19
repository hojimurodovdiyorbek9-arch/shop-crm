import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../service/pages/api";
import type { CreateCategoryType } from "../types/CategoriesType";

const CategoriesService = () => {
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await api.get("/admin/categories");

      return res.data;
    },
  });

  const createCotegories = useMutation({
    mutationFn: async (data: CreateCategoryType) => {
      console.log("MUTATION DATA:", data);

      const res = await api.post("/admin/categories", data);

      console.log("RESPONSE:", res.data);

      return res.data;
    },

    onSuccess: () => {
      console.log("CATEGORY CREATED!");

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (error: any) => {
      console.error("CREATE CATEGORY ERROR:", error);
      console.error("BACKEND ERROR:", error.response?.data);
      console.error("STATUS:", error.response?.status);
    },
  });

  const deleteCategory = useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/admin/categories/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
  const editCategories = useMutation({
    mutationKey: ["editCategories"],

    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: CreateCategoryType;
    }) => {
      const res = await api.patch(`/admin/categories/${id}`, data);

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return {
    isLoading,
    data,
    error,
    createCotegories,
    deleteCategory,
    editCategories,
  };
};

export default CategoriesService;
