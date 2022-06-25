const Sequelize = require("sequelize");
const db = new Sequelize("organic", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
