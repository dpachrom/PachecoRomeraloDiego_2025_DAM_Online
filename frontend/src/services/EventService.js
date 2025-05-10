// src/services/EventService.js
import api from "../api";

/**
 * Obtiene todos los eventos del usuario autenticado.
 * @returns {Promise<Array<{ id: number, title: string, start: string, end: string }>>}
 */
// src/services/EventService.js
export const getEvents = async () => {
  const { data } = await api.get("/events");
  // aquí convertimos cada start/end a Date
  return data.map((ev) => ({
    ...ev,
    start: new Date(ev.start),
    end:   new Date(ev.end),
  }));
};

export const createEvent = async (payload) => {
  const response = await api.post("/events", {
    title: payload.title,
    start: payload.start,
    end: payload.end,
  });
  return response.data;
};


