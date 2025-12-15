const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    id : {
        type : String,
        required : String
    },
    task : {
        type: String,
        required : true
    },
    priority : {
        type: String,
        required : true
    },
    date : {
        type: String,
        required : true
    },

})

module.exports = mongoose.model("Task",taskSchema);