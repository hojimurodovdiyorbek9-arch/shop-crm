import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../service/pages/api";

interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
}

const ProfileService = () => {
  const queryClient = useQueryClient();

  // GET PROFILE
  const { isLoading, data } = useQuery({
    queryKey: ["ProfileService"],

    queryFn: async () => {
      const res = await api.get("/admin/profile");

      return res.data.data;
    },
  });

  // EDIT PROFILE
  const { mutate: editProfile, isPending: isEditLoading } = useMutation({
    mutationKey: ["editProfile"],

    mutationFn: async (profileData: ProfileData) => {
      const res = await api.patch("/admin/profile", profileData);

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ProfileService"],
      });
    },
  });

  // CHANGE PASSWORD
  const { mutate: changePassword, isPending: isPasswordLoading } = useMutation({
    mutationKey: ["changePassword"],

    mutationFn: async (passwordData: PasswordData) => {
      const res = await api.patch("/admin/profile/password", passwordData);

      return res.data;
    },
  });

  return {
    isLoading,
    data,

    editProfile,
    isEditLoading,

    changePassword,
    isPasswordLoading,
  };
};

export default ProfileService;
