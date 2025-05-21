import React, { useState, useEffect } from "react";
import {
  List,
  Box,
  Button,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TaskFilter from "../molecules/TaskFilter";
import {
  getTasks,
  updateTask,
  createTask,
  deleteTask,
} from "../../services/TaskService";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [showPending, setShowPending] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [confirm, setConfirm] = useState({ open: false, id: null });

  useEffect(() => {
    (async () => {
      const data = await getTasks();
      setTasks(data);
    })();
  }, []);

  const handleAdd = async () => {
    const title = window.prompt("Título de la nueva tarea:");
    if (!title) return;
    const t = await createTask({ title });
    setTasks([t, ...tasks]);
  };

  const handleToggle = async (id) => {
    const t = tasks.find((x) => x.id === id);
    const updated = await updateTask(id, { completed: !t.completed });
    setTasks(tasks.map((x) => (x.id === id ? updated : x)));
  };

  const startEdit = (t) => {
    setEditingId(t.id);
    setEditingTitle(t.title);
  };
  const cancelEdit = () => setEditingId(null);
  const saveEdit = async () => {
    const updated = await updateTask(editingId, { title: editingTitle });
    setTasks(tasks.map((x) => (x.id === editingId ? updated : x)));
    cancelEdit();
  };

  const askDelete = (id) => setConfirm({ open: true, id });
  const closeDelete = () => setConfirm({ open: false, id: null });
  const confirmDelete = async () => {
    await deleteTask(confirm.id);
    setTasks(tasks.filter((x) => x.id !== confirm.id));
    closeDelete();
  };

  const filtered = showPending ? tasks.filter((t) => !t.completed) : tasks;

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
        <Button variant="contained" onClick={handleAdd}>
          + Nueva tarea
        </Button>
        <TaskFilter
          showPending={showPending}
          onToggleFilter={() => setShowPending(!showPending)}
        />
      </Box>

      <List>
        {filtered.map((t) => (
          <ListItem
            key={t.id}
            secondaryAction={
              <>
                <IconButton onClick={() => askDelete(t.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
                <Checkbox
                  checked={t.completed}
                  onChange={() => handleToggle(t.id)}
                />
              </>
            }
          >
            {editingId === t.id ? (
              <TextField
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onBlur={saveEdit}
                onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                autoFocus
                fullWidth
              />
            ) : (
              <ListItemText
                primary={t.title}
                onDoubleClick={() => startEdit(t)}
                sx={{ cursor: "pointer" }}
              />
            )}
          </ListItem>
        ))}
      </List>

      <Dialog open={confirm.open} onClose={closeDelete}>
        <DialogTitle>¿Eliminar esta tarea?</DialogTitle>
        <DialogActions>
          <Button onClick={closeDelete}>Cancelar</Button>
          <Button color="error" onClick={confirmDelete}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
