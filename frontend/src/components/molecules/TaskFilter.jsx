import { FormControlLabel, Switch } from "@mui/material";

const TaskFilter = ({ showPending, onToggleFilter }) => {
  return (
    <FormControlLabel
      control={<Switch checked={showPending} onChange={onToggleFilter} />}
      label="Pendientes"
    />
  );
};

export default TaskFilter;
