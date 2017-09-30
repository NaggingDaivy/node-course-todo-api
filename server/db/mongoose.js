const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //

var url = process.env.MONGODB_URI;

mongoose.connect(url, {
    useMongoClient: true
});

module.exports = {
    mongoose: mongoose
}