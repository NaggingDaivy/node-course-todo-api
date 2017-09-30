const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/ToDoApp'

mongoose.connect(url, {
    useMongoClient: true
});

module.exports = {
    mongoose: mongoose
}