import React, { useState } from "react";
import { List, Box } from "@mui/material";
import Heading from "../atoms/Heading";
import TaskItem from "../molecules/TaskItem";
import TaskFilter from "../molecules/TaskFilter";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Tarea 1", completed: false },
    { id: 2, text: "Tarea 2", completed: false },
    { id: 3, text: "Tarea 3", completed: true },
    { id: 4, text: "Tarea 4", completed: false },
  ]);
  const [showPending, setShowPending] = useState(false);

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = showPending
    ? tasks.filter((task) => !task.completed)
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
