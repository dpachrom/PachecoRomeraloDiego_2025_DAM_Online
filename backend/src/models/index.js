"use strict";

const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const db = {};

// Importar modelos
db.User = require("./user");
db.Task = require("./task");
db.Event = require("./event");

// Asociaciones User ↔ Task
db.User.hasMany(db.Task, { foreignKey: "userId" });
db.Task.belongsTo(db.User, { foreignKey: "userId" });

// Asociaciones User ↔ Event
db.User.hasMany(db.Event, { foreignKey: "userId" });
db.Event.belongsTo(db.User, { foreignKey: "userId" });

// Exponer instancia y constructor
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
