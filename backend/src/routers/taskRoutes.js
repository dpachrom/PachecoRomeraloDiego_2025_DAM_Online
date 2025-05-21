const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const taskController = require("../controllers/taskController");

router.get("/", auth, taskController.listTasks);
router.post("/", auth, taskController.addTask);
router.patch("/:id", auth, taskController.updateTask);
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
