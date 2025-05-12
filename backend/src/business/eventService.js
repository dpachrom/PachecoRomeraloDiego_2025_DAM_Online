// src/business/eventService.js
const { Event } = require('../models');
const createError = require('../utils/createError');

async function listEventsByUser(userId) {
  return await Event.findAll({
    where: { userId },
    order: [['start', 'ASC']],
  });
}

async function createEvent(userId, { title, start, end }) {
  return await Event.create({ title, start, end, userId });
}

async function updateEvent(userId, id, changes) {
  const ev = await Event.findOne({ where: { id, userId } });
  if (!ev) throw createError(404, 'Evento no encontrado');
  return await ev.update(changes);
}

async function deleteEvent(userId, id) {
  const ev = await Event.findOne({ where: { id, userId } });
  if (!ev) throw createError(404, 'Evento no encontrado');
  await ev.destroy();
  return;
}

module.exports = {
  listEventsByUser,
  createEvent,
  updateEvent,
  deleteEvent,
};
