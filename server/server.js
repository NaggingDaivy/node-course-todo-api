const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //

mongoose.connect('mongodb://localhost:27017/ToDoApp', {useMongoClient: true});

// save new something
var Todo = mongoose.model('Todo', { // model du document, à mettre au singulier car mongoose mettra le nom de la collec au pluriel

    text: {
        type: String

    },
    completed: {
        type: Boolean

    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved to do', doc);

}, (err) => {
    console.log('Unable to save todo : ', err);

});


var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));

}, (err) => {
    console.log('Unable to save todo : ', err);

});