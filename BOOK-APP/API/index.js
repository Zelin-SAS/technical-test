const mongoose = require('mongoose');
const books = require('./routes/books');
const users = require('./routes/users');
const express = require('express');
const cors = require('cors');
const app = express();






mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify: false })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


app.use(cors())
app.use(express.json());
app.use('/api/books', books);
app.use('/api/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));