const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth');
router.post('/',auth, transactionController.createTransaction);
router.get('/',auth, transactionController.getAllTransactions);
router.get('/:id',auth, transactionController.getTransactionById);
router.put('/:id',auth, transactionController.updateTransaction);
router.delete('/:id',auth, transactionController.deleteTransaction);

module.exports = router;
