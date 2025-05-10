import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TaskItem = ({ title, completed, onToggle, onDelete }) => (
  <ListItem
    secondaryAction={
      <>
        <IconButton edge="end" onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
        <Checkbox edge="end" checked={completed} onChange={onToggle} />
      </>
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
