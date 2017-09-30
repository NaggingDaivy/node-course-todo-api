var env = process.env.NODE_ENV || 'development';

switch (env) {
    case 'development':
        process.env.PORT = 3000;
        process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoApp';
        break;
    case 'test': 
        process.env.PORT = 3000;
        process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoAppTest';
        break;

    
    default: break;
}