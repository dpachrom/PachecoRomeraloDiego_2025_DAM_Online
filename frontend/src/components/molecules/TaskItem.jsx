import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

const TaskItem = ({ title, completed, onToggle }) => (
  <ListItem
    secondaryAction={
      <Checkbox edge="end" checked={completed} onChange={onToggle} />
    }
  >
    <ListItemText
      primary={
        <Typography
          variant="subtitle1"
          sx={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {title}
        </Typography>
      }
    />
  </ListItem>
);

export default TaskItem;
