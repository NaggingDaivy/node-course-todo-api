const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


var userId = "59cb71e114273f03b858a17111";
// var id = "59cf6b2921d55e29506a394c111";

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos',todos);

// });

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo)
//         return console.log('id not found')
//     console.log('Todo', todo);
// }).catch((err) => {
//     console.log(err);

// });

User.findById(userId).then((user) => {
    if(!user)
        return console.log('User not found');
    
    console.log(JSON.stringify(user,undefined,2));
}).catch((err) => console.log(err));