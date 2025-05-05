// src/services/taskService.js
import api from "../api";

/**
 * Obtiene todas las tareas del usuario autenticado.
 * @returns {Promise<Array>} Array de tareas
 */
export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};
/**
 * Crea una nueva tarea.
 * @param {{ title: string, description?: string }} payload
 * @returns {Promise<Object>} La tarea creada
 */
export const createTask = async ({ title, description }) => {
  const response = await api.post("/tasks", { title, description });
  return response.data;
};
/**
 * Actualiza el estado de completado de una tarea.
 * @param {number} id        ID de la tarea
 * @param {boolean} completed Nuevo estado
 * @returns {Promise<Object>} La tarea actualizada
 */
export const updateTaskStatus = async (id, completed) => {
  const response = await api.patch(`/tasks/${id}`, { completed });
  return response.data;
};
