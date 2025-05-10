const taskService = require('../business/taskService');

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTask = await taskService.updateTaskStatus(id, completed);
    res.json(updatedTask);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;  // authMiddleware debe haber agregado req.user
    const newTask = await taskService.createTask(userId, title, description);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskService.removeTask(req.user.id, req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

module.exports = {
  getTasks,
  updateTask,
  createTask,
  deleteTask,
};
