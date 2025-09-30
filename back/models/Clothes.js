// models/Clothe.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Clothe = sequelize.define("Clothes", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  talla: {
    type: DataTypes.ENUM("S", "M", "L"),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "clothes",
  timestamps: true,
});

module.exports = Clothe;
