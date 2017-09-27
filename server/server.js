

// save new something
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

var User = mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }

});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved to do', doc);

// }, (err) => {
//     console.log('Unable to save todo : ', err);

// });


var otherTodo = new Todo({
    text: '    Edit this video    ' // ok because trim, mongoose utilise le cast, taper 123 convertira en '123'

});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));

}, (err) => {
    console.log('Unable to save todo : ', err);

});


var user = new User({
    email: 'daivy.merlijs@hotmail.com      '

})

user.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));

}, (err) => {
    console.log('Unable to save user : ', err);

});