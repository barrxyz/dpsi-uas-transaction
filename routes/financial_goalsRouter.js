const express = require('express');
const router = express.Router();
const financialGoalController = require('../controllers/financial_goalsController');
const auth = require('../middleware/auth');
router.post('/',auth, financialGoalController.createFinancialGoal);
router.get('/',auth, financialGoalController.getAllFinancialGoals);
router.get('/:id',auth, financialGoalController.getFinancialGoalById);
router.put('/:id',auth, financialGoalController.updateFinancialGoal);
router.delete('/:id',auth, financialGoalController.deleteFinancialGoal);

module.exports = router;
