const Task = require('../models/task');
const createError = require('../utils/createError');

const getAllTasks = async () => {
  return await Task.findAll();
};

const updateTaskStatus = async (id, completed) => {
  const task = await Task.findByPk(id);
  if (!task) throw createError('Tarea no encontrada', 404);

  task.completed = completed;
  await task.save();
  return task;
};

const createTask = async (userId, title, description) => {
  if (!title) throw createError('El título es obligatorio', 400);
  const task = await Task.create({ userId, title, description });
  return task;
};

async function removeTask(userId, taskId) {
  const deletedCount = await Task.destroy({
    where: { id: taskId, userId }
  });
  if (!deletedCount) {
    throw createError('Tarea no encontrada o no autorizada', 404);
  }
}

module.exports = {
  getAllTasks,
  updateTaskStatus,
  createTask,
  removeTask,
};
