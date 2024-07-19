const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const FinancialGoal = sequelize.define('FinancialGoal', {
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
  Pengguna_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  tableName: 'Tujuan_Keuangan',
  timestamps: false
});

FinancialGoal.belongsTo(User, { foreignKey: 'Pengguna_id' });

module.exports = FinancialGoal;
