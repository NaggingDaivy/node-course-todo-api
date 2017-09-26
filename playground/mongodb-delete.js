// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // même chose qu'au dessus


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    //     db.close();
    // })

   

    //deleteOne is  used to delete a single document
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    //     db.close();
    // })

    //findOneAndDelete returns the deleted document after having deleted it (in case you need its contents after the delete operation);
    db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result) => {
        console.log(result);
        db.close();
    })

    
    //db.close();
});