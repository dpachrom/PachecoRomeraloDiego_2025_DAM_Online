import React from "react";
import { ListItem, Checkbox, ListItemText } from "@mui/material";

const TaskItem = ({ task, onToggle }) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <ListItemText primary={task.text} />
    </ListItem>
  );
};

export default TaskItem;
