const { getEventsForUser, createEventForUser } = require("../business/eventService");

async function listEvents(req, res) {
  try {
    const events = await getEventsForUser(req.user.id);
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function addEvent(req, res) {
  try {
    const { title, start, end } = req.body;
    const ev = await createEventForUser(req.user.id, { title, start, end });
    res.status(201).json(ev);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { listEvents, addEvent };