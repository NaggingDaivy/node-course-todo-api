var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', { // model du document, à mettre au singulier car mongoose mettra le nom de la collec au pluriel

    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true //remove white space before and after 

    },
    completed: {
        type: Boolean,
        default: false

    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo: Todo
}