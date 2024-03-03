const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async (req,res) => {
    const {title,amount,category,description,date} = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        //validation
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All feilds are required'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense added'})
    }catch(error){
        res.status(500).json({message:'server error'})
    }
    console.log(expense)
}
exports.getExpense = async (res,req) =>{
    try{
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message:'Server Error'})
    }
}
exports.deleteExpense = async (res,req) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json('Expense Deleted')
        })
        .catch((err) => {
            res.status(500).json({message:'Server Error'})
        })
}