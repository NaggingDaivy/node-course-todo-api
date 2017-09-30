const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


// Todo.remove
Todo.remove({}).then((res) => {
    console.log(res);
});


//Todo.findOneAndRemove
Todo.findOneAndRemove( {_id: '59cf912ba35fb0e82b18afdf'}).then((todo) => {
    
        console.log(todo);
    
    });

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('59cf912ba35fb0e82b18afdf').then((todo) => {

    console.log(todo);

});