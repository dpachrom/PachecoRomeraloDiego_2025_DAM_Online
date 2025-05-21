// src/controllers/eventController.js
const {
  listEventsByUser,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../business/eventService");

async function listEvents(req, res, next) {
  try {
    const events = await listEventsByUser(req.user.id);
    res.json(events);
  } catch (err) {
    next(err);
  }
}

async function addEvent(req, res, next) {
  try {
    const ev = await createEvent(req.user.id, req.body);
    res.status(201).json(ev);
  } catch (err) {
    next(err);
  }
}

async function editEvent(req, res, next) {
  try {
    const ev = await updateEvent(req.user.id, req.params.id, req.body);
    res.json(ev);
  } catch (err) {
    next(err);
  }
}

async function removeEvent(req, res, next) {
  try {
    await deleteEvent(req.user.id, req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listEvents,
  addEvent,
  editEvent,
  removeEvent,
};
