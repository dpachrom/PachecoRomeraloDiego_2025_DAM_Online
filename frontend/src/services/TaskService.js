
import api from "../api";

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async ({ title, description }) => {
  const response = await api.post("/tasks", { title, description });
  return response.data;
};

export const updateTask = async (id, payload) => {
  const { data } = await api.patch(`/tasks/${id}`, payload);
  return data;
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};
