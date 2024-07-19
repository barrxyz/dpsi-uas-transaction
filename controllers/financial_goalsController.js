const { FinancialGoal } = require('../models');

// Create financial goal
exports.createFinancialGoal = async (req, res) => {
  try {
    const financialGoal = await FinancialGoal.create(req.body);
    res.status(201).json(financialGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all financial goals
exports.getAllFinancialGoals = async (req, res) => {
  try {
    const financialGoals = await FinancialGoal.findAll();
    res.json(financialGoals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get financial goal by id
exports.getFinancialGoalById = async (req, res) => {
  const { id } = req.params;
  try {
    const financialGoal = await FinancialGoal.findByPk(id);
    if (!financialGoal) {
      return res.status(404).json({ message: 'Financial goal not found' });
    }
    res.json(financialGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update financial goal
exports.updateFinancialGoal = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await FinancialGoal.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: 'Financial goal not found' });
    }
    res.json({ message: 'Financial goal updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete financial goal
exports.deleteFinancialGoal = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await FinancialGoal.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Financial goal not found' });
    }
    res.json({ message: 'Financial goal deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
