// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb'); // même chose qu'au dessus


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({completed: true}).count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);

    // });

    db.collection('Users').find({
        name: 'Andrew'
    }).count().then((count) => {
        console.log('Users');
        console.log(`Users count : ${count}`);
    })
    //db.close();
});