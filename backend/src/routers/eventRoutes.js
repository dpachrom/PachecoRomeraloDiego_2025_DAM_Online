const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { listEvents, addEvent } = require("../controllers/eventController");

// todos requieren auth
router.get("/", auth, listEvents);
router.post("/", auth, addEvent);

module.exports = router;
