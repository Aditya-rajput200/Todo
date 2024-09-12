const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    date: {
        type:Date,
        required: true,
       
    }
});

module.exports = mongoose.model('Todo', TodoSchema);