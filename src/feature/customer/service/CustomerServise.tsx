import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "../../service/pages/api";

const CustomerService = (id?: string) => {
  const queryClient = useQueryClient();

  // ==========================
  // Customers
  // ==========================
  const { isLoading, data, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await api.get("/admin/customers");

      return res.data;
    },
  });

  // ==========================
  // Customer Detail
  // ==========================
  const {
    isLoading: isCustomerLoading,
    data: customerData,
    isError: isCustomerError,
  } = useQuery({
    queryKey: ["customer", id],

    queryFn: async () => {
      const res = await api.get(`/admin/customers/${id}`);

      return res.data;
    },

    enabled: !!id,
  });

  // ==========================
  // Change Customer Status
  // ==========================
  const changeCustomerStatus = useMutation({
    mutationFn: async ({ id, isActive }: { id: string; isActive: boolean }) => {
      const res = await api.patch(`/admin/customers/${id}/status`, {
        isActive,
      });

      return res.data;
    },

    onSuccess: (_, variables) => {
      // Detailni yangilash
      queryClient.invalidateQueries({
        queryKey: ["customer", variables.id],
      });

      // Customers table'ni yangilash
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
  });

  return {
    isLoading,
    data,
    isError,

    isCustomerLoading,
    customerData,
    isCustomerError,

    changeCustomerStatus,
  };
};

export default CustomerService;
