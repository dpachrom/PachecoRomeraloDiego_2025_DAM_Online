const Task = require("../models/task");
const createError = require("../utils/createError");

async function getTasksForUser(userId) {
  return await Task.findAll({
    where: { userId },
    order: [["id", "DESC"]],
  });
}

async function createTaskForUser(userId, data) {
  return await Task.create({ ...data, userId });
}

async function updateTaskForUser(userId, taskId, data) {
  const task = await Task.findOne({ where: { id: taskId, userId } });
  if (!task) throw createError("Tarea no encontrada", 404);
  return await task.update(data);
}

async function removeTaskForUser(userId, taskId) {
  const deleted = await Task.destroy({ where: { id: taskId, userId } });
  if (!deleted) throw createError("Tarea no encontrada", 404);
}

module.exports = {
  getTasksForUser,
  createTaskForUser,
  updateTaskForUser,
  removeTaskForUser,
};
