
import api from "../api";

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async ({ title, description }) => {
  const response = await api.post("/tasks", { title, description });
  return response.data;
};

export const updateTaskStatus = async (id, completed) => {
  const response = await api.patch(`/tasks/${id}`, { completed });
  return response.data;
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};
