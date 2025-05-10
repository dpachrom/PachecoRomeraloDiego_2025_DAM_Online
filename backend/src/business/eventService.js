// src/business/eventService.js
const Event = require("../models/event");

async function getEventsForUser(userId) {
  return await Event.findAll({
    where: { userId },
    order: [["start", "ASC"]],
  });
}

async function createEventForUser(userId, { title, start, end }) {
  return await Event.create({ userId, title, start, end });
}

module.exports = {
  getEventsForUser,
  createEventForUser,
};
