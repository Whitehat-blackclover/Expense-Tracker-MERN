const mongooose = require('mongoose')
const ExpenseSchema = new    mongooose.Schema({
    title:{
        type:String,
        required: true,
        trim: true,
        maxLength: 50 
    },
    amount:{
        type:Number,
        required: true,
        trim:true,
        maxLength:20
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        trim:true,

    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    description: {
        type:String,
        required:true,
        maxLength:50,
        trim:true
    },
},{timestamps:true})

module.exports = mongooose.model('Expense',ExpenseSchema)