import React, { useState, useEffect } from "react";
import { List, Box } from "@mui/material";
import Heading from "../atoms/Heading";
import TaskItem from "../molecules/TaskItem";
import TaskFilter from "../molecules/TaskFilter";
import { getTasks, updateTaskStatus } from "../../services/TaskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showPending, setShowPending] = useState(false);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error al cargar tareas:", error);
      }
    };

    fetchAllTasks();
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

  const filteredTasks = showPending
    ? tasks.filter((t) => !t.completed)
    : tasks;

  return (
    <Box sx={{ p: 2 }}>
      <Heading text="Lista de tareas" variant="h3" sx={{ mb: 2 }} />
      <TaskFilter
        showPending={showPending}
        onToggleFilter={() => setShowPending(!showPending)}
      />
      <List>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
