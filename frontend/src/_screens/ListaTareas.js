import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Switch,
  FormControlLabel,
  Typography,
} from "@mui/material";

function ListaTareas() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Tarea 1", completed: false },
    { id: 2, text: "Tarea 2", completed: false },
    { id: 3, text: "Tarea 3", completed: true },
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
    <div>
      <Typography variant="h3" gutterBottom>
        Lista de tareas
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={showPending}
            onChange={() => setShowPending(!showPending)}
          />
        }
        label="Mostrar solo pendientes"
      />
      <List>
        {filteredTasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListaTareas;
