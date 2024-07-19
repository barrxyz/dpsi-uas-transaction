const sequelize = require('../config/db');
const User = require('./user');
const Transaction = require('./transaction');
const Budget = require('./budget');
const FinancialGoal = require('./financial_goals');

// Define relationships
User.hasMany(Transaction, { foreignKey: 'Pengguna_id' });
Transaction.belongsTo(User, { foreignKey: 'Pengguna_id' });

User.hasMany(Budget, { foreignKey: 'Pengguna_id' });
Budget.belongsTo(User, { foreignKey: 'Pengguna_id' });

User.hasMany(FinancialGoal, { foreignKey: 'Pengguna_id' });
FinancialGoal.belongsTo(User, { foreignKey: 'Pengguna_id' });

module.exports = {
  sequelize,
  User,
  Transaction,
  Budget,
  FinancialGoal
};
