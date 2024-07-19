const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Transaction = sequelize.define('Transaction', {
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
  tableName: 'Transaksi',
  timestamps: false
});

Transaction.belongsTo(User, { foreignKey: 'Pengguna_id' });

module.exports = Transaction;
