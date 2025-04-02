import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

const TaskFilter = ({ showPending, onToggleFilter }) => {
  return (
    <FormControlLabel
      control={<Switch checked={showPending} onChange={onToggleFilter} />}
      label="Mostrar solo pendientes"
    />
  );
};

export default TaskFilter;
