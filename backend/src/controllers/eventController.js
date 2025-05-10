const { getEventsForUser, createEvent } = require("../business/eventService");

const listEvents = async (req, res) => {
  try {
    const events = await getEventsForUser(req.user.id);
    res.json(events);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

const addEvent = async (req, res) => {
  try {
    const { title, start, end } = req.body;
    const ev = await createEvent(req.user.id, { title, start, end });
    res.status(201).json(ev);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

module.exports = { listEvents, addEvent };
