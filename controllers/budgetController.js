const { Budget } = require('../models');

// Create budget
exports.createBudget = async (req, res) => {
  try {
    const budget = await Budget.create(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all budgets
exports.getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.findAll();
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get budget by id
exports.getBudgetById = async (req, res) => {
  const { id } = req.params;
  try {
    const budget = await Budget.findByPk(id);
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update budget
exports.updateBudget = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Budget.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.json({ message: 'Budget updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete budget
exports.deleteBudget = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Budget.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.json({ message: 'Budget deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
