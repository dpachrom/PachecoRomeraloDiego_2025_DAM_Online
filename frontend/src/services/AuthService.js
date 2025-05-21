import api from "../api";

export const loginRequest = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data.token;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

export const registerRequest = async (payload) => {
  const response = await api.post("/auth/register", payload);
  return response.data;
};
