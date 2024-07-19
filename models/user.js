const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tanggal: DataTypes.DATE,
  kategori: DataTypes.STRING,
  jumlah: DataTypes.FLOAT,
  deskripsi: DataTypes.STRING,
  password: {
    type: DataTypes.STRING, // Store hashed password
    allowNull: false // Password is required
  }
}, {
  tableName: 'Pengguna',
  timestamps: false
});

module.exports = User;
