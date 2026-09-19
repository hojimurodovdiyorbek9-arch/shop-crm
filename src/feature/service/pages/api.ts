import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("crmAccessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (err) => {
    const status = err.response?.status;
    const url = err.config?.url;

    // Login endpoint 401 bersa,
    // login sahifasidan redirect qilmaymiz
    if (status === 401 && !url?.includes("/admin/auth/login")) {
      localStorage.removeItem("crmAccessToken");
      localStorage.removeItem("crmRefreshToken");

      window.location.href = "/login";
    }

    return Promise.reject(err);
  },
);

export default api;
