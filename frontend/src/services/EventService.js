// src/services/EventService.js
import api from "../api";

/**
 * Obtiene todos los eventos del usuario autenticado.
 * @returns {Promise<Array<{ id: number, title: string, start: string, end: string }>>}
 */
export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};

/**
 * Crea un nuevo evento para el usuario autenticado.
 * @param {{ title: string, start: Date, end: Date }} payload
 * @returns {Promise<{ id: number, title: string, start: string, end: string }>}
 */
export const createEvent = async (payload) => {
  const response = await api.post("/events", {
    title: payload.title,
    start: payload.start,
    end: payload.end,
  });
  return response.data;
};
