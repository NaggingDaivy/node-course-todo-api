var express = require('express');
var bodyParser = require('body-parser');


//var mongoose = require('./db/mongoose').mongoose; 
var {mongoose} = require('./db/mongoose'); 
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

//CRUD = create, read, update, delete
app.post('/todos', (req, res) => {
    //console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);

    }, (err) => {
        res.status(400).send(err);

    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');

});


app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({todos:todos});

    },(err) => {
        res.status(400).send(err);

    } );
});

// GET /todos/id

//"59cb72b2a55dcf1350b3b7f0";

app.get('/todos/:id',(req,res) => {

    var id = req.params.id;
    // valid id using isValid
        // 404 -se,d back empty send
    if(!ObjectID.isValid(id))
        return res.status(404).send();

    // findById
        //success
            //if todo -send it back
            //if nodo - send back 404 with empty
        //err
            // 400 - and send empty body back
    User.findById(id).then((todo) => {
        if(!todo)
            return res.status(404).send();

        res.send({todo:todo});
        
    }).catch((err) => {
        res.status(400).send()
    });
    

})

module.exports = {
    app: app
}