/* import api from "../api";

export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data.map((ev) => ({
    ...ev,
    start: new Date(ev.start),
    end: new Date(ev.end),
  }));
};


export const createEvent = async (payload) => {
  const response = await api.post("/events", payload);
  const ev = response.data;
  return {
    ...ev,
    start: new Date(ev.start),
    end: new Date(ev.end),
  };
};
 */

import api from "../api";

/**
 * Obtiene todos los eventos del usuario autenticado,
 * y convierte start/end de string a Date.
 */
export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data.map((ev) => ({
    ...ev,
    start: new Date(ev.start),
    end: new Date(ev.end),
  }));
};

export const createEvent = async (payload) => {
  const response = await api.post("/events", payload);
  const ev = response.data;
  return {
    ...ev,
    start: new Date(ev.start),
    end: new Date(ev.end),
  };
};

export const updateEvent = async (id, changes) => {
  const response = await api.patch(`/events/${id}`, changes);
  const ev = response.data;
  return {
    ...ev,
    start: new Date(ev.start),
    end: new Date(ev.end),
  };
};

export const deleteEvent = async (id) => {
  await api.delete(`/events/${id}`);
};
