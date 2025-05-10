import api from "../api";

export const getProfile = () => api.get("/users/me").then(r => r.data);
export const updateProfile = (payload) =>
  api.patch("/users/me", payload).then(r => r.data);
