const path = require('path');
const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense');

router.get('/add-expense',expenseController.getAddExpense);
router.post('/add-expense',expenseController.postAddExpense);
router.delete('/delete-expense/${id}',expenseController.deleteExpense);
router.get('/edit-expense/${id}',expenseController.editExpense);

module.exports = router;