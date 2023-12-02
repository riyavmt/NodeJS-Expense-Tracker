const Expenses = require('../models/expense');

exports.postAddExpense = async (req,res)=>{
    try{
        const expense = await Expenses.create({...req.body});
        res.json(expense);
    }
    catch(err){console.log(err)}
}

exports.getAddExpense = async (req,res)=>{
    try{
        const expenses = await Expenses.findAll();
        res.json(expenses);
    }
    catch(err){console.log(err)}
}

exports.deleteExpense = async (req,res)=>{
    const id = req.params.id;
    try{
        const expense = await Expenses.findByPk(id);
        await expense.destroy();
        res.sendStatus(200);
    }
    catch(err){console.log(err)}
}

// exports.editExpense = async(req,res)=>{
//     const id = req.params.id;
//     try{
//         const expense = await Expenses.findByPk(id);
//         res.json(user);
//     }
//     catch(err){console.log(err)}
// }

