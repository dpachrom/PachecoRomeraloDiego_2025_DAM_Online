const {
  getTasksForUser,
  createTaskForUser,
  updateTaskForUser,
  removeTaskForUser,
} = require('../business/taskService');

const listTasks = async (req, res) => {
  try {
    const tasks = await getTasksForUser(req.user.id);
    res.json(tasks);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await createTaskForUser(req.user.id, { title, description });
    res.status(201).json(task);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const updated = await updateTaskForUser(req.user.id, req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await removeTaskForUser(req.user.id, req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

module.exports = { listTasks, addTask, updateTask, deleteTask };
