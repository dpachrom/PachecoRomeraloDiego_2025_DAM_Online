// src/components/pages/CalendarPage.jsx

import React, { useState, useEffect } from "react";
import {
  Calendar,
  dateFnsLocalizer,
} from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
} from "date-fns";
import es from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { getEvents, createEvent } from "../../services/EventService"; // ej.

const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date, culture) =>
    startOfWeek(date, { locale: locales[culture] }),
  getDay,
  locales,
});

export default function CalendarPage() {
  // Estado de la lista de eventos
  const [events, setEvents] = useState([]);

  // Fecha y vista actuales
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  // Diálogo para crear evento
  const [dialog, setDialog] = useState({
    open: false,
    slotInfo: null,
    title: "",
  });

  // Carga inicial de eventos (podrías usar /api/events)
  useEffect(() => {
    (async () => {
      const data = await getEvents(); // debe devolver [{id,title,start,end},…]
      setEvents(data);
    })();
  }, []);

  // Navegación (prev/next/today)
  const handleNavigate = (date) => {
    setCurrentDate(date);
    // Si quisieras, podrías recargar eventos para ese mes:
    // fetchEvents({ start: inicioMes(date), end: finMes(date) })
  };

  // Cambio de vista (month, week, day, agenda)
  const handleView = (view) => {
    setCurrentView(view);
  };

  // Al hacer clic sobre un evento
  const handleSelectEvent = (event) => {
    alert(`Evento: ${event.title}\nDesde: ${event.start}\nHasta: ${event.end}`);
  };

  // Al hacer drag-and-select sobre huecos
  const handleSelectSlot = (slotInfo) => {
    setDialog({ open: true, slotInfo, title: "" });
  };

  // Guardar evento nuevo
  const handleDialogSave = async () => {
    const { slotInfo, title } = dialog;
    const newEv = {
      title,
      start: slotInfo.start,
      end: slotInfo.end,
    };
    // Llamada al backend
    const created = await createEvent(newEv);
    setEvents((prev) => [...prev, created]);
    setDialog({ open: false, slotInfo: null, title: "" });
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
        onSelectEvent={handleSelectEvent}
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 600 }}
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

      {/* Dialog para crear nuevo evento */}
      <Dialog open={dialog.open} onClose={() => setDialog({ ...dialog, open: false })}>
        <DialogTitle>Nuevo evento</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Título"
            value={dialog.title}
            onChange={(e) => setDialog({ ...dialog, title: e.target.value })}
            fullWidth
          />
          <Typography variant="body2">
            {`Desde: ${dialog.slotInfo?.start.toLocaleString()}`}
          </Typography>
          <Typography variant="body2">
            {`Hasta: ${dialog.slotInfo?.end.toLocaleString()}`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog({ ...dialog, open: false })}>Cancelar</Button>
          <Button
            variant="contained"
            disabled={!dialog.title.trim()}
            onClick={handleDialogSave}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
