import React, { useState, useEffect } from "react";
import { List, Box, Button } from "@mui/material";
import Heading from "../atoms/Heading";
import TaskItem from "../molecules/TaskItem";
import TaskFilter from "../molecules/TaskFilter";
import {
  getTasks,
  updateTaskStatus,
  createTask,
} from "../../services/TaskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showPending, setShowPending] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error al cargar tareas:", error);
      }
    })();
  }, []);

  const handleToggle = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    try {
      const updated = await updateTaskStatus(id, !task.completed);
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, completed: updated.completed } : t
        )
      );
    } catch (error) {
      console.error("Error al actualizar estado de tarea:", error);
    }
  };

  const handleAddTask = async () => {
    const title = window.prompt("Título de la nueva tarea:");
    if (!title) return;
    try {
      const newTask = await createTask({ title });
      setTasks((prev) => [newTask, ...prev]);
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  };

  const filteredTasks = showPending ? tasks.filter((t) => !t.completed) : tasks;

  return (
    <Box sx={{ p: 2 }}>
      <Heading text="Lista de tareas" variant="h3" sx={{ mb: 4 }} />

      {/* Flex container con gap para el botón y el filtro */}
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Button variant="contained" onClick={handleAddTask}>
          + Nueva tarea
        </Button>
        <TaskFilter
          showPending={showPending}
          onToggleFilter={() => setShowPending(!showPending)}
        />
      </Box>

      <List>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => handleToggle(task.id)}
          />
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
