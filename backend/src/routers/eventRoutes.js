// src/routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  listEvents,
  addEvent,
  editEvent,
  removeEvent,
} = require("../controllers/eventController");

router.get("/", auth, listEvents);
router.post("/", auth, addEvent);
router.patch("/:id", auth, editEvent);
router.delete("/:id", auth, removeEvent);

module.exports = router;
