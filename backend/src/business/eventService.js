const Event = require("../models/event");
const createError = require("../utils/createError");

const getEventsForUser = async (userId) => {
  return await Event.findAll({
    where: { userId },
    order: [["start", "ASC"]],
  });
};

const createEvent = async (userId, data) => {
  // data: { title, start, end }
  return await Event.create({ ...data, userId });
};

module.exports = { getEventsForUser, createEvent };
