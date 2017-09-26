// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb'); // même chose qu'au dessus


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        text: 'Eat lunch'
    }, {
        $set: {
            completed: true
        }
    }, {
        returnNewDocument: true
    }).then((result) => {
        console.log(result);
        db.close();
    });


    //db.close();
});