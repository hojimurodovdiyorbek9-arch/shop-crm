import { useQuery } from "@tanstack/react-query";
import api from "../pages/api";

const useMe = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["useMe"],

    queryFn: () => api.get("/admin/auth/me"),
  });

  return {
    isLoading,
    data,
  };
};

export default useMe;
