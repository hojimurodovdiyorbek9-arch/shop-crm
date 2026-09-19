import { useQuery } from "@tanstack/react-query";
import api from "../pages/api";

const useMe = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["useMe"],
    queryFn: async () => {
      const res = await api.get("/admin/auth/me");

      return res.data;
    },
  });

  return {
    isLoading,
    data,
  };
};

export default useMe;
