// src/components/pages/CalendarPage.jsx

import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import esLocale from "date-fns/locale/es";

import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../services/EventService";

// registra el locale
registerLocale("es", esLocale);

// localizer para react-big-calendar
const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  // diálogo de creación / edición
  const [dialog, setDialog] = useState({
    open: false,
    isEdit: false,
    id: null,
    title: "",
    start: null,
    end: null,
  });

  // diálogo de detalle
  const [detailDialog, setDetailDialog] = useState({
    open: false,
    event: null,
  });

  // snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const closeSnackbar = () => setSnackbar((s) => ({ ...s, open: false }));

  // carga inicial
  useEffect(() => {
    (async () => {
      try {
        const evs = await getEvents();
        setEvents(evs);
      } catch (err) {
        setSnackbar({
          open: true,
          message: "Error al cargar eventos",
          severity: "error",
        });
      }
    })();
  }, []);

  // navegación y vista
  const handleNavigate = (date) => setCurrentDate(date);
  const handleView = (view) => setCurrentView(view);

  // arrastrar → actualizar fechas
  const handleEventDrop = ({ event, start, end }) => {
    updateEvent(event.id, { start, end })
      .then((updated) => {
        setEvents((prev) =>
          prev.map((e) => (e.id === updated.id ? updated : e))
        );
        setSnackbar({
          open: true,
          message: "Evento actualizado",
          severity: "success",
        });
      })
      .catch(() =>
        setSnackbar({
          open: true,
          message: "Error al actualizar evento",
          severity: "error",
        })
      );
  };

  // slot select → abrir creación
  const handleSelectSlot = ({ start, end }) =>
    setDialog({ open: true, isEdit: false, id: null, title: "", start, end });

  // click evento → detalle
  const handleSelectEvent = (ev) => setDetailDialog({ open: true, event: ev });

  // guardar / actualizar
  const handleDialogSave = async () => {
    const { isEdit, id, title, start, end } = dialog;
    try {
      const saved = isEdit
        ? await updateEvent(id, { title, start, end })
        : await createEvent({ title, start, end });

      setEvents((prev) =>
        isEdit
          ? prev.map((e) => (e.id === saved.id ? saved : e))
          : [...prev, saved]
      );
      setSnackbar({
        open: true,
        message: isEdit ? "Evento actualizado" : "Evento creado",
        severity: "success",
      });
      setDialog({
        open: false,
        isEdit: false,
        id: null,
        title: "",
        start: null,
        end: null,
      });
    } catch {
      setSnackbar({
        open: true,
        message: "Error al guardar evento",
        severity: "error",
      });
    }
  };

  // borrar desde detalle
  const handleDelete = () => {
    const { event } = detailDialog;
    deleteEvent(event.id)
      .then(() => {
        setEvents((prev) => prev.filter((e) => e.id !== event.id));
        setSnackbar({
          open: true,
          message: "Evento borrado",
          severity: "success",
        });
        setDetailDialog({ open: false, event: null });
      })
      .catch(() =>
        setSnackbar({
          open: true,
          message: "Error al borrar evento",
          severity: "error",
        })
      );
  };

  // editar desde detalle
  const handleEditFromDetail = () => {
    const { event } = detailDialog;
    setDialog({
      open: true,
      isEdit: true,
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
    });
    setDetailDialog({ open: false, event: null });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Calendario
      </Typography>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        view={currentView}
        onNavigate={handleNavigate}
        onView={handleView}
        draggable
        onEventDrop={handleEventDrop}
        onSelectEvent={handleSelectEvent}
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 1080 }}
        culture="es"
        messages={{
          next: "Sig.",
          previous: "Ant.",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "No hay eventos",
          showMore: (total) => `+${total} más`,
        }}
      />

      {/* Detalle */}
      <Dialog
        open={detailDialog.open}
        onClose={() => setDetailDialog({ open: false, event: null })}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Detalle del evento</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">{detailDialog.event?.title}</Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Desde:</strong> {detailDialog.event?.start.toLocaleString()}
          </Typography>
          <Typography>
            <strong>Hasta:</strong> {detailDialog.event?.end.toLocaleString()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleDelete}>
            Borrar
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button onClick={handleEditFromDetail}>Editar</Button>
          <Button onClick={() => setDetailDialog({ open: false, event: null })}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Creación / Edición */}
      <Dialog
        open={dialog.open}
        onClose={() => setDialog((d) => ({ ...d, open: false }))}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {dialog.isEdit ? "Editar evento" : "Nuevo evento"}
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Título"
            value={dialog.title}
            onChange={(e) =>
              setDialog((d) => ({ ...d, title: e.target.value }))
            }
            fullWidth
          />

          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Desde:</Typography>
              <ReactDatePicker
                selected={dialog.start}
                onChange={(date) => setDialog((d) => ({ ...d, start: date }))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="Pp"
                locale="es"
                customInput={<TextField fullWidth />}
                withPortal
                popperPlacement="bottom-start"
                popperModifiers={[
                  {
                    name: "preventOverflow",
                    options: { altAxis: true, tether: false },
                  },
                ]}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Hasta:</Typography>
              <ReactDatePicker
                selected={dialog.end}
                onChange={(date) => setDialog((d) => ({ ...d, end: date }))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="Pp"
                locale="es"
                customInput={<TextField fullWidth />}
                withPortal
                popperPlacement="bottom-start"
                popperModifiers={[
                  {
                    name: "preventOverflow",
                    options: { altAxis: true, tether: false },
                  },
                ]}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog((d) => ({ ...d, open: false }))}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            disabled={
              !dialog.title.trim() ||
              !dialog.start ||
              !dialog.end ||
              dialog.end <= dialog.start
            }
            onClick={handleDialogSave}
          >
            {dialog.isEdit ? "Actualizar" : "Guardar"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* ——— SNACKBAR ——— */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
