import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content : {
        type : String,
        require : true,
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ] // Array of subTodos
},{timestamps : true})

const newTodo = mongoose.model('newTodo', todoSchema)